import Debug from "../Tools/Debug";
import UIElement from "../UIElement";
import ChoiceContainer from "./ChoiceContainer";
import ChoicesEnumerator from "./ChoicesEnumerator";

export default
abstract class ChoiceInput extends UIElement {

    public type : string;

    public choiceContainer: ChoiceContainer;
    public choiceEnumerator: ChoicesEnumerator;
    public container!: HTMLInputElement;

    protected buildArgs : any[];
    public value: string = "";
    
    constructor(type : string, choiceContainer: ChoiceContainer, ...args : any[])
    {
        super();

        this.type = type;
        this.choiceContainer = choiceContainer;
        this.choiceEnumerator = this.choiceContainer.choicesManager.choicesEnumerator;
        this.buildArgs = args;
    }

    protected buildButton(buildCallback : (...args : any[]) => HTMLInputElement)
    {
        Debug.log(`Building button type "${this.type}" with args`, ...this.buildArgs)

        this.container = buildCallback(...this.buildArgs);

        this.onBuild(...this.buildArgs);
        this.emit('build', ...this.buildArgs);

        this.container.addEventListener('click', (ev: MouseEvent) => {
            this.emit('click', ev, ...this.buildArgs);
            this.onClick(ev, ...this.buildArgs);
        });

        this.container.addEventListener('change', (ev: Event) => {

            this.value = this.container.value;

            this.emit('change', ev, ...this.buildArgs);
            this.onChange(ev, ...this.buildArgs);
        });

        return this;
    }

    protected abstract onBuild(...args : any[]) : void;
    protected abstract onClick(ev : MouseEvent, ...args : any[]) : void;
    protected abstract onChange(ev : Event, ...args : any[]) : void;
}