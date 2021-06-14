import {ChoicesManager as _ChoicesManager} from "../../../lib/Choices/ChoicesManager";
import {Configurator} from "../../../lib/Configurator";
import { Debug } from "../../../lib/Tools/Debug";
import {DataProvider} from "../Data/DataProvider";

export  class ChoicesManager extends _ChoicesManager
{
    constructor(public configurator: Configurator)
    {
        super(configurator);
        this.registerDataProviderClass(DataProvider);
    }

    protected onBuildChoice()
    {
        console.log('CurrentNode', this.dataProvider.get('CurrentNode'));

        // Testing

        this.choicesEnumerator.next('Elevage Court');
        console.log('CurrentNode', this.dataProvider.get('CurrentNode'));
        console.log(this.choicesEnumerator.isEnd());
        console.log(this.choicesEnumerator.choices);
        console.log(this.choicesEnumerator.current.index);

        this.choicesEnumerator.next('Copeaux');
        console.log('CurrentNode', this.dataProvider.get('CurrentNode'));
        console.log(this.choicesEnumerator.isEnd());
        console.log(this.choicesEnumerator.choices);
        console.log(this.choicesEnumerator.current.index);

        this.choicesEnumerator.next('Gallon');
        console.log('CurrentNode', this.dataProvider.get('CurrentNode'));
        console.log(this.choicesEnumerator.isEnd());
        console.log(this.choicesEnumerator.choices);
        console.log(this.choicesEnumerator.current.index);

        this.choicesEnumerator.next('fermentation-input');
        console.log('CurrentNode', this.dataProvider.get('CurrentNode'));
        console.log(this.choicesEnumerator.isEnd());
        console.log(this.choicesEnumerator.choices);
        console.log(this.choicesEnumerator.current.index);

        this.choicesEnumerator.next('gramsPerLiter-input');
        console.log('CurrentNode', this.dataProvider.get('CurrentNode'));
        console.log(this.choicesEnumerator.isEnd());
        console.log(this.choicesEnumerator.choices);
        console.log(this.choicesEnumerator.current.index);

        // Testing

        
    }

    protected onBuildProducts()
    {
        
    }
} 