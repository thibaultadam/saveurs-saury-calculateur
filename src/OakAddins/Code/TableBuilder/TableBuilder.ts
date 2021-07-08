import { ChoicesEnumerator } from "../../../lib/ChoicesManagement/ChoicesEnumerator";
import { ChoicesManager } from "../../../lib/ChoicesManagement/ChoicesManager";
import { Configurator, Data } from "../../../lib/Configurator";
import { Debug } from "../../../lib/Tools/Debug";
import { createElement } from "../../../lib/Tools/DOMElementCreator";
import { EventEmitter } from "../../../lib/Tools/EventEmitter";

export type TableBuilderConstructorOptions = {
    configurator: Configurator,
}

export type TableBuilderInput = {
    volumeType : string,
    volume : number,
    gpl : number | null,
    percentage : number | null
}

export class TableBuilder extends EventEmitter
{
    public configurator: Configurator;
    public choicesManager: ChoicesManager;
    public choiceEnumerator: ChoicesEnumerator;
    protected data: Data;

    protected containerCreator!: () => HTMLElement;
    protected $container!: HTMLElement;
    $calculateButton!: HTMLElement;
    $calculateButtonContainer!: HTMLElement;

    constructor(options: TableBuilderConstructorOptions)
    {
        super();

        this.configurator = options.configurator;
        this.choicesManager = options.configurator.choicesManager;
        this.choiceEnumerator = options.configurator.choicesManager.choicesEnumerator;
        this.data = options.configurator.data;

        this.containerCreator = () => document.createElement('div');
    }

    public build(): void
    {
        this.onBuild();
        this.emit('build');
    }

    protected buildContainer(): void
    {
        if(!this.containerCreator)
        {
            Debug.error(`can't build container, containerCreator is undefined`);
            return;
        }

        this.$container = this.containerCreator();
        this.configurator.$container.appendChild(this.$container);
    }

    public delete(): void
    {
        this?.$container?.remove();
    }

    public reset(): void
    {
        this.delete();
        this.buildContainer();
    }

    protected onBuild(): void
    {   
        this.reset();

        this.$calculateButtonContainer = createElement(`<div class="d-grid gap-2 col-6 mx-auto my-5">`) as HTMLElement;
        this.$calculateButton = createElement(`<button id="build" class="btn btn-indigo" type="button">CALCULER</button>`) as HTMLElement;
        
        this.$calculateButton.addEventListener('click', () => this.build());
        this.$calculateButtonContainer.appendChild(this.$calculateButton);

        this.$container.appendChild(this.$calculateButtonContainer);

        const inputs = {
            volumeType : this.choiceEnumerator.getByLabel('unit')?.value || "Hectolitres",
            volume : Number(this.choiceEnumerator.getData('value', 'value')),
            gpl : Number(this.choiceEnumerator.getData('gramsPerLiter', 'value', 'gramsPerLiter')) || null,
            percentage : Number(this.choiceEnumerator.getData('percentage', 'value', 'percentage')) || null,
        }
        
        Debug.log('Building table with inputs :', inputs);
    
        let tableContent = '<table class="table table-striped" id="response-container">';
    
        let thead = "<thead>";
        let tbody = "<tbody>";

        for(const lineData of this.data.responseTable)
        {
            switch(lineData.type)
            {
                case "thead" : thead += this.buildHeadLine(lineData, inputs); break;
                case "tbody" : tbody += this.buildBodyLine(lineData, inputs); break;
            }
        }

        tableContent += thead + `</thead>`;
        tableContent += tbody + `</tbody></table>`;
    
        this.$container.innerHTML += tableContent;
    }

    protected buildHeadLine(lineData: any, inputs: TableBuilderInput)
    {
        let line = `<tr>`;

        for(let i = 0; i < lineData.values.length; i++)
        {
            line += `<td class="text-center fw-bold fs-6" style="font-size: .85rem !important;">${lineData.values[i]}</td>`;
        }

        return line + "</tr>";
    }

    protected buildBodyLine(lineData: any, inputs: TableBuilderInput): string
    {
        Debug.info('build line', lineData);

        const selectedProduct = this.choiceEnumerator.getByLabel('product')?.value?.toLowerCase() as string;
        const lineProduct = lineData.product.toLowerCase() as string;

        console.log(selectedProduct, lineProduct, selectedProduct.search(lineProduct));

        if(selectedProduct.search(lineProduct) === -1)
        {
            Debug.info('skiping by product');
            return "";
        }


        let line = `<tr style="font-size: .85rem !important;">`;

        let quantity = null;

        for(const value of lineData.values)
        {
            switch(typeof value)
            {
                case "string" :

                    line += `<td>${value}</td>`;

                break;
                case "object" : 

                    if(quantity === null)
                    {
                        quantity = value[inputs.volumeType](inputs.volume, inputs.gpl, inputs.percentage);

                        line += 
                        `<td>
                            <span class="value">${quantity?.toFixed(1) || 'null'}</span>
                            <span>${lineData.dosage[inputs.volumeType]}</span>
                        </td>`;
                        
                        if(quantity === 0)
                        {
                            Debug.info('skiping by quantity');
                            return "";
                        } 
                    }
                    else
                    {
                        line += 
                        `<td>
                            <span class="value">${value[inputs.volumeType](quantity)?.toFixed(1) || 'null'}</span>
                            <span>${lineData.quantity[inputs.volumeType]}</span>
                        </td>`;

                        quantity;
                    }

                break;
            }
        }

        return line + "</tr>";
    }
}