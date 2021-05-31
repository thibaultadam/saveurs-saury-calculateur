import Configurator, { ConfiguratorPathes } from "../../lib/Configurator";
import { DebugLevel } from "../../lib/Tools/Debug";
import ChoicesManager from "./ChoicesManager/ChoicesManager";
import DataParser from "./Data/DataParser";

export default class OakAddinsConfigurateur extends Configurator 
{
    constructor(container: string, path : ConfiguratorPathes, debugLevel? : DebugLevel)
    {
        super(container, path, debugLevel);
    }
    
    protected onDataLoaded()
    {
        this.registerChoiceManagerClass(ChoicesManager);
        
        this.registerDataParserClass(DataParser);
        
        this.choicesManager.buildChoice();
    }
}