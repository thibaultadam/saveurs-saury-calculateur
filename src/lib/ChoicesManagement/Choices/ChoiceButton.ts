import { Choice, ChoiceConstructionOptions } from "./Choice";
import { ChoiceContainer } from "./ChoiceContainer";

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
abstract class ChoiceButton extends Choice {

    /**
     * @param  {string} type
     * @param  {ChoiceContainer} choiceContainer
     * @param  {any[]} ...args
     */
    constructor(
        constructionOptions: ChoiceConstructionOptions,
        ...buildArgs : any[])
    {
        super(constructionOptions, ...buildArgs);
    }

    /**
     * Permet de crée le/les élément(s) DOM qui constitue le boutton
     * @param  {ButtonBuildCallback} buildCallback
     * @returns {ChoiceButton}
     * @memberof ChoiceButton
     */
    protected build(buildCallback : (...args : any[]) => HTMLElement): ChoiceButton
    {
        super.build(buildCallback);

        this.$eventProvider.addEventListener('click', (ev: MouseEvent) => {
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
        this.$eventProvider.click();
    }

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