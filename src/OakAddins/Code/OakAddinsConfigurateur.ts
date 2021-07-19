import { Configurator, ConfiguratorPathes } from "../../lib/Configurator";
import { Debug, DebugLevel } from "../../lib/Tools/Debug";
import { ChoicesManager } from "./ChoicesManager/ChoicesManager";
import { DataParser } from "./Data/DataParser";
import { TableBuilder } from "./TableBuilder/TableBuilder";

// CSS
import '../css/choices.css';
//import '../css/docs.css';
//import '../css/screen.css';

/**
 * @alias OakAddinsConfigurateur
 */
export 
class OakAddinsConfigurateur extends Configurator 
{
    public tableBuilder!: TableBuilder;        

    constructor(container: string, path : ConfiguratorPathes, debugLevel? : DebugLevel)
    {
        super(container, path, debugLevel);

        this.showPWAinstallMessage();

        this.registerDataParserClass(DataParser);
        this.$container?.classList.add('container');
    }
    
    protected onDataLoaded()
    {
        // création du début du Configurateur
        this.$container.innerHTML += `
        <h1 class="my-5 text-center">CALCULATEUR</h1>

        <img class="my-5 mx-auto d-block" src="images/logo.png"
            alt="Calculateur" width="182" height="181">
        `;

        this.registerChoiceManagerClass(ChoicesManager);

        this.tableBuilder = new TableBuilder({
            configurator: this
        });

        this.choicesManager.choicesEnumerator.on('end', () => this.buildTab());

        // lance la construction du 1er element
        this.choicesManager.buildChoice();
    }
    
    private buildTab(): void
    {
        Debug.log('--------------------------- buildTab');

        this.tableBuilder.build();
    }

    private showPWAinstallMessage(): void
    {
        
    }
}