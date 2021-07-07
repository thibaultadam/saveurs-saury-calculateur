import {Debug} from "../../Tools/Debug";
import {UIElement} from "../../UIElement";
import {ChoiceContainer} from "./ChoiceContainer";
import {ChoicesEnumerator} from "../ChoicesEnumerator";

export type ChoiceConstructor = new (
    constructionOptions: ChoiceConstructionOptions,
    ...buildArgs : any[]) 
    => Choice

export type ChoiceConstructionOptions = {
    id : number,
    type : string, 
    choiceContainer: ChoiceContainer,
}
    
/**
 * @alias Choice
 * @class
 * @extends UIElement
 * @abstract
 */
export
abstract class Choice extends UIElement {

    /**
     * Identifieur de position dans la liste des choix
     * @public
     * @type {number}
     * @memberof Choice
     */
     public id : number;

    /**
     * La string du type de button
     * @public
     * @type {string}
     * @memberof Choice
     */
    public type : string;

    /**
     * référance a l'énumérateur de choix car souvent les choix sont énuméré a partir d'une action d'un choiceButton
     * @public
     * @type {ChoicesEnumerator}
     * @memberof Choice
     */
    public choicesEnumerator: ChoicesEnumerator;
    
    /**
     * Le container DOM du choix
     * @public
     * @type {HTMLElement}
     * @memberof Choice
     */
    public $container: HTMLElement;
    
    /**
     * Le container DOM qui est la source des événements
     * @public
     * @type {HTMLElement}
     * @memberof Choice
     */
    public $eventProvider!: HTMLElement;
    
    /**
     * Les arguments de construction du button
     * @protected
     * @type {any[]}
     * @memberof Choice
     */
    protected buildArgs : any[];

    /**
     * Référance a l'instance du container de ce choix
     * @public
     * @type {ChoiceContainer}
     * @memberof Choice
     */
    public choiceContainer: ChoiceContainer;

    /**
     * @param  {string} type
     * @param  {ChoiceContainer} choiceContainer
     * @param  {any[]} ...args
     */
    constructor(
        // type : string, 
        // choiceContainer: ChoiceContainer, 
        constructionOptions: ChoiceConstructionOptions,
        ...buildArgs : any[])
    {
        super();

        this.id = constructionOptions.id;
        this.type = constructionOptions.type;
        this.choiceContainer = constructionOptions.choiceContainer;
        this.choicesEnumerator = this.choiceContainer.choicesManager.choicesEnumerator;
        this.$container = this.choiceContainer.$container;
        this.buildArgs = buildArgs;
    }

    /**
     * Permet de crée le/les élément(s) DOM qui constitue le boutton
     * @param  {BuildCallback} buildCallback
     * @returns {Choice}
     * @memberof Choice
     */
    protected build(buildCallback : (...args : any[]) => HTMLElement): Choice
    {
        Debug.info(`Building button type "${this.type}" with args`, ...this.buildArgs)

        this.$eventProvider = buildCallback(...this.buildArgs);
        this.$container.appendChild(this.$eventProvider);

        this.onBuild(...this.buildArgs);
        this.emit('build', ...this.buildArgs);
        
        this.once('choiceBuilt', () => this.onBuilt(...this.buildArgs));

        return this;
    }

    /**
     * Est appeler lorsque la construction du boutton est déclanché
     * @abstract
     * @param  {any[]} ...args
     * @returns {void}
     * @example
     * onBuild()
     * {
     *  this.buildButton(() => document.createElement('div'));
     * }
     * @memberof ChoiceButton
     */
    protected abstract onBuild(...args : any[]) : void;
    //#{}

    /**
     * Est appelé lorsque la construction du boutton et de son container est completement fini dans les couches plus haute des appels (choiceManager)
     * @abstract
     * @param  {any[]} ...args
     * @returns {void}
     * @example
     * onBuilt()
     * {
     *  this.choiceEnumerator.next('value');
     * }
     * @memberof ChoiceButton
     */
    protected abstract onBuilt(...args : any[]) : void;
    //#{}

    public delete(): void
    {
        this.$eventProvider.remove();
    }
}