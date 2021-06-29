import { ChoiceContainer, ChoiceContainerConstructionOptions } from "../../../../lib/ChoicesManagement/Choices/ChoiceContainer";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { TreeNode } from "../../Data/DataParser";
import { ChoiceData } from "../../Data/DataProvider";
import { RadioChoice } from "./RadioChoice";

export class RadioContainer extends ChoiceContainer
{
    constructor (
        constructionOptions: ChoiceContainerConstructionOptions, 
        node : TreeNode,
        choiceData: ChoiceData)
    {
        super(constructionOptions, node, choiceData);
        this.registerChoiceClass(RadioChoice);

        this.createNewContainer(() => createElement(`
        <div class="my-2">
            <p class="my-2 fs-6">${choiceData.title}</p>
        </div>`) as HTMLElement);

        this.createNewContainer(() => createElement(`
        <div class="btn-group" role="group" aria-label="${this.type}-${this.id}"></div>
        `) as HTMLElement);

        for(const buttonData of Object.values(node.values))
        {
            this.createChoice(buttonData, choiceData);
        }
    }

    protected onBuilt(): void
    {}
}