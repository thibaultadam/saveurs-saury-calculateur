import Configurator, { ConfiguratorPathes } from "../lib/Configurator";
import { DebugLevel } from "../lib/Tools/Debug";
import ChoicesManager from "./ChoicesManager/ChoicesManager";

export default class OakAddinsConfigurateur extends Configurator 
{
    constructor(container: string, path : ConfiguratorPathes, debugLevel? : DebugLevel)
    {
        super(container, path, debugLevel);
    }
    
    protected onDataLoaded()
    {
        this.registerChoiceManagerClass(ChoicesManager);
        this.choicesManager.buildChoice();
    }
}