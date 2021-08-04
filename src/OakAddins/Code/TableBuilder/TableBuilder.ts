import { ChoicesEnumerator, CompletedChoice } from "../../../lib/ChoicesManagement/ChoicesEnumerator";
import { ChoicesManager } from "../../../lib/ChoicesManagement/ChoicesManager";
import { Configurator, Data } from "../../../lib/Configurator";
import { Debug } from "../../../lib/Tools/Debug";
import { EventEmitter } from "../../../lib/Tools/EventEmitter";
import { TreeNode } from "../Data/DataParser";

export type TableBuilderConstructorOptions = {
    configurator: Configurator,
}

export type TableBuilderInput = {
    volumeType : string,
    volume : number,
    gpl : number | null,
    percentage : number | null
}

export enum TableColumn {   
    contactTime,
    product,
    quantity,
    conditioQuantity  
}

export class TableBuilder extends EventEmitter
{
    public configurator: Configurator;
    public choicesManager: ChoicesManager;
    public choiceEnumerator: ChoicesEnumerator;
    protected data: Data;

    protected containerCreator!: () => HTMLElement;
    protected $container!: HTMLElement;;

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

    protected getActualsProducts(): string[]
    {
        const phase = this.choiceEnumerator.get(0) as CompletedChoice;
        const node = this.configurator.choicesManager.dataProvider.get('Node', [phase]) as TreeNode;

        return Object.keys(node.values).map((key) => this.data.products[key].productsKeys);
    }

    protected onBuild(): void
    {   
        this.reset();

        // A la base rajouté pour le bouton "calculer" et ensuite reconverti en phrase d'actoche cette partie du design a finalement été suprimé
        /*
        this.$catchUpLine = createElement(`
        <div class="text-center my-5"><i>"phrase d’accroche pour annoncer les recommandations"</i></div>
        `) as HTMLElement;

        this.$container.appendChild(this.$catchUpLine);
        */

        this.$container.innerHTML += `<div class="pb-5"></div>`;

        const inputs = {
            volumeType : this.choiceEnumerator.getByLabel('unit')?.value || "Hectolitres",
            volume : Number(this.choiceEnumerator.getData('value', 'value')),
            gpl : Number(this.choiceEnumerator.getData('gramsPerLiter', 'value', 'gramsPerLiter')) || null,
            percentage : Number(this.choiceEnumerator.getData('percentage', 'value', 'percentage')) || null,
        }

        if(inputs.volume <= 0 || (!inputs?.gpl && !inputs?.percentage))
        {
            Debug.log('Skiping build volume <= 0 or (!glp and !porcentage)');
            return;
        }
        
        Debug.log('Building table with inputs :', inputs);
    
        let tableContent = '<table class="table table-striped mb-0" id="response-container">';
    
        let thead = "<thead>";
        let tbody = "<tbody>";

        for(const lineData of this.data.responseTable)
        {
            switch(lineData.type)
            {
                case "thead" : thead += this.buildHeadLine(lineData); break;
                case "tbody" : tbody += this.buildBodyLine(lineData, inputs); break;
            }
        }

        tableContent += thead + `</thead>`;
        tableContent += tbody + `</tbody></table>`;
    
        this.$container.innerHTML += tableContent;
    }

    protected buildHeadLine(lineData: any)
    {
        let line = `<tr>`;

        for(let i = 0; i < lineData.values.length; i++)
        {
            const textDisplay = (i === TableColumn.quantity || i === TableColumn.conditioQuantity) ? 'text-left' : 'text-center';

            line += `<td class="fw-bold fs-6 ${textDisplay}" style="font-size: .85rem !important;">${lineData.values[i]}</td>`;
        }

        return line + "</tr>";
    }

    protected buildBodyLine(lineData: any, inputs: TableBuilderInput): string
    {
        Debug.info('build line', lineData);

        const actualsProducts = this.getActualsProducts();
        const lineProduct = lineData.product as string;

        let founded = false;

        for(const product of actualsProducts)
        {
            if(product.includes(lineProduct))
            {
                founded = true;
                break;
            }
        }

        if(!founded)
        {
            Debug.info('skiping by product', lineProduct, actualsProducts);
            return "";
        }

        let line = `<tr style="font-size: .85rem !important;">`;

        let quantity = null;

        let index = 0;

        for(const value of lineData.values)
        {
            const textDisplay = (index === TableColumn.quantity || index === TableColumn.conditioQuantity) ? 'text-left' : 'text-center';

            switch(index)
            {
                case TableColumn.contactTime :
                case TableColumn.product :

                    line += `<td class="${textDisplay}">${value}</td>`;

                break;
                case TableColumn.quantity : 

                    if(quantity)
                    {
                        Debug.warn('quantity allready defined', value);
                    }

                    Debug.info('evaluating', value[inputs.volumeType], inputs.volume, inputs.gpl, inputs.percentage);

                    quantity = eval(value[inputs.volumeType])(inputs.volume, inputs.gpl, inputs.percentage);

                    Debug.info('evaluate quantity', quantity);

                    line += 
                    `<td class="${textDisplay}">
                        <span class="value">${quantity?.toFixed(1) || 'null'}</span>
                        <span>${lineData.dosage[inputs.volumeType]}</span>
                    </td>`;

                break;
                case TableColumn.conditioQuantity:

                    if(!quantity)
                    {
                        Debug.warn('no quantity defined for', value);
                    }

                    line += 
                    `<td class="${textDisplay}">
                        <span class="value">${eval(value[inputs.volumeType])(quantity)?.toFixed(1) || 'null'}</span>
                        <span>${lineData.quantity[inputs.volumeType]}</span>
                    </td>`;

                break;
            }

            index++;
        }

        return line + "</tr>";
    }
}