import { ChoiceContainer, ChoiceContainerConstructionOptions, ContainerCreationCallback } from "../../../../lib/ChoicesManagement/Choices/ChoiceContainer";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { TreeNode } from "../../Data/DataParser";
import { ChoiceData } from "../../Data/DataProvider";
import { ButtonChoice } from "./ButtonChoice";

export class ButtonContainer extends ChoiceContainer
{
    constructor (
        constructionOptions: ChoiceContainerConstructionOptions, 
        node : TreeNode,
        choiceData: ChoiceData)
    {
        super(constructionOptions, node, choiceData);
        this.registerChoiceClass(ButtonChoice);

        this.createNewContainer(() => createElement(`
        <div class="row">
            <p class="my-2 fs-6">${choiceData.title}</p>
        </div>`) as HTMLElement);

        this.createNewContainer(() => createElement(`<div class="col" role="group" aria-label="${this.type}-${this.id}">`) as HTMLElement);

        for(const buttonData of Object.values(node.values))
        {
            this.createChoice(buttonData, choiceData);
        }
    }

    protected onBuilt(): void
    {}
}