import { ChoicesEnumerator } from "./Choices/ChoicesEnumerator";
import { ChoicesManager } from "./Choices/ChoicesManager";
import { Data } from "./Configurator";
import { Debug } from "./Tools/Debug";

export type DataProviderConstructor = new (choicesManager: ChoicesManager) => DataProvider;

type ProviderHandler = (...args : any[]) => any;

/**
 * Permet la déclaration et la centralisation des méthodes de récupération de données
 * la décalaration des Handlers se fait directement dans la class et sont accès ce fait soit directement 
 * soit via la méthode "get".
 * /!\ un Handler doit forcement avoir un nom qui commance par 'get' afin de le différencier des autre methodes
 * @example
 * public getUserData(userID: number)
 * {
 *  return this.data.users[userID];
 * }
 * 
 * // on peut l'appeler directement
 * dataProvider.getUserData(0);
 * 
 * // ou via la methode get sans avoir besoin de mettre le get au debut du nom de la méthode 
 * dataProvider.get('UserData', 0)
 * 
 * @alias DataProvider
 */
export
abstract class DataProvider
{
    [index: string]: ProviderHandler | ChoicesManager | ChoicesEnumerator | Data;

    /**
     * Le DataProvider est instancier lors de sont ajout dans le ChoiceManag
     * @param  {ChoicesManager} choicesManager
     * @param  {ChoicesEnumerato} choicesEnumerator
     * @param  {Data} data
     * @memberof DataProvider
     */
    constructor(
        public choicesManager : ChoicesManager, 
        protected choicesEnumerator : ChoicesEnumerator = choicesManager.choicesEnumerator,
        protected data : Data = choicesManager.configurator.data,)
    {

    }

    /**
     * @param  {string} index provider name
     * @param  {any[]} ...args privider arguments
     * @returns {any}
     * @memberof DataProvider
     */
    public get(index : string, ...args: any[]): any
    {
        const providerName = `get${index}`;

        if(this[providerName] && typeof this[providerName] === 'function')
        {
            return (this[providerName] as ProviderHandler) (...args) ;
        }
        else
        {
            Debug.error(`can't get provider "${index}"`);
            return null;
        }
    }
}