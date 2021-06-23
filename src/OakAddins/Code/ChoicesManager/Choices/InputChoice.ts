import { ChoiceConstructionOptions } from "../../../../lib/ChoicesManagement/Choices/Choice";
import { ChoiceInput } from "../../../../lib/ChoicesManagement/Choices/ChoiceInput";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { TreeNode } from "../../Data/DataParser";
import { ChoiceData } from "../../Data/DataProvider";

export class InputChoice extends ChoiceInput
{
    constructor(constructionOptions: ChoiceConstructionOptions, ...buildArgs : any[])
    {
        super(constructionOptions, ...buildArgs);

        this.build((data: TreeNode["values"]["index"], choiceData: ChoiceData) => 
        {
            return createElement(`
            <input class="form-control" type="${choiceData.inputType || "text"}" id="${data.label}-${this.choiceContainer.id}" placeholder="${choiceData.placeholder || ""}" value="${choiceData.defaultValue || ""}">
            `) as HTMLInputElement;
        });
    }

    protected onBuild(data: TreeNode["values"]["index"], choiceData: ChoiceData): void
    {
        this.$container.appendChild(createElement(`
        <label for="${data.label}-${this.choiceContainer.id}">${data.text}</label>
        `) as HTMLElement);
    }

    protected onChange(ev : Event, data: TreeNode["values"]["index"], choiceData: ChoiceData): void
    {
        this.choicesEnumerator.set(this.choiceContainer.id, this.value);
    }

    protected onClick(ev : MouseEvent, data: TreeNode["values"]["index"], choiceData: ChoiceData): void
    {}
}