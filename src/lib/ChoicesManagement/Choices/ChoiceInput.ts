import {Debug} from "../../Tools/Debug";
import {ChoiceContainer} from "./ChoiceContainer";
import { ChoiceButton } from "./ChoiceButton";
import { ChoiceConstructionOptions } from "./Choice";

export type ChoiceInputConstructor = new (
    type : string, 
    choiceContainer: ChoiceContainer, 
    ...args : any[]) 
    => ChoiceInput

export
abstract class ChoiceInput extends ChoiceButton {

    public value: string = "";
    public $eventProvider!: HTMLInputElement;

    constructor(
        constructionOptions: ChoiceConstructionOptions,
        ...buildArgs : any[])
    {
        super(constructionOptions, ...buildArgs);
    }

    protected build(buildCallback : (...args : any[]) => HTMLInputElement): ChoiceInput
    {
        super.build(buildCallback);

        this.$eventProvider.addEventListener('input', (ev: Event) => {

            this.value = this.$eventProvider.value;

            this.emit('input', ev, ...this.buildArgs);
            this.onInput(ev, ...this.buildArgs);
        });

        return this;
    }

    protected input(value: string = "") : void
    {
        this.$eventProvider.value = value;
        this.$eventProvider.dispatchEvent(new Event('input'));
    }

    protected abstract onInput(ev : Event, ...args : any[]) : void;
    //#{}
}