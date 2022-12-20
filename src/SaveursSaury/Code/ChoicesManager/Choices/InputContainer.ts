import { ChoiceContainer, ChoiceContainerConstructionOptions, ContainerCreationCallback } from "../../../../lib/ChoicesManagement/Choices/ChoiceContainer";
import { createElement } from "../../../../lib/Tools/DOMElementCreator";
import { ChoiceData, TreeNode } from "../../Data/DataParser";
import { parseChoiceData } from "../../Tools/ParseTools";
import { InputChoice } from "./InputChoice";

export class InputContainer extends ChoiceContainer
{
    private choiceData: ChoiceData;
    private node: TreeNode;

    constructor (
        constructionOptions: ChoiceContainerConstructionOptions, 
        node : TreeNode,
        choiceData: ChoiceData)
    {
        super(constructionOptions, node, choiceData);
        this.registerChoiceClass(InputChoice);

        this.node = node;
        
        if(!choiceData.title)
        {
            choiceData.title = this.node.title;
        }
        
        this.choiceData = parseChoiceData(choiceData, this.choicesEnumerator);
        
        //Pas utile pour le mode calculateur
        /*this.createNewContainer(() => createElement(`
        <div class="my-4">
            <h6 class="my-2 fs-6 text-uppercase">${this.choiceData.title}</h6>
        </div>`) as HTMLElement);*/

        this.createNewContainer(() => createElement(`<div class="form-floating my-2">`) as HTMLElement);

        for(const buttonData of Object.values(node.values))
        {
            this.createChoice(buttonData, this.choiceData);
        }

        // si on est dans le cas d'un affichages des deux possiblité du double choix
        if(Object.values(this.node.values)[0]?.show)
        {
            this.createChoice({ 
                label: Object.values(this.node.values)[0].show,
                rootDesign: true
            }, 
            this.choicesManager.dataProvider.get('ChoiceData', Object.values(this.node.values)[0].show) as ChoiceData)
        }
    }

    protected onBuilt(): void
    {
        // lorsque le choix est completement construit on vérifit si le parametre buildNext n'est pas définit dans les données 
        // et dans ce cas on construit le choix suivant
        // TODO : Enhancement, gerer le parsing des evenements et des parametes d'app dans ChoiceParamParser 
        if(this.choiceData?.params)
        {
            if(this.choiceData.params?.buildNext)
            {
                // TODO : un peut gitan il faut proprifier ça
                this.choicesEnumerator.next(Object.values(this.node.values)[0].label);
            }
        }
    }
}