import _ChoicesManager from "../../lib/Choices/ChoicesManager";
import OakAddinsConfigurateur from "../OakAddinsConfigurateur";

export default class ChoicesManager extends _ChoicesManager
{
    constructor(public configurator: OakAddinsConfigurateur)
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