import { CompletedChoice } from '../../../lib/ChoicesManagement/ChoicesEnumerator';
import { ChoicesManager } from '../../../lib/ChoicesManagement/ChoicesManager';
import { DataProvider as _DataProvider } from '../../../lib/DataProvider';
import { Debug } from '../../../lib/Tools/Debug';
import { ChoiceData, TreeNode } from './DataParser';

export class DataProvider extends _DataProvider{

    constructor(choicesManager : ChoicesManager)
    {
        super(choicesManager);
    }

    public getChoiceData(choiceName: string): ChoiceData
    {
        if(!this.data?.choicesTypes?.types[choiceName])
        {
            Debug.error(`no choiceData defined for "${choiceName}"`);
        }

        return this.data?.choicesTypes?.types[choiceName] as ChoiceData;
    }

    public getNode(completedChoices: CompletedChoice[]): TreeNode
    {
        let node = this.data.tree as TreeNode;

        for(const choice of completedChoices)
        {
            if(node?.values[choice.value]?.next)
            {
                node = node.values[choice.value].next as TreeNode;
            }
            else if(node?.values[choice.value]?.rootNext)
            {
                node = node.next as TreeNode;
            }
            else
            {
                Debug.error(`cant't next, no next or rootNext defined for choice "${choice.label}" value "${choice.value}"`, node);
            }
        }

        return node;
    }

    public getCurrentNode(): TreeNode
    {
        return this.getNode(this.choicesEnumerator.completed)
    }
}