import { ChoiceContainer, ContainerCreationCallback } from "../../../../lib/Choices/ChoiceContainer";
import { ChoicesManager } from "../../../../lib/Choices/ChoicesManager";
import { Debug } from "../../../../lib/Tools/Debug";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { TreeNode } from "../../Data/DataParser";
import { ChoiceData } from "../../Data/DataProvider";
import { ButtonChoice } from "./ButtonChoice";

export class ButtonContainer extends ChoiceContainer
{
    constructor (
        type: string, 
        containersCreation : ContainerCreationCallback[],
        choicesManager: ChoicesManager, 
        data : TreeNode,
        choiceData: ChoiceData,
        ...buildArgs : any[])
    {
        super({type, containersCreation, choicesManager}, ...buildArgs);
        this.registerChoiceClass(ButtonChoice);

        // si le container existe déja c'est que le choix est en train de ce recrée, donc on le détruit
        this.$container?.remove()

        this.createNewContainer(() => createElement(`<div><div>${choiceData.title}</div></div>`) as HTMLElement);

        for(const buttonData of Object.values(data.values))
        {
            console.log(buttonData);

            this.createChoice(buttonData, this.choicesManager.choicesEnumerator.current.index);
        }
    }
}