import {Configurator, Data } from "../Configurator";
import {ChoicesEnumerator} from "./ChoicesEnumerator";
import {EventEmitter} from "../Tools/EventEmitter";
import {DataProvider, DataProviderConstructor } from "../DataProvider";

import {ChoiceContainer, ChoiceContainerConstructor, ContainerCreationCallback } from "./Choices/ChoiceContainer";
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

    protected choicesContainersInstances: ChoiceContainer[] = [];

    constructor(
        public configurator : Configurator, 
        public data: Data = configurator.data)
    {
        super();
        this.configurator = configurator;
        this.choicesEnumerator = new ChoicesEnumerator(this.configurator.data.choices);
    }

    /**
     * buildChoice appel onBuildChoice et déclanche les evenements `build` avant l'appel de `onBuild`
     * et `choiceBuilt` (avec comme valeur d'émition l'index du choix courant) lorsque l'appel de `onBuildChoice` est terminer et que donc le choix est complement appelé
     * @public
     * @returns {void}
     * @memberof ChoicesManager
     */
    public buildChoice() : void
    {
        this.emit('build');
        this.onBuildChoice();
        this.emit('choiceBuilt', this.choicesEnumerator.current.index);
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

            const choiceID = this.choicesEnumerator.current.index;

            const choice = new ChoiceContainerClass({
                id: choiceID,
                type: type, 
                containersCreation: this.choiceContainersCreation, 
                choicesManager: this
            }, ...args);

            // lorsque un choix est fini de construire on propage l'évenement dans les couches inférieurs
            this.on('choiceBuilt', (builtChoiceID: number) => 
            {
                if(choiceID === builtChoiceID)
                {
                    choice.emit('choiceBuilt');
                }
            });
            
            Debug.info(`Successfully created new choice`, choice);
            this.choicesContainersInstances[choiceID] = choice;
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
        Debug.info(`Registering GLOBAL choice container callback`);
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
        Debug.info(`Registering a choice class`, ChoiceClass);
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
        Debug.info(`Registering DataProvider class`);
    }
}