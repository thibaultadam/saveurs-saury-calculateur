import { ChoiceContainer, ChoiceContainerConstructionOptions } from "../../../../lib/ChoicesManagement/Choices/ChoiceContainer";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { ChoiceData, TreeNode } from "../../Data/DataParser";
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
        <div class="my-4">
            <h6 class="my-2 fs-6">${choiceData.title}</h6>
        </div>`) as HTMLElement);

        this.createNewContainer(() => createElement(`
        <div class="btn-group" role="group" aria-label="${this.type}-${this.id}"></div>
        `) as HTMLElement);

        for(const buttonData of Object.values(node.values))
        {
            this.createChoice(buttonData, choiceData);
        }

        if(this.choices[0])
        {
            (this.choices[0] as RadioChoice).click();
        }
    }

    protected onBuilt(): void
    {
        this.$container.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}