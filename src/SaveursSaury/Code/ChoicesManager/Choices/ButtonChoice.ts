import { ChoiceData, TreeNode } from "../../Data/DataParser";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { ChoiceButton } from "../../../../lib/ChoicesManagement/Choices/ChoiceButton";
import { Debug } from "../../../../lib/Tools/Debug";
import { ChoiceConstructionOptions } from "../../../../lib/ChoicesManagement/Choices/Choice";
import { ButtonContainer } from "./ButtonContainer";
import { ButtonChoiceDesignCreator, ChoiceDesignElements, Product } from "../ChoiceTools/ButtonChoiceDesignCreator";

export class ButtonChoice extends ChoiceButton
{
    public choiceDesignElements: ChoiceDesignElements | undefined;

    /**
     * @deprecated
     */
    public eventFromSkip: boolean = false;

    constructor(constructionOptions: ChoiceConstructionOptions, ...buildArgs : any[])
    {
        super(constructionOptions, ...buildArgs);

        this.build((data: TreeNode["values"]["index"], choiceData: ChoiceData) => 
        {
            return createElement(`
            <input type="radio" class="btn-check" name="${this.choiceContainer.type}-${this.choiceContainer.id}" id="${data.label}-${this.choiceContainer.id}" autocomplete="off">
            `) as HTMLElement;
        });
    }

    protected onBuild(data: TreeNode["values"]["index"], choiceData: ChoiceData) : void
    {
        const label = createElement(`
            <label class="btn btn-indigo mx-1 my-1" for="${data.label}-${this.choiceContainer.id}">${data.label}</label>
            `) as HTMLElement;

        this.$container.appendChild(label);

        // product building area

        if(choiceData.params?.buildProducts)
        {
            const product = this.choiceContainer.data.products[data.label] as Product;

            const choiceDesignElements = ButtonChoiceDesignCreator.createProduct(
                product, 
                this.choiceContainer.type, 
                this.choiceContainer.id, 
                (this.id === (this.choiceContainer as ButtonContainer)?.currentProduct));

            this.choiceDesignElements = choiceDesignElements;

            (this.choiceContainer as ButtonContainer)
                .$designContainer
                .appendChild(this.choiceDesignElements.container);

            this.choiceDesignElements.next.addEventListener('click', () => 
            {
                const nextIndex = this.choiceContainer.choices[this.id + 1] ? this.id + 1 : 0;

                (this.choiceContainer.choices[nextIndex] as ButtonChoice).eventFromSkip = true;
                (this.choiceContainer.choices[nextIndex] as ButtonChoice).click();
            });

            this.choiceDesignElements.prev.addEventListener('click', () => 
            {
                const prevIndex = this.id - 1 >= 0 ? this.id - 1 : this.choiceContainer.choices.length - 1;

                (this.choiceContainer.choices[prevIndex] as ButtonChoice).eventFromSkip = true;
                (this.choiceContainer.choices[prevIndex] as ButtonChoice).click();
            });
        }
    }

    protected onBuilt(data: TreeNode["values"]["index"], choiceData: ChoiceData) : void {}

    protected onClick(ev : MouseEvent, data: TreeNode["values"]["index"], choiceData: ChoiceData) : void
    {
        Debug.log('click', 'data', data, 'choiceIndex', this.choiceContainer.id);

        if(choiceData.params?.buildProducts && !this.eventFromSkip)
        {
            (this.choiceContainer as ButtonContainer).currentProduct = this.id;

            for(const choice of this.choiceContainer.choices as ButtonChoice[])
            {
                if(choice.id === this.id)
                {
                    if(!choice.choiceDesignElements?.container.classList.contains("active"))
                    {
                        this.choiceDesignElements?.container.classList.add("active");
                    }
                }
                else
                {
                    choice.choiceDesignElements?.container.classList.remove("active");
                }
            }
        }

        if(this.eventFromSkip)
        {
            this.eventFromSkip = false;
        }

        this.choicesEnumerator.set(this.choiceContainer.id, data.label);
        this.choicesEnumerator.goTo(this.choiceContainer.id + 1);
    }
}