import ChoicesManager, { ChoicesManagerConstructor } from './Choices/ChoicesManager';
import DataParser, { DataParserConstructor } from './Data/DataParser';
import Debug, { DebugLevel } from './Tools/Debug';
import EventEmitter from './Tools/EventEmitter';

export type ConfiguratorPathes = {
    root?: string,
    [index: string] : string | undefined
}

export type Data = {
    [index: string] : any
}

export default
abstract class Configurator extends EventEmitter
{
    container: HTMLElement | null;
    choicesManager!: ChoicesManager;
    dataParser!: DataParser | undefined;
    
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

        if(!paths.root)
        {
            Debug.error('paths.root in not defined, please define it in the paths object');
        }

        this.data.root = paths.root?.toString();
        delete paths.root;

        for(const key in paths)
        {
            const path = paths[key];

            if(path)
            {
                const extention = path.match(/\.[0-9a-z]+$/i);

                if(!extention)
                {
                    Debug.error("invalid filename");
                    break;
                }

                switch(extention[0])
                {
                    case '.json' : 
                        const jsonFile = await (await fetch(path)).text();
                        this.data[key] = await JSON.parse(jsonFile);
                    break;
                    case '.js' :
                        const jsFile = await (await fetch(path)).text();
                        Debug.log(eval(jsFile));

                    break;
                }
            }
            else
            {
                Debug.error(`path on key "${key}" is invalid`);
            }
        }

        this.onDataLoaded();

        this.emit('fetched');
        Debug.log('data Loaded', this.data);
    }

    protected abstract onDataLoaded(): void;

    protected registerChoiceManagerClass(ChoiceManagerClass : ChoicesManagerConstructor) : void
    {
        this.choicesManager = new ChoiceManagerClass(this);
    }

    protected registerDataParserClass(DataParserClass : DataParserConstructor) : void
    {
        this.dataParser = new DataParserClass(this);
    }

}