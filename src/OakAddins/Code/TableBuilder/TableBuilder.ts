import { ChoicesEnumerator } from "../../../lib/ChoicesManagement/ChoicesEnumerator";
import { ChoicesManager } from "../../../lib/ChoicesManagement/ChoicesManager";
import { Configurator, Data } from "../../../lib/Configurator";
import { Debug } from "../../../lib/Tools/Debug";
import { createElement } from "../../../lib/Tools/DOMElementCreator";
import { EventEmitter } from "../../../lib/Tools/EventEmitter";

export type TableBuilderConstrcutorOptions = {
    configurator: Configurator,
}

export type TableBuilderInput = {
    volumeType : string,
    volume : number,
    gpl : number,
    porcentage : number
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

    constructor(options: TableBuilderConstrcutorOptions)
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
            volume : Number(this.choiceEnumerator.getByLabel('value')?.data.get('value')),
            gpl : Number(this.choiceEnumerator.getByLabel('gramsPerLiter')?.data.get('value')),
            porcentage : Number(this.choiceEnumerator.getByLabel('porcentage')?.data.get('value')),
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
            line += `<td class="text-center fw-bold">${lineData.values[i]}</td>`;
        }

        return line + "</tr>";
    }

    protected buildBodyLine(lineData: any, inputs: TableBuilderInput)
    {
        let line = "<tr>";

        let quantity = null;

        for(const value of lineData.values)
        {
            switch(typeof value)
            {
                case "string" :

                    line += `<td>${value}</td>`;

                break;
                case "object" : 

                    if(!quantity)
                    {
                        quantity = value[inputs.volumeType](inputs.volume, inputs.gpl, inputs.porcentage);

                        line += 
                        `<td>
                            <span class="value">${quantity?.toFixed(1) || 'null'}</span>
                            <span>${lineData.dosage[inputs.volumeType]}</span>
                        </td>`;                        
                    }
                    else
                    {
                        line += 
                        `<td>
                            <span class="value">${value(quantity)?.toFixed(1) || 'null'}</span>
                            <span>${lineData.quantity[inputs.volumeType]}</span>
                        </td>`;
                    }

                break;
            }
        }

        return line + "</tr>";
    }
}