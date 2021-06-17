import {Configurator, Data } from "../Configurator";
import {ChoicesEnumerator} from "./ChoicesEnumerator";
import {EventEmitter} from "../Tools/EventEmitter";
import {DataProvider, DataProviderConstructor } from "../DataProvider";

import {ChoiceContainer, ChoiceContainerConstructor, ContainerCreationCallback } from "./ChoiceContainer";
import {Debug} from "../Tools/Debug";

export type ChoicesManagerConstructor = new (
    configurator : Configurator,
    data?: Data) 
    => ChoicesManager;

/**
 * @alias ChoicesManager
 * @extends EventEmitter
 * @abstract
 */
export 
abstract class ChoicesManager extends EventEmitter
{
    public choicesEnumerator: ChoicesEnumerator;
    public dataProvider!: DataProvider;

    private choiceContainersCreation : ContainerCreationCallback[] = [];
    private ChoiceContainerClasses = new Map<string, ChoiceContainerConstructor>();

    protected choicesContainers = new Map<string, ChoiceContainer[]>();

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
     * @public
     * @returns {void}
     * @memberof ChoicesManager
     */
    public buildChoice() : void
    {
        this.emit('build');
        this.onBuildChoice();
    }

    /**
     * Appeler lors ce que la création d'un choix est lancer, cette fonction sert au lancement de la création des containers de choix
     * @example
     * onBuildChoice()
     * {
     *  this.createChoiceContainer('type', data);
     * }
     * @protected
     * @abstract
     * @returns {void}
     * @memberof ChoicesManager
     */
    protected abstract onBuildChoice() : void;
    //#{}

    /**
     * Initialize creation of a new ChoiceContainer according to his type 
     * @param {string} type 
     * @param {any[]} data 
     * @param {any[]} ...args
     * @protected
     * @returns {ChoiceContainer | null}
     * @memberof ChoicesManager
     */
    protected createChoiceContainer(type : string, ...args : any[]): ChoiceContainer | null
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
            this.choicesContainers.get(type)?.push(choice);
            return choice;
        }
        else
        {
            Debug.error(`trying to create unregistered Choice type "${type}"`);
            return null;
        }
    }

    /**
     * //TODO : registerChoiceContainersCreation description Registering GLOBAL choice container callback
     * @param {ContainerCreationCallback} creationCallback 
     * @protected
     * @returns {void}
     * @memberof ChoicesManager
     */
    protected addChoiceContainersCreation(creationCallback : ContainerCreationCallback): void
    {
        this.choiceContainersCreation.push(creationCallback);
        Debug.log(`Registering GLOBAL choice container callback`);
    }

    /**
     * // TODO : registerDataProviderClass description
     * @param {string} index 
     * @param {ChoiceContainer} ChoiceClass 
     * @protected
     * @returns {void}
     * @memberof ChoicesManager
     */
    protected registerChoiceClass(type : string, ChoiceClass : ChoiceContainerConstructor): void
    {
        this.ChoiceContainerClasses.set(type, ChoiceClass);
        this.choicesContainers.set(type, []);
        Debug.log(`Registering a choice class`, ChoiceClass);
    }

    /**
     * // TODO : registerDataProviderClass description
     * @param {DataProviderConstructor} DataProvider 
     * @protected
     * @returns {void}
     * @memberof ChoicesManager
     */
    protected registerDataProviderClass(DataProvider : DataProviderConstructor): void
    {
        this.dataProvider = new DataProvider(this);
        Debug.log(`Registering DataProvider class`);
    }
}