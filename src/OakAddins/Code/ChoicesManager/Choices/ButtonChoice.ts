import { ChoiceContainer } from "../../../../lib/Choices/ChoiceContainer";
import { ChoiceButton } from "../../../../lib/Choices/ChoiceButton";
import { TreeNode } from "../../Data/DataParser";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";

export class ButtonChoice extends ChoiceButton
{
    constructor(type : string, choiceContainer: ChoiceContainer, ...buildArgs : any[])
    {
        super(type, choiceContainer, ...buildArgs);

        this.build((data: TreeNode["values"]["index"]) => 
        {
            return createElement(`<button>${data.label}</button>`) as HTMLElement
        });
    }

    protected onBuild(data: TreeNode["values"]["index"], choiceIndex: number) : void
    {
        
    }

    protected onClick(ev : MouseEvent, data: TreeNode["values"]["index"], choiceIndex: number) : void
    {
        this.choiceEnumerator.set(choiceIndex, data.label);
        this.choiceEnumerator.goTo(choiceIndex + 1);
    }
}