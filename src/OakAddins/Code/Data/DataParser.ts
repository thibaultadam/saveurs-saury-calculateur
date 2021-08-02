import { Configurator } from "../../../lib/Configurator";
import { DataParser as _DataParser } from "../../../lib/Data/DataParser";
import { Debug } from "../../../lib/Tools/Debug";
import { ChoiceType } from "../ChoicesManager/ChoicesManager";

// BUG: JSON types pour les objet ne fonctionne pas
export type JsonTypes = any; //number | string | boolean | {[index : string] : JsonTypes} | JsonTypes[] | null | undefined;

export type TreeNode = {
    [index: string]: any,
    type: string,
    values: {
        [index : string] : {
            [index : string] : JsonTypes,
            label: string,
            next?: TreeNode | string,
            rootNext?: boolean
        }
    },
    next?: TreeNode | string
}

export type ChoiceData = {
    [index : string] : JsonTypes,
    type: ChoiceType,

    title?: string,
    description?: string,
    
    params?: {
        [index : string] : JsonTypes[],
    }

    inputType?: string,

    placeholder?: string,
    defaultValue?: string,
    
    parse?: {
        [index : string]: {
            [index : string] : string
        }
    },
};

export type ChoicesTypes = {
    types : {
        [index : string] : ChoiceData
    }   
};

export
class DataParser extends _DataParser {

    constructor(configurator: Configurator)
    {
        super(configurator);
        
        this.addDataParser('tree', this.treeParser, this);
        this.addDataParser('choicesTypes', this.choicesTypesParser, this);
    }

    /**
     * Parse the choicesTypes adding typeName fields
     * @param {ConfiguratorConfig} config 
     * @returns {ConfiguratorConfig} parsedData 
     */
    private choicesTypesParser(types: ChoicesTypes): ChoicesTypes
    {
        const parsedConfig = Object.assign({}, types); // cpy

        for(const choiceTypeName of Object.keys(parsedConfig.types))
        {
            parsedConfig.types[choiceTypeName].typeName = choiceTypeName;
        }

        return parsedConfig;
    }
    
    /**
     * Parse the tree adding label fields and choices dependancies
     * @param {TreeNode} data 
     * @returns {TreeNode} parsedData
     */
    private async treeParser(tree: TreeNode) : Promise<TreeNode>
    {
        const parsedTree = {} as TreeNode;

        await this.treeParserLoop(tree, parsedTree);
        return parsedTree;
    }

    private async treeParserLoop(current: TreeNode, formated: TreeNode): Promise<void>
    {
        formated.type = current.type;
        formated.values = {};

        const nexts = new Map<string, TreeNode>();

        if(!current.values)
        {
            return;
        }
        
        for(const choiceKey of Object.keys(current.values))
        {
            const choice = current.values[choiceKey];
            formated.values[choiceKey] = {
                label: choiceKey
            };

            for(const valueKey of Object.keys(choice))
            {
                const value = choice[valueKey];

                // pour charger un choix suivant externe
                const loadRemote = async(path: string) =>
                {
                    let remoteValue: TreeNode | null = null;

                    try {
                        remoteValue = await (await fetch(`${this.data.root}/${path}`)).json();
                    }
                    catch(error)
                    {
                        Debug.error(`can't fetch next remote dependancie`);
                    }
                    finally
                    {
                        if(remoteValue)
                        {
                            // the remote value become the value
                            choice.next = remoteValue;
                            nexts.set(choiceKey, remoteValue);
                        }
                    }
                }

                switch(valueKey)
                {
                    default:
                        formated.values[choiceKey][valueKey] = value;
                    break;
                    case "end":
                        return;
                    case "next":

                        if(typeof value === "object")
                        {
                            nexts.set(choiceKey, value as TreeNode);
                        }
                        if(typeof value === "string")
                        {
                            await loadRemote(value);
                        }

                    break;
                    case "rootNext":

                        if(typeof current.next === "object")
                        {
                            choice.next = current.next;
                            formated.values[choiceKey].next = current.next;
                            
                            nexts.set(choiceKey, choice.next);
                        }
                        if(typeof current.next === "string")
                        {
                            await loadRemote(current.next);
                        }
                        
                    break;
                }
            }
        }

        for(const next of nexts.entries())
        {
            formated.values[next[0]].next = {} as TreeNode;
            await this.treeParserLoop(next[1], formated.values[next[0]].next as TreeNode);
        }
    }
}