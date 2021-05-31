import _ChoicesManager from "../../../lib/Choices/ChoicesManager";
import Configurator from "../../../lib/Configurator";

export default class ChoicesManager extends _ChoicesManager
{
    constructor(public configurator: Configurator)
    {
        super(configurator);
    }

    protected onBuildChoice()
    {
        
    }

    protected onBuildProducts()
    {
        
    }
} 