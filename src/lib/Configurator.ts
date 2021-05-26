import ChoicesManager from './Choices/ChoicesManager';
import Debug, { DebugLevel } from './Tools/Debug';
import EventEmitter from './Tools/EventEmitter';

export type ConfiguratorPathes = any;

export type Data = any 
| { 
    choices?: string[] | string[][]
};

export default
abstract class Calculator extends EventEmitter
{
    container: HTMLElement | null;
    choicesManager!: ChoicesManager;
    
    data : Data = {};

    /**
     * //TODO : Configurator constructor description
     * @param container
     * @param paths
     */
    constructor(container : string, paths : ConfiguratorPathes, debugLevel? : DebugLevel) 
    {
        super();

        Debug.debugLevel = debugLevel || Debug.debugLevel;

        this.container = document.querySelector(container);

        this.fetchDataFiles(paths);
    }

    /**
     * Récuperation de toutes les données externes avec lesquelles sera contruit le Configurateur
     * @param paths 
     */
    private async fetchDataFiles(paths : ConfiguratorPathes = {})
    {
        Debug.log('paths', paths, this);

        for(const key of Object.keys(paths))
        {
            const path = paths[key];

            const text = await (await fetch(path)).text();
            this.data[key] = await JSON.parse(text);
        }

        this.onDataLoaded();

        this.emit('fetched');
        Debug.log('data Loaded', this.data);
    }

    protected abstract onDataLoaded(): void;

    protected registerChoiceManagerClass(ChoiceManagerClass : any) : void
    {
        this.choicesManager = new ChoiceManagerClass(this);
    }

}