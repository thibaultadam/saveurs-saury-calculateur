import {Debug} from "../Tools/Debug";
import {UIElement} from "../UIElement";
import {ChoiceContainer} from "./ChoiceContainer";
import {ChoicesEnumerator} from "./ChoicesEnumerator";

export type ChoiceButtonConstructor = new (
    type : string, 
    choiceContainer: ChoiceContainer, 
    ...args : any[]) 
    => ChoiceButton

/**
 * @alias ChoiceButton
 * @class
 * @extends UIElement
 * @abstract
 */
export
abstract class ChoiceButton extends UIElement {

    /**
     * La string du type de button
     * @public
     * @type {string}
     * @memberof ChoiceButton
     */
    public type : string;

    /**
     * référance a l'énumérateur de choix car souvent les choix sont énuméré a partir d'une action d'un choiceButton
     * @public
     * @type {ChoicesEnumerator}
     * @memberof ChoiceButton
     */
    public choiceEnumerator: ChoicesEnumerator;
    
    /**
     * Le container DOM du button
     * @public
     * @type {HTMLElement}
     * @memberof ChoiceButton
     */
    public $container!: HTMLElement;
    
    /**
     * Les arguments de construction du button
     * @protected
     * @type {any[]}
     * @memberof ChoiceButton
     */
    protected buildArgs : any[];

    /**
     * @param  {string} type
     * @param  {ChoiceContainer} choiceContainer
     * @param  {any[]} ...args
     */
    constructor(
        type : string, 
        public choiceContainer: ChoiceContainer, 
        ...args : any[])
    {
        super();

        this.type = type;
        this.choiceEnumerator = this.choiceContainer.choicesManager.choicesEnumerator;
        this.buildArgs = args;
    }

    /**
     * Permet de crée le/les élément(s) DOM qui constitue le boutton
     * @param  {ButtonBuildCallback} buildCallback
     * @returns {ChoiceButton}
     * @memberof ChoiceButton
     */
    protected buildButton(buildCallback : (...args : any[]) => HTMLElement): ChoiceButton
    {
        Debug.log(`Building button type "${this.type}" with args`, ...this.buildArgs)

        this.$container = buildCallback(...this.buildArgs);
        
        this.onBuild(...this.buildArgs);
        this.emit('build', ...this.buildArgs);

        this.$container.addEventListener('click', (ev: MouseEvent) => {
            this.emit('click', ev, ...this.buildArgs);
            this.onClick(ev, ...this.buildArgs);
        });

        return this;
    }

    /**
     * Permet de déclancher l'évenement 'click' sur le bouton
     * @returns {void}
     * @protected
     * @memberof ChoiceButton
     */
    protected click() : void
    {
        this.$container.click();
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
     * Est appeler lorsque l'evenement click est déclanché
     * @abstract
     * @param  {MouseEvent} ev
     * @param  {any[]} ...args
     * @returns {void}
     * @memberof ChoiceButton
     */
    protected abstract onClick(ev : MouseEvent, ...args : any[]) : void;
    //#{}
}