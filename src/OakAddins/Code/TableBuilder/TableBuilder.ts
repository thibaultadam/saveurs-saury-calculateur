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

        return Object.keys(node.values).map((product) => product.toLocaleLowerCase());
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
    
        let tableContent = '<table class="table table-striped text-center mb-0" id="response-container">';
    
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
            line += `<td class="fw-bold fs-6" style="font-size: .85rem !important;">${lineData.values[i]}</td>`;
        }

        return line + "</tr>";
    }

    protected buildBodyLine(lineData: any, inputs: TableBuilderInput): string
    {
        Debug.info('build line', lineData);

        const actualsProducts = this.getActualsProducts();
        const lineProduct = lineData.product.toLowerCase() as string;

        let founded = false;

        for(const product of actualsProducts)
        {
            if(product.search(lineProduct) !== -1)
            {
                Debug.log('founded');
                founded = true;
                break;
            }
        }

        if(!founded)
        {
            Debug.info('skiping by product');
            return "";
        }

        // cette partie du code permetait de savoir si le produit qui étais en train d'etre construit corespondait a celuis qui avait été selectioné
        /*const selectedProduct = this.choiceEnumerator.getByLabel('product')?.value?.toLowerCase() as string;
        const lineProduct = lineData.product.toLowerCase() as string;

        if(selectedProduct.search(lineProduct) === -1)
        {
            Debug.info('skiping by product');
            return "";
        }*/

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
                            //BUG : incompatible avec le nouveau système de produit

                            //Debug.info('skiping by quantity');
                            //return "";
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