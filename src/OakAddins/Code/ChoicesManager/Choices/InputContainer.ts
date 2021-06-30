import { ChoiceContainer, ChoiceContainerConstructionOptions, ContainerCreationCallback } from "../../../../lib/ChoicesManagement/Choices/ChoiceContainer";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { TreeNode } from "../../Data/DataParser";
import { ChoiceData } from "../../Data/DataProvider";
import { parseChoiceData } from "../../Tools/ParseTools";
import { InputChoice } from "./InputChoice";

export class InputContainer extends ChoiceContainer
{
    private choiceData: ChoiceData;
    private node: TreeNode;

    constructor (
        constructionOptions: ChoiceContainerConstructionOptions, 
        node : TreeNode,
        choiceData: ChoiceData)
    {
        super(constructionOptions, node, choiceData);
        this.registerChoiceClass(InputChoice);

        this.node = node;
        this.choiceData = parseChoiceData(choiceData, this.choicesEnumerator);
        
        this.createNewContainer(() => createElement(`
        <div>
            <p class="my-2 fs-6">${this.choiceData.title}</p>
        </div>`) as HTMLElement);

        this.createNewContainer(() => createElement(`<div class="form-floating my-2">`) as HTMLElement);

        for(const buttonData of Object.values(node.values))
        {
            this.createChoice(buttonData, this.choiceData);
        }
    }

    protected onBuilt(): void
    {
        // lorsque le choix est completement construit on vérifit si le parametre buildNext n'est pas définit dans les données 
        // et dans ce cas on construit le choix suivant
        // TODO : Enhancement, gerer le parsing des evenements et des parametes d'app dans ChoiceParamParser 
        if(this.choiceData?.params)
        {
            if(this.choiceData.params?.buildNext)
            {
                // TODO : un peut gitan il faut proprifier ça
                this.choicesEnumerator.next(Object.values(this.node.values)[0].label);
            }
        }
    }
}