import {ChoiceContainer} from "../../../../lib/Choices/ChoiceContainer";
import {ChoiceInput} from "../../../../lib/Choices/ChoiceInput";

export  class InputChoice extends ChoiceInput
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

    protected onChange(ev : Event, ...args : any[]) : void
    {

    }
}