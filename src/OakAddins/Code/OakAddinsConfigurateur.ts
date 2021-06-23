import {Configurator, ConfiguratorPathes } from "../../lib/Configurator";
import { DebugLevel } from "../../lib/Tools/Debug";
import {ChoicesManager} from "./ChoicesManager/ChoicesManager";
import {DataParser} from "./Data/DataParser";

// CSS
import '../css/choices.css';
import { createElement } from "../../lib/Tools/DOMElementCreator";

/**
 * @alias OakAddinsConfigurateur
 */
export 
class OakAddinsConfigurateur extends Configurator 
{
    constructor(container: string, path : ConfiguratorPathes, debugLevel? : DebugLevel)
    {
        super(container, path, debugLevel);

        this.registerDataParserClass(DataParser);

        this.$container?.classList.add('container');
    }
    
    protected onDataLoaded()
    {
        // création du début du Configurateur
        this.$container.innerHTML += `
        <h1 class="my-5 text-center">CALCULATEUR</h1>

        <img class="my-5 mx-auto d-block" src="http://www.oakaddins.com/wp-content/uploads/2013/09/logo-calculateur.png"
            alt="Calculateur" width="182" height="181">
        `;

        this.registerChoiceManagerClass(ChoicesManager);

        // lance la construction du 1er element
        this.choicesManager.buildChoice();
    }
}