import { Data } from "../../Configurator";
import {Debug} from "../../Tools/Debug";
import {UIElement} from "../../UIElement";
import {ChoiceButton, ChoiceButtonConstructor } from "./ChoiceButton";
import {ChoicesManager} from "../ChoicesManager";
import { Choice, ChoiceConstructor } from "./Choice";
import { ChoicesEnumerator } from "../ChoicesEnumerator";

/**
 * @typedef ContainerCreationCallback
 * @returns HTMLElement
 */
export type ContainerCreationCallback = (type: string, ...args: any[]) => HTMLElement;

export type ChoiceContainerConstructor = new (
    constructionOptions: ChoiceContainerConstructionOptions, 
    ...buildArgs : any[]) 
    => ChoiceContainer

export type ChoiceContainerConstructionOptions = {
    id: number,
    type : string,
    containersCreation : ContainerCreationCallback[],
    choicesManager: ChoicesManager
}   

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
    public $containersBundle: HTMLElement[] = [];

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
    private choices: Choice[] = [];

    /**
     * Contiens la class constructrice des boutons de ce container
     * @type {ChoiceButtonConstructor}
     * @private
     * @memberof ChoiceContainer
     */
    private ChoiceClass!: ChoiceConstructor;
    
    /**
     * Contien la référance vers les données du configurateur
     * @type {Data}
     * @public
     * @memberof ChoiceContainer
     */
    public data : Data;

    /**
     * Contiens la string du type de container
     * @type {string}
     * @public
     * @memberof ChoiceContainer
     */
    public type : string;

    /**
     * Identifiant unique corespondant a la position du choix dans le ChoiceEnumerator
     * @type {string}
     * @public
     * @memberof ChoiceContainer
     */
    public id : number;

    /**
     * Référance au ChoiceManager
     * @type {string}
     * @public
     * @memberof ChoiceContainer
     */
    public choicesManager: ChoicesManager;

    /**
     * Référance au ChoiceEnumerator
     * @type {string}
     * @public
     * @memberof ChoiceContainer
     */
    public choicesEnumerator: ChoicesEnumerator;

    /**
     * // TODO ChoiceContainer constructor description
     * @param  {string} type
     * @param  {ContainerCreationCallback[]} containersCreation
     * @param  {ChoicesManager} choicesManager
     * @param  {any[]} ...args
     * @memberof ChoiceContainer
     */
    constructor(
        constructionOptions: ChoiceContainerConstructionOptions, 
        ...buildArgs : any[])
    {
        super();     
        
        this.id = constructionOptions.id;
        this.type = constructionOptions.type;
        this.choicesManager = constructionOptions.choicesManager;
        this.choicesEnumerator = constructionOptions.choicesManager.choicesEnumerator;

        this.data = this.choicesManager.data;
        this.buildArgs = buildArgs;

        for(const containerCreation of constructionOptions.containersCreation)
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

        this.$containersBundle.push(this.$container);
    }

    /**
     * //TODO : createButton description
     * @param {any[]} args 
     * @returns {ChoiceButton}
     * @protected
     * @memberof ChoiceContainer
     */
    protected createChoice(...args : any[]) : Choice
    {
        const button = new this.ChoiceClass({
            id: this.choices.length,
            type: this.type, 
            choiceContainer: this
        }, ...args);
        
        this.choices.push(button);
        button.on('click', (ev: MouseEvent, ...args: any) => this.emit('click', button, ev, ...args));

        // déclanche l'evenement `choiceBuilt` dans le bouton quand le choix est completement construit
        this.once('choiceBuilt', () => {
            this.onBuilt();
            button.emit('choiceBuilt');
        });

        this.emit('createButton', button);
        return button;
    }

    /**
     * Définit la class qui sera construite lors de la création de chaqu'un des element du choi, les déférentes instances de cette class servent comme émeteur d'evenement pour paser d'un choix a un autre
     * @param ButtonClass 
     * @returns {void}
     * @protected
     * @memberof ChoiceContainer
     */
    protected registerChoiceClass(ChoiceClass : ChoiceConstructor): void
    {
        this.ChoiceClass = ChoiceClass;
        Debug.log(`Registering Button Class for "${this.type}"`);
    }

    /**
     * Appelé lorsque le choix est completement crée dans les couches les plus hautes
     * @returns {void}
     * @protected
     * @memberof ChoiceContainer
     */
    protected abstract onBuilt(): void
    //#{}

    public delete(): void
    {
        for(let i = 0; i < this.choices.length; i++)
        {
            this.choices[i].delete();
            delete this.choices[i];
        }

        for(let i = 0; i < this.$containersBundle.length; i++)
        {
            this.$containersBundle[i].remove();
            delete this.$containersBundle[i];
        }
    }
}