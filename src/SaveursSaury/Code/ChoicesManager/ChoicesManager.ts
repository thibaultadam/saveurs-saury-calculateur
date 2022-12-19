import { ChoiceContainer } from "../../../lib/ChoicesManagement/Choices/ChoiceContainer";
import { ChoicesManager as _ChoicesManager } from "../../../lib/ChoicesManagement/ChoicesManager";
import { Configurator } from "../../../lib/Configurator";
import { Debug } from "../../../lib/Tools/Debug";
import { ChoiceData, TreeNode } from "../Data/DataParser";
import { DataProvider } from "../Data/DataProvider";
import { OakAddinsConfigurateur } from "../OakAddinsConfigurateur";
import { ButtonContainer } from "./Choices/ButtonContainer";
import { InputContainer } from "./Choices/InputContainer";
import { RadioContainer } from "./Choices/RadioContainer";
import { ButtonChoiceDesignCreator } from "./ChoiceTools/ButtonChoiceDesignCreator";

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

    protected onBuildChoice(): void
    {
        const node = this.dataProvider.get('CurrentNode') as TreeNode;
        const choiceData = this.dataProvider.get('ChoiceData', node.type) as ChoiceData;

        if(!node) {
            Debug.error(`can't build : no node value defined`);
            this.emit('error', `can't build : no node value defined`);
            return;
        }
 
        Debug.log('--------------------------- onBuildChoice', node, choiceData);
        
        // dans le cas ou on reconstruit un choix précedant a l'affache du resultat on supprimer le résultat
        (this.configurator as OakAddinsConfigurateur).tableBuilder.delete();

        // lorsque l'on change un choix plus haut que le courant on supprime tout les containers suivants qui on été crée précedement
        if(this.choicesContainersInstances[this.choicesEnumerator.current.index])
        {
            Debug.log("current have DOM destroying it and nexts");

            for(let i = this.choicesEnumerator.current.index; i < this.choicesEnumerator.choices.length; i++)
            {
                if(this.choicesContainersInstances[i])
                {
                    this.choicesContainersInstances[i].delete();
                    delete this.choicesContainersInstances[i];
                }
            }
        }

        // la frome du calculateur est définit par 
        switch((this.configurator as OakAddinsConfigurateur).shape[node.type])
        {
            case '<skip>': break;
            case '<fill>': 
            default: 

                if((this.configurator as OakAddinsConfigurateur).shape[node.type].search('<next>') !== -1)
                {
                    const value = (this.configurator as OakAddinsConfigurateur).shape[node.type].split(':')[1];

                    this.choicesEnumerator.setData(this.choicesEnumerator.current.index, 'nexted', true)

                    this.choicesEnumerator.set(this.choicesEnumerator.current.index, value);
                    this.choicesEnumerator.goTo(this.choicesEnumerator.current.index + 1);
                }
                else
                {
                    this.createChoiceContainer(choiceData.type, node, choiceData) as ChoiceContainer;                    
                }
        }


        ButtonChoiceDesignCreator.applyHoverEvents();
    }
} 