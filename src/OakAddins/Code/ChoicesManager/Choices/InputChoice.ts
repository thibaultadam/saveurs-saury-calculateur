import { ChoiceConstructionOptions } from "../../../../lib/ChoicesManagement/Choices/Choice";
import { ChoiceInput } from "../../../../lib/ChoicesManagement/Choices/ChoiceInput";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { TreeNode } from "../../Data/DataParser";
import { ChoiceData } from "../../Data/DataProvider";

export class InputChoice extends ChoiceInput
{
    constructor(constructionOptions: ChoiceConstructionOptions, ...buildArgs : any[])
    {
        super(constructionOptions, ...buildArgs);

        this.build((data: TreeNode["values"]["index"], choiceData: ChoiceData) => 
        {
            return createElement(`
            <input class="form-control" type="${choiceData.inputType || "text"}" id="${data.label}-${this.choiceContainer.id}" placeholder="${choiceData.placeholder || ""}" value="${choiceData.defaultValue || ""}">
            `) as HTMLInputElement;
        });
    }

    protected onBuild(data: TreeNode["values"]["index"], choiceData: ChoiceData): void
    {
        this.$container.appendChild(createElement(`
        <label for="${data.label}-${this.choiceContainer.id}">${choiceData.description}</label>
        `) as HTMLElement);

        // en cas de reconstruction on remet la valeur qui a précedement été entré
        if(this.choicesEnumerator.get(this.choiceContainer.id).data.has('value'))
        {
            this.input(this.choicesEnumerator.get(this.choiceContainer.id).data.get('value'));
        }
    }

    protected onBuilt(data: TreeNode["values"]["index"], choiceData: ChoiceData): void
    {}

    protected onInput(ev : Event, data: TreeNode["values"]["index"], choiceData: ChoiceData): void
    {
        this.choicesEnumerator.get(this.choiceContainer.id).data.set('value', this.value);
        
        // lorsque le choix est completement construit on vérifit si le parametre buildNext n'est pas définit dans les données 
        // et dans ce cas on construit le choix suivant
        // TODO : Enhancement, gerer le parsing des evenements et des parametes d'app dans ChoiceParamParser 
        if(choiceData?.params)
        {
            if(choiceData.params?.buildNext)
            {
                this.choicesEnumerator.set(this.choiceContainer.id, 'value');
                this.choicesEnumerator.goTo(this.choiceContainer.id + 1);
            }
        }
    }

    protected onClick(ev : MouseEvent, data: TreeNode["values"]["index"], choiceData: ChoiceData): void
    {}
}