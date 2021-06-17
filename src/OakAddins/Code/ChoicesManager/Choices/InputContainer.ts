import { ChoiceContainer, ContainerCreationCallback } from "../../../../lib/Choices/ChoiceContainer";
import { ChoicesManager } from "../../../../lib/Choices/ChoicesManager";

export class InputContainer extends ChoiceContainer
{
    constructor(
        type: string, 
        containersCreation : ContainerCreationCallback[],
        choicesManager: ChoicesManager, 
        ...buildArgs : any[])
    {
        super({type, containersCreation, choicesManager}, buildArgs);
    }
}