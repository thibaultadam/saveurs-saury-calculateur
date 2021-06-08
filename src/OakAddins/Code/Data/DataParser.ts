import Configurator from "../../../lib/Configurator";
import SuperDataParser from "../../../lib/Data/DataParser";
import Debug from "../../../lib/Tools/Debug";

type JsonTypes = number | string | boolean | object | [] | null | undefined;

export type TreeNode = {
    type: string,
    values: {
        [index : string] : {
            [index : string] : JsonTypes,
            next?: TreeNode | string,
            rootNext?: boolean
        }
    },
    next?: TreeNode | string
}

export default
class DataParser extends SuperDataParser {

    constructor(configurator: Configurator)
    {
        super(configurator);
        
        this.addDataParser('tree', this.treeParser, this);
    }

    /**
     * Parse the tree adding label fields and choices dependancies
     * @param data 
     */
    private async treeParser(tree: TreeNode) : Promise<TreeNode>
    {
        const parsedTree : TreeNode | any = {};

        await this.treeParserLoop(tree, parsedTree);
        return parsedTree;
    }

    private async treeParserLoop(current: TreeNode, formated: TreeNode): Promise<void>
    {
        formated.type = current.type;
        formated.values = {};

        const nexts = new Map<string, TreeNode>();

        for(const choiceKey of Object.keys(current.values))
        {
            const choice = current.values[choiceKey];
            formated.values[choiceKey] = {};
            formated.values[choiceKey].label = choiceKey;

            for(const valueKey of Object.keys(choice))
            {
                const value = choice[valueKey];

                switch(valueKey)
                {
                    default:
                        formated.values[choiceKey][valueKey] = value;
                    break;
                    case "next":

                        if(typeof value === "object")
                        {
                            nexts.set(choiceKey, value as TreeNode);
                        }
                        if(typeof value === "string")
                        {
                            let remoteValue: TreeNode | null = null;

                            try {
                                remoteValue = await (await fetch(`${this.data.root}/${value}`)).json();
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
                                    nexts.set(choiceKey, remoteValue as TreeNode);
                                }
                            }
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
                            let remoteValue: TreeNode | null = null;

                            try {
                                remoteValue = await (await fetch(`${this.data.root}/${current.next}`)).json();
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
                                    nexts.set(choiceKey, remoteValue as TreeNode);
                                }
                            }
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