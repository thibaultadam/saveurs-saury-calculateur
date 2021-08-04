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
        this.fillFooter();
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
        <h1 class="mb-5 text-center">${this.data.config.calc.text}</h1>

        <img class="mb-5 mx-auto d-block" src="${this.data.config.calc.logoImg.src}"
            alt="Calculateur" width="${this.data.config.calc.logoImg.width}" height="${this.data.config.calc.logoImg.height}">
        `;

        this.$container.innerHTML += `
        <img class="rounded hidden-img" src="${this.data.config.calc.hiddenImg}" hidden>
        
        <img class="categorie-img row offset-8 offset-sm-8 offset-md-9 offset-lg-9" src="${this.data.config.calc.macaronImg}" 
            style="border-radius: 7rem !important; width: 7rem; height: 7rem;">
        `;

        const offsetX = -60;
        const offsetY = -20;

        const image = document.querySelector('.categorie-img') as HTMLElement;
        const hidden = document.querySelector('.hidden-img') as HTMLElement;

        image.addEventListener('mouseenter', () => hidden.hidden = false);
        image.addEventListener('mouseleave', () => hidden.hidden = true);

        image.addEventListener('mousemove', (event) => 
        {
            hidden.setAttribute('style', `left: ${event.pageX + offsetX}px; top:${event.pageY + offsetY}px;`);
        });
    }

    private fillFooter(): void
    {
        (document.querySelector('#mail-link') as HTMLElement).innerHTML = this.data.config.footer.mail.text;
        (document.querySelector('#mail-link') as HTMLElement).setAttribute('href', `mailto:${this.data.config.footer.mail.link}`);

        (document.querySelector('#tel-link') as HTMLElement).innerHTML = this.data.config.footer.tel.text;
        (document.querySelector('#tel-link') as HTMLElement).setAttribute('href', `tel:${this.data.config.footer.tel.link}`);

        (document.querySelector('#contact-text') as HTMLElement).innerHTML = this.data.config.footer.contactText;   
    }

    private buildPWAModal(): void
    {
        const modal = `
        <button id="display-install-app-button" type="button" class="btn btn-indigo btn-outline-indigo" data-bs-toggle="modal" data-bs-target="#install-app-modal">
            ${this.data.config.pwaModal.button}
        </button>
        
        <div class="modal fade" id="install-app-modal" tabindex="-1" aria-labelledby="install-app-modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title" id="install-app-modalLabel">${this.data.config.pwaModal.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div class="text-center">
                            <button id="install-app-button" class="btn btn-indigo btn-outline-indigo d-block mx-auto my-1">${this.data.config.pwaModal.install}</button>
                            <a id="maybe-later-link" href="#" data-bs-dismiss="modal">${this.data.config.pwaModal.deny}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.$container.innerHTML += modal;
    }
}