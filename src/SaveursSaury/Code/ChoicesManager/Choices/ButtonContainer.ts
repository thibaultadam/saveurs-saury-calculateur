import { ChoiceContainer, ChoiceContainerConstructionOptions, ContainerCreationCallback } from "../../../../lib/ChoicesManagement/Choices/ChoiceContainer";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { ChoiceData, TreeNode } from "../../Data/DataParser";
import { ButtonChoiceDesignCreator } from "../ChoiceTools/ButtonChoiceDesignCreator";
import { ButtonChoice } from "./ButtonChoice";

export class ButtonContainer extends ChoiceContainer
{
    public $designContainer!: HTMLElement;

    public currentProduct: number = 0;

    constructor (
        constructionOptions: ChoiceContainerConstructionOptions, 
        node : TreeNode,
        choiceData: ChoiceData)
    {
        super(constructionOptions, node, choiceData);
        this.registerChoiceClass(ButtonChoice);

        this.createNewContainer(() => createElement(`
        <div class="row my-4">
            <h6 class="my-2 fs-6">${choiceData.title}</h6>
        </div>`) as HTMLElement);

        this.createNewContainer(() => createElement(`<div class="col" role="group" aria-label="${this.type}-${this.id}">`) as HTMLElement);

        // création du container des design si il est spécifié qu'il doit être crée

        let choiceDesignContainers;

        if(choiceData.params?.buildProducts)
        {
            choiceDesignContainers = ButtonChoiceDesignCreator.createContainer(this);
            this.$designContainer = choiceDesignContainers.container;
        }

        for(const buttonData of Object.values(node.values))
        {
            this.createChoice(buttonData, choiceData);
        }

        if(choiceData.params?.buildProducts && choiceDesignContainers)
        {
            (this.choices[this.currentProduct] as ButtonChoice)?.click();
            this.$container.appendChild(choiceDesignContainers.globalContainer);
        }
    }

    /**
     * @deprecated
     * @param id 
     * @returns {void}
     */
    public gotoProduct(id: number): void 
    {
        throw Error("deprecated function");

        if(id === this.currentProduct)
        {
            return;
        }

        const nexter = (this.choices[0] as ButtonChoice).choiceDesignElements?.next;
        let nexts = 0;

        while(id !== this.currentProduct) 
        {
            nexts++;

            this.currentProduct++;
            if(this.currentProduct >= this.choices.length)
            {
                this.currentProduct = 0;
            }
        } 

        let callCount = 0;
        let currentEmitterIndex = (this.choices[this.currentProduct + 1]) ? this.currentProduct + 1 : 0;

        const skipWaitAnimationRecurse = () =>
        {
            if(callCount >= nexts)
            {
                return;
            }

            nexter?.click();

            (this.choices[currentEmitterIndex] as ButtonChoice).choiceDesignElements?.container?.addEventListener('transitionend', () => 
            {   
                currentEmitterIndex = (this.choices[currentEmitterIndex + 1]) ? currentEmitterIndex + 1 : 0;
                skipWaitAnimationRecurse();
            }, 
            {
                once: true
            });

            callCount++;
        }

        skipWaitAnimationRecurse();
    }

    protected onBuilt(): void
    {
        this.$container.scrollIntoView({
            block: 'end',
            behavior: 'smooth'
        });
    }
}