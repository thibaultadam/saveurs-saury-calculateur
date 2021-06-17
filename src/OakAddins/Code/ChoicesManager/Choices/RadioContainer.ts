import { ChoiceContainer, ContainerCreationCallback } from "../../../../lib/Choices/ChoiceContainer";
import { ChoicesManager } from "../../../../lib/Choices/ChoicesManager";

export class RadioContainer extends ChoiceContainer
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