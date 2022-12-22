import { ChoiceConstructionOptions } from "../../../../lib/ChoicesManagement/Choices/Choice";
import { ChoiceInput } from "../../../../lib/ChoicesManagement/Choices/ChoiceInput";
import { Debug } from "../../../../lib/Tools/Debug";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { ChoiceData, TreeNode } from "../../Data/DataParser";

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
        if(!data.rootDesign)
        {
            this.$container.appendChild(createElement(`
            <label for="${data.label}-${this.choiceContainer.id}">${choiceData.description}</label>
            `) as HTMLElement);
        }
        else
        {
            const container = createElement(`<div class="form-floating my-2">`) as HTMLElement;
            container.appendChild(this.$eventProvider);
            container.appendChild(createElement(`
                <label for="${data.label}-${this.choiceContainer.id}">${choiceData.description}</label>
            `) as HTMLElement);

            this.$container.parentElement?.appendChild(container);
        }

        // en cas de reconstruction on remet la valeur qui a précedement été entré
        if(this.choicesEnumerator.getData(this.choiceContainer.id, 'value', choiceData.typeName))
        {
            this.input(this.choicesEnumerator.getData(this.choiceContainer.id, 'value', choiceData.typeName));
        }
        // appliquer dans tout les systèmes la valeur par défaut du choix
        else if(choiceData.defaultValue)
        {
            Debug.log(`Set default choice value "${choiceData.defaultValue}"`);
            this.choicesEnumerator.setData(this.choiceContainer.id, 'value', this.value, choiceData.typeName);
        }
    }

    protected onBuilt(data: TreeNode["values"]["index"], choiceData: ChoiceData): void
    {}

    protected onInput(ev : Event, data: TreeNode["values"]["index"], choiceData: ChoiceData): void
    {
        this.choicesEnumerator.setData(this.choiceContainer.id, 'value', this.value, choiceData.typeName);
        
        // si tout est déja construit et on change le dernier choix en réaffiche le résultat
        if(this.choicesEnumerator.isEnd())
        {
            this.choicesEnumerator.emit('end');
        }

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
        document.cookie = `${data.label}-${this.choiceContainer.id}=${this.value}`
    }

    protected onClick(ev : MouseEvent, data: TreeNode["values"]["index"], choiceData: ChoiceData): void
    {}
}