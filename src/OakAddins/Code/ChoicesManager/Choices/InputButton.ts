import ChoiceContainer from "../../../../lib/Choices/ChoiceContainer";
import ChoiceButton from "../../../../lib/Choices/ChoiceButton";

export default class InputButton extends ChoiceButton
{
    constructor(type : string, choiceContainer: ChoiceContainer, ...args : any[])
    {
        super(type, choiceContainer, args);
    }

    protected onBuild(...args : any[]) : void
    {
        
    }

    protected onClick(ev : MouseEvent, ...args : any[]) : void
    {
        
    }
}