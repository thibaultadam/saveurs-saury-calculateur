import { Configurator, ConfiguratorPathes } from "../../lib/Configurator";
import { Debug, DebugLevel } from "../../lib/Tools/Debug";
import { ChoicesManager } from "./ChoicesManager/ChoicesManager";
import { DataParser } from "./Data/DataParser";
import { TableBuilder } from "./TableBuilder/TableBuilder";

// webpack css import
import '../css/main.css';

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

        this.registerDataParserClass(DataParser);
        this.$container?.classList.add('container');
    }
    
    protected onDataLoaded()
    {
        this.buildPWAModal();
        this.buildHeaders();

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

    private buildHeaders()
    {
        // création du début du Configurateur
        this.$container.innerHTML += `
        <h1 class="mb-5 text-center">${this.data.config.title.text}</h1>

        <img class="mb-5 mx-auto d-block" src="${this.data.config.title.imgSrc}"
            alt="Calculateur" width="${this.data.config.title.imgWidth}" height="${this.data.config.title.imgHeight}">
        `;

        this.$container.innerHTML += `
        <img class="rounded hidden-img" src="images/thermo.png" hidden>
        
        <img class="categorie-img row offset-9 offset-sm-9 offset-md-10 offset-lg-11" src="images/Products/macaron_chauffes_FR.jpg" 
            style="border-radius: 5rem !important; width: 5rem; height: 5rem;">
        `;

        const offsetX = -40;
        const offsetY = -20;

        const image = document.querySelector('.categorie-img') as HTMLElement;
        const hidden = document.querySelector('.hidden-img') as HTMLElement;

        image.addEventListener('mouseenter', () => { image.setAttribute('hovering', 'true'); hidden.hidden = false});
        image.addEventListener('mouseleave', () => { image.setAttribute('hovering', 'false'); hidden.hidden = true});

        image.addEventListener('mousemove', (event) => 
        {
            if(image.getAttribute('hovering') == 'true')
            {
                hidden.setAttribute('style', `left: ${event.pageX + offsetX}px; top:${event.pageY + offsetY}px`);
            }
        });
    }

    private buildPWAModal(): void
    {
        const modal = `
        <button id="display-install-app-button" type="button" class="btn btn-indigo btn-outline-indigo" data-bs-toggle="modal" data-bs-target="#install-app-modal">
            ${"Installer l'application"}
        </button>
        
        <div class="modal fade" id="install-app-modal" tabindex="-1" aria-labelledby="install-app-modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title" id="install-app-modalLabel">${"Installer l'Application OakAddins"}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div class="text-center">
                            <button id="install-app-button" class="btn btn-indigo btn-outline-indigo d-block mx-auto my-1">Installer</button>
                            <a id="maybe-later-link" href="#" data-bs-dismiss="modal">${"Peut être plus tard"}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.$container.innerHTML += modal;

       this.emit('pwa-modal-builed');
    }
}

export function home()
{
    
}