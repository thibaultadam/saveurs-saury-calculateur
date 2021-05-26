import Debug from "../Tools/Debug";
import UIElement from "../UIElement";
import ChoiceContainer from "./ChoiceContainer";
import ChoicesEnumerator from "./ChoicesEnumerator";

export type ChoiceButtonConstructor = new (type : string, choiceContainer: ChoiceContainer, ...args : any[]) => ChoiceButton

export default
abstract class ChoiceButton extends UIElement {

    public type : string;

    public choiceContainer: ChoiceContainer;
    public choiceEnumerator: ChoicesEnumerator;
    public container!: HTMLElement;
    
    protected buildArgs : any[];

    constructor(type : string, choiceContainer: ChoiceContainer, ...args : any[])
    {
        super();

        this.type = type;
        this.choiceContainer = choiceContainer;
        this.choiceEnumerator = this.choiceContainer.choicesManager.choicesEnumerator;
        this.buildArgs = args;
    }

    protected buildButton(buildCallback : (...args : any[]) => HTMLElement)
    {
        Debug.log(`Building button type "${this.type}" with args`, ...this.buildArgs)

        this.container = buildCallback(...this.buildArgs);
        
        this.onBuild(...this.buildArgs);
        this.emit('build', ...this.buildArgs);

        this.container.addEventListener('click', (ev: MouseEvent) => {
            this.emit('click', ev, ...this.buildArgs);
            this.onClick(ev, ...this.buildArgs);
        });

        return this;
    }

    protected abstract onBuild(...args : any[]) : void;
    protected abstract onClick(ev : MouseEvent, ...args : any[]) : void;
}