import { Data } from "../Configurator";
import {Debug} from "../Tools/Debug";
import {UIElement} from "../UIElement";
import {ChoiceButton, ChoiceButtonConstructor } from "./ChoiceButton";
import {ChoicesManager} from "./ChoicesManager";

/**
 * @typedef ContainerCreationCallback
 * @returns HTMLElement
 */
export type ContainerCreationCallback = (type: string, ...args: any[]) => HTMLElement;

export type ChoiceContainerConstructor = new (type : string, 
    containersCreation : ContainerCreationCallback[], 
    choicesManager: ChoicesManager, 
    ...args : any[]) 
    => ChoiceContainer

/**
 * Class abstraite des conteneurs de choix
 * @alias ChoiceContainer
 * @extends UIElement
 * @class
 * @abstract
 */
export
abstract class ChoiceContainer extends UIElement {

    /**
     * Le container DOM
     * @type {HTMLElement}
     * @public
     * @memberof ChoiceContainer
     */
    public $container!: HTMLElement;

    /**
     * // TODO : containersbundle
     * @type {HTMLElement[]}
     * @private
     * @memberof ChoiceContainer
     */
    public containersbundle: HTMLElement[] = [];

    /**
     * Contiens les arguments de construction des boutons
     * @type {any[]}
     * @private
     * @memberof ChoiceContainer
     */
    private buildArgs : any[];

    /**
     * Contiens les instances de boutons de ce container
     * @type {ChoiceButton[]}
     * @private
     * @memberof ChoiceContainer
     */
    private buttons: ChoiceButton[] = [];

    /**
     * Contiens la class constructrice des boutons de ce container
     * @type {ChoiceButtonConstructor}
     * @private
     * @memberof ChoiceContainer
     */
    private ButtonClass!: ChoiceButtonConstructor;
    
    /**
     * Contien la référance vers les données du configurateur
     * @type {Data}
     * @public
     * @memberof ChoiceContainer
     */
    public data : Data;

    /**
     * // TODO ChoiceContainer constructor description
     * @param  {string} type
     * @param  {ContainerCreationCallback[]} containersCreation
     * @param  {ChoicesManager} choicesManager
     * @param  {any[]} ...args
     * @memberof ChoiceContainer
     */
    constructor(
        /**
         * Contiens la string du type de container
         * @type {string}
         * @public
         * @memberof ChoiceContainer
         */
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
     * // TODO createNewContainer description
     * @param {ContainerCreationCallback} creationCallback
     * @returns {void}
     * @public
     * @memberof ChoiceContainer
     */
    public createNewContainer(creationCallback : ContainerCreationCallback): void
    {
        // si il n'existe pas de container le nouveau container deviens le container
        if(!this.$container)
        {
            this.$container = creationCallback(this.type, ...this.buildArgs);
            this.choicesManager.configurator?.$container?.appendChild(this.$container);
        }
        // si le container est deja définit on rajoute le nouveau container crée a l'interieur du container et le nouveau container deviens le container
        else
        {
            const newContainer = creationCallback(this.type, ...this.buildArgs);
            this.$container = this.$container.appendChild(newContainer);
        }

        this.containersbundle.push(this.$container);
    }

    /**
     * //TODO : createButton description
     * @param {any[]} args 
     * @returns {ChoiceButton}
     * @protected
     * @memberof ChoiceContainer
     */
    protected createButton(...args : any[]) : ChoiceButton
    {
        const button : ChoiceButton = new this.ButtonClass(this.type, this, ...args);
        this.$container.appendChild(button.$container);
        
        this.buttons.push(button);
        button.on('click', (ev: MouseEvent, ...args: any) => this.emit('click', button, ev, ...args));

        this.emit('createButton', button);
        return button;
    }

    /**
     * //TODO : createButton registerButtonClass
     * @param ButtonClass 
     * @returns {void}
     * @protected
     * @memberof ChoiceContainer
     */
    protected registerButtonClass(ButtonClass : ChoiceButtonConstructor): void
    {
        this.ButtonClass = ButtonClass;
        Debug.log(`Registering Button Class for "${this.type}"`);
    }
}