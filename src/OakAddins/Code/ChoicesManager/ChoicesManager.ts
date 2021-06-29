import { ChoiceContainer } from "../../../lib/ChoicesManagement/Choices/ChoiceContainer";
import {ChoicesManager as _ChoicesManager} from "../../../lib/ChoicesManagement/ChoicesManager";
import {Configurator} from "../../../lib/Configurator";
import { Debug } from "../../../lib/Tools/Debug";
import { TreeNode } from "../Data/DataParser";
import {ChoiceData, DataProvider} from "../Data/DataProvider";
import { ButtonContainer } from "./Choices/ButtonContainer";
import { InputContainer } from "./Choices/InputContainer";
import { RadioContainer } from "./Choices/RadioContainer";

export type ChoiceType = 'button' | 'radio' | 'input';

export  class ChoicesManager extends _ChoicesManager
{
    constructor(public configurator: Configurator)
    {
        super(configurator);
        this.registerDataProviderClass(DataProvider);

        this.registerChoiceClass('button', ButtonContainer);
        this.registerChoiceClass('radio', RadioContainer);
        this.registerChoiceClass('input', InputContainer);

        this.choicesEnumerator.on('change', () => this.buildChoice());
    }

    protected onBuildChoice()
    {
        const node = this.dataProvider.get('CurrentNode') as TreeNode;
        const choiceData = this.dataProvider.get('ChoiceData', node.type) as ChoiceData;

        if(!node) {
            Debug.error(`can't build : no node value defined`);
            this.emit('error', `can't build : no node value defined`);
            return;
        }
 
        Debug.log('--------------------------- onBuildChoice', node, choiceData);

        // lorsque l'on change un choix plus haut que le courant on supprime tout les containers suivants qui on été crée précedement
        if(this.choicesEnumerator.current.data.has("DOM"))
        {
            Debug.log("current have DOM destroying it and nexts");

            for(let i = this.choicesEnumerator.current.index; i < this.choicesEnumerator.choices.length; i++)
            {
                this.choicesEnumerator.get(i)?.data.get('DOM')?.forEach((container: HTMLElement) => container.remove());
            }
        }

        const choiceContainer = this.createChoiceContainer(choiceData.type, node, choiceData) as ChoiceContainer;
        this.choicesEnumerator.current.data.set("DOM", choiceContainer?.containersBundle);
    }

        // Testing

        // this.choicesEnumerator.next('Elevage Court');
        // console.log('CurrentNode', this.dataProvider.get('CurrentNode'));
        // console.log(this.choicesEnumerator.isEnd());
        // console.log(this.choicesEnumerator.choices);
        // console.log(this.choicesEnumerator.current.index);

        // this.choicesEnumerator.next('Copeaux');
        // console.log('CurrentNode', this.dataProvider.get('CurrentNode'));
        // console.log(this.choicesEnumerator.isEnd());
        // console.log(this.choicesEnumerator.choices);
        // console.log(this.choicesEnumerator.current.index);

        // this.choicesEnumerator.next('Gallon');
        // console.log('CurrentNode', this.dataProvider.get('CurrentNode'));
        // console.log(this.choicesEnumerator.isEnd());
        // console.log(this.choicesEnumerator.choices);
        // console.log(this.choicesEnumerator.current.index);

        // this.choicesEnumerator.next('fermentation-input');
        // console.log('CurrentNode', this.dataProvider.get('CurrentNode'));
        // console.log(this.choicesEnumerator.isEnd());
        // console.log(this.choicesEnumerator.choices);
        // console.log(this.choicesEnumerator.current.index);

        // this.choicesEnumerator.next('gramsPerLiter-input');
        // console.log('CurrentNode', this.dataProvider.get('CurrentNode'));
        // console.log(this.choicesEnumerator.isEnd());
        // console.log(this.choicesEnumerator.choices);
        // console.log(this.choicesEnumerator.current.index);

        // Testing
} 