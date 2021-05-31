import Configurator, { Data } from "../Configurator";
import ChoicesEnumerator from "./ChoicesEnumerator";
import EventEmitter from "../Tools/EventEmitter";
import DataProvider, { DataProviderConstructor } from "../DataProvider";

import ChoiceContainer, { ChoiceContainerConstructor, ContainerCreationCallback } from "./ChoiceContainer";
import Debug from "../Tools/Debug";

export type ChoicesManagerConstructor = new (
    configurator : Configurator,
    data?: Data) 
    => ChoicesManager;

export default 
abstract class ChoicesManager extends EventEmitter
{
    public choicesEnumerator: ChoicesEnumerator;
    public dataProvider!: DataProvider;

    private choiceContainersCreation : ContainerCreationCallback[] = [];
    private ChoiceContainerClasses = new Map<string, ChoiceContainerConstructor>();

    constructor(
        public configurator : Configurator, 
        public data: Data = configurator.data)
    {
        super();
        this.configurator = configurator;
        this.choicesEnumerator = new ChoicesEnumerator(this.configurator.data.choices);
    }

    /**
     * // TODO : buildChoice description
     */
    public buildChoice() : void
    {
        this.emit('build');
        this.onBuildChoice();
    }
    protected abstract onBuildChoice() : void 
    
    /**
     * // TODO : buildProducts description
     */
    protected buildProducts() : void
    {
        this.emit('buildProducts');
        this.onBuildProducts()
        // TODO : buildProduct
    }
    protected abstract onBuildProducts() : void

    /**
     * Initialize the creation of a new ChoiceContainer according to his type 
     * @returns {ChoiceContainer} the freshly created container
     * @param {string} type 
     * @param {any[]} data 
     * @param {any[]} args
     */
    protected createChoiceContainer(type : string, ...args : any[]) : ChoiceContainer | null
    {
        if(this.ChoiceContainerClasses.has(type))
        {
            const ChoiceContainerClass = this.ChoiceContainerClasses.get(type);

            if(!ChoiceContainerClass)
            {
                Debug.error(`can't get ChoiceContainerClass "${type}"`);    
                return null;
            }

            const choice = new ChoiceContainerClass(type, this.choiceContainersCreation, this, ...args);
            
            Debug.log(`Successfully created new choice`, choice);

            return choice;
        }
        else
        {
            Debug.error(`trying to create unregistered Choice type "${type}"`);
            return null;
        }
    }

    /**
     * //TODO : registerChoiceContainersCreation description
     * @param {ContainerCreationCallback} creationCallback 
     */
    protected registerChoiceContainersCreation(creationCallback : ContainerCreationCallback)
    {
        this.choiceContainersCreation.push(creationCallback);
        Debug.log(`Registering GLOBAL choice container callback`);
    }

    /**
     * // TODO : registerDataProviderClass description
     * @param {string} index 
     * @param {typeof ChoiceContainer} ChoiceClass 
     */
    protected registerChoiceClass(index : string, ChoiceClass : ChoiceContainerConstructor)
    {
        this.ChoiceContainerClasses.set(index, ChoiceClass);
        Debug.log(`Registering choice class`);
    }

    /**
     * // TODO : registerDataProviderClass description
     * @param {typeof SuperDataProvider} DataProviderClass 
     */
    protected registerDataProviderClass(DataProvider : DataProviderConstructor)
    {
        this.dataProvider = new DataProvider(this);
        Debug.log(`Registering DataProvider class`);
    }
}