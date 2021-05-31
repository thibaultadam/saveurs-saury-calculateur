import { Data } from "../Configurator";
import Debug from "../Tools/Debug";
import UIElement from "../UIElement";
import ChoiceButton, { ChoiceButtonConstructor } from "./ChoiceButton";
import ChoicesManager, { ChoicesManagerConstructor } from "./ChoicesManager";

export type ContainerCreationCallback = (type : string, ...args : any[]) => HTMLElement;

export type ChoiceContainerConstructor = new (type : string, 
    containersCreation : ContainerCreationCallback[], 
    choicesManager: ChoicesManager, 
    ...args : any[]) 
    => ChoiceContainer

export default
abstract class ChoiceContainer extends UIElement {

    public container!: HTMLElement;
    public containersbundle: HTMLElement[] = [];

    private buildArgs : any[];
    private buttons: ChoiceButton[] = [];
    private ButtonClass!: ChoiceButtonConstructor;
    
    public data : Data;

    /**
     * // TODO ChoiceContainer constructor description
     * @param type 
     * @param choicesManager 
     * @param data 
     * @param args...
     */
    constructor(
        public type : string, 
        containersCreation : ContainerCreationCallback[], 
        public choicesManager: ChoicesManager, 
        ...args : any[])
    {
        super();

        this.data = this.choicesManager.data;

        this.buildArgs = args;

        for(const containerCreation of containersCreation)
        {
            this.createNewContainer(containerCreation);
        }
    }

    /**
     * // TODO creationCallback description
     * @param creationCallback
     */
    public createNewContainer(creationCallback : ContainerCreationCallback)
    {
        // si il n'existe pas de container le nouveau container deviens le container
        if(!this.container)
        {
            this.container = creationCallback(this.type, ...this.buildArgs);
            this.choicesManager.configurator?.container?.appendChild(this.container);
        }
        // si le container est deja définit on rajoute le nouveau container crée a l'interieur du container et le nouveau container deviens le container
        else
        {
            const newContainer = creationCallback(this.type, ...this.buildArgs);
            this.container = this.container.appendChild(newContainer);
        }

        this.containersbundle.push(this.container);
    }

    /**
     * //TODO : createButton description
     * @param args 
     */
    protected createButton(...args : any[]) : ChoiceButton
    {
        const button : ChoiceButton = new this.ButtonClass(this.type, this, ...args);
        this.container.appendChild(button.container);
        
        this.buttons.push(button);
        button.on('click', (ev: MouseEvent, ...args: any) => this.emit('click', button, ev, ...args));

        this.emit('createButton', button);
        return button;
    }

    /**
     * //TODO : createButton registerButtonClass
     * @param ButtonClass 
     */
    protected registerButtonClass(ButtonClass : ChoiceButtonConstructor)
    {
        this.ButtonClass = ButtonClass;
        Debug.log(`Registering Button Class for "${this.type}"`);
    }
}