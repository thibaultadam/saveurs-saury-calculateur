import { ChoiceData, TreeNode } from "../../Data/DataParser";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { ChoiceButton } from "../../../../lib/ChoicesManagement/Choices/ChoiceButton";
import { Debug } from "../../../../lib/Tools/Debug";
import { ChoiceConstructionOptions } from "../../../../lib/ChoicesManagement/Choices/Choice";

export class RadioChoice extends ChoiceButton
{
    constructor(constructionOptions: ChoiceConstructionOptions, ...buildArgs : any[])
    {
        super(constructionOptions, ...buildArgs);

        this.build((data: TreeNode["values"]["index"], choiceData: ChoiceData) => 
        {
            // TODO : rajouter un case lors que le Label est égal au type de volume actuel  (mal expliqué)
            return createElement(`
            <input type="radio" class="btn-check" name="${this.choiceContainer.type}-${this.choiceContainer.id}" id="${data.label}-${this.choiceContainer.id}" autocomplete="off">
            `) as HTMLElement;
        });
    }

    protected onBuild(data: TreeNode["values"]["index"], choiceData: ChoiceData) : void
    {
        const label = createElement(`
            <label class="btn btn-outline-primary btn-indigo" for="${data.label}-${this.choiceContainer.id}">${data.label}</label>
            `) as HTMLElement;

        this.$container.appendChild(label);
    }

    protected onBuilt(data: TreeNode["values"]["index"], choiceData: ChoiceData) : void
    {}

    protected onClick(ev : MouseEvent, data: TreeNode["values"]["index"], choiceData: ChoiceData) : void
    {
        Debug.log('click', 'data', data, 'choiceIndex', this.choiceContainer.id);

        this.choicesEnumerator.set(this.choiceContainer.id, data.label);
        this.choicesEnumerator.goTo(this.choiceContainer.id + 1);
    }
}