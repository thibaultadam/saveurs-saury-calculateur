import { Configurator, ConfiguratorPathes } from "../../lib/Configurator";
import { Debug, DebugLevel } from "../../lib/Tools/Debug";
import { ChoicesManager } from "./ChoicesManager/ChoicesManager";
import { DataParser } from "./Data/DataParser";
import { TableBuilder } from "./TableBuilder/TableBuilder";

// webpack css import
import '../css/main.css';
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

/**
 * @alias OakAddinsConfigurateur
 */

declare function getCookie(index: string): string | undefined;
declare function waitUntil(condition: () => boolean, callBack: () => any, interval?: number): void;

export type Shape = {
    [index: string]: "<fill>" | "<skip>" | string
};
export 
class OakAddinsConfigurateur extends Configurator 
{
    public tableBuilder!: TableBuilder;        

    public shape!: Shape;

    constructor(container: string, path : ConfiguratorPathes, public shapeMode?: string, debugLevel? : DebugLevel)
    {
        super(container, path, debugLevel);

        this.registerDataParserClass(DataParser);
        this.$container?.classList.add('container');
    }
    
    protected onDataLoaded()
    {
        this.buildPWAModal();
        this.fillLangs();
        this.fillFooter();
        
        if(this.shapeMode !== 'products-mode')
        {
            this.buildHeaders();
        }

        this.registerChoiceManagerClass(ChoicesManager);

        this.tableBuilder = new TableBuilder({
            configurator: this
        });

        this.shape = this.loadShape();

        this.choicesManager.choicesEnumerator.on('end', () => this.buildTab());

        // lance la construction du 1er element
        this.choicesManager.buildChoice();
    }
    
    private loadShape(): Shape
    {
        if(this.shapeMode && this.data.shapes[this.shapeMode])
        {
            return this.data.shapes[this.shapeMode];
        }
        else
        {
            return this.data.shapes["default"];
        }
    }

    private buildTab(): void
    {
        Debug.log('--------------------------- buildTab');

        this.tableBuilder.build();
    }

    private buildHeaders()
    {
        
        // titre du calculateur et image
        this.$container.innerHTML += `
        <h1 class="mb-5 text-center">${this.data.config.calc.text}</h1>

        <img class="mb-5 mx-auto d-block" src="${this.data.config.calc.logoImg.src}"
            alt="Calculateur" widtfth="${this.data.config.calc.logoImg.width}" height="${this.data.config.calc.logoImg.height}">
        `;
        
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

    private fillLangs(): void
    {
        let langsContainer = `
        <div id="lang-right-position-container" class="mb-5" ${window.matchMedia('(display-mode: standalone)').matches ? '' : 'hidden'}>
            <div id="lang-container">
        `;

        const langs = Object.keys(this.data.info.calc);

        for(const lang of langs)
        {
            langsContainer += `<div class="lang-item btn btn-indigo mx-1">${lang}</div>`;
        }

        langsContainer += `
            </div></div>
        `;

        this.$container.innerHTML += langsContainer;

        // pour attendre la fin de la création de des éléments DOM
        waitUntil(() => document.querySelectorAll('.lang-item').length === langs.length, 
        () => {
            const currentLang = getCookie('lang') || parent.document.querySelector('html')?.getAttribute("lang") || 'fr-FR';
            const langsButtons = document.querySelectorAll('.lang-item') as NodeListOf<HTMLElement> || [];

            for(const langButton of langsButtons) 
            {    
                langButton.addEventListener('click', () => {
    
                    for(const _langButton of langsButtons)
                    {
                        _langButton.classList.remove('btn-outline-indigo');
                    }
    
                    langButton.classList.add('btn-outline-indigo');
    
                    document.cookie = `lang=${langButton.innerText}; secure`;
                });
    
                if(langButton.innerText == currentLang)
                {
                    langButton.click();
                }
            }
        });
    }
}