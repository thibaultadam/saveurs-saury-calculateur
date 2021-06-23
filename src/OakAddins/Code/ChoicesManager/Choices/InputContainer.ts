import { ChoiceContainer, ChoiceContainerConstructionOptions, ContainerCreationCallback } from "../../../../lib/ChoicesManagement/Choices/ChoiceContainer";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { TreeNode } from "../../Data/DataParser";
import { ChoiceData } from "../../Data/DataProvider";
import { stringReplace } from "../../Tools/ParseTools";
import { InputChoice } from "./InputChoice";

export class InputContainer extends ChoiceContainer
{
    constructor (
        constructionOptions: ChoiceContainerConstructionOptions, 
        node : TreeNode,
        choiceData: ChoiceData)
    {
        super(constructionOptions, node, choiceData);
        this.registerChoiceClass(InputChoice);

        let title = choiceData.title as string;

        if(choiceData.titleParse)
        {
            title = stringReplace(title, choiceData.titleParse as {[index: string]: string}, {
                unit: this.choicesManager.choicesEnumerator.getByLabel('unit')?.value as string
            });
        }
        
        this.createNewContainer(() => createElement(`
        <div>
            <p class="my-2 fs-6">${title}</p>
        </div>`) as HTMLElement);

        this.createNewContainer(() => createElement(`<div class="form-floating my-2">`) as HTMLElement);

        for(const buttonData of Object.values(node.values))
        {
            this.createChoice(buttonData, choiceData);
        }
    }
}