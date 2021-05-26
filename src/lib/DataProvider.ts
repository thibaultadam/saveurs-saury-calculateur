import ChoicesEnumerator from "./Choices/ChoicesEnumerator";
import ChoicesManager from "./Choices/ChoicesManager";
import { Data } from "./Configurator";

export type DataProviderConstructor = new (choicesManager: ChoicesManager) => DataProvider;

export default
abstract class DataProvider
{
    choicesManager: ChoicesManager;
    choicesEnumerator: ChoicesEnumerator;
    data: Data;

    constructor(choicesManager : ChoicesManager)
    {
        this.choicesManager = choicesManager;
        this.choicesEnumerator = this.choicesManager.choicesEnumerator;
        this.data = this.choicesManager.configurator.data;
    }

    get(index : string, ...args: any[]): any
    {
        /*
        if(this[`get${index}`])
        {
            return this[`get${index}`](...args);
        }
        else
        {
            Debug.error(`can't get provider "${index}"`);
            return null;
        }
        */
    }
}