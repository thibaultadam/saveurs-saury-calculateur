import {Debug} from "./Tools/Debug";
import {EventEmitter} from "./Tools/EventEmitter";

/**
 * //TODO : Description
 * @alias UIElement
 */
export  
abstract class UIElement extends EventEmitter
{
    /**
     * @memberof UIElement
     */
    constructor()
    {
        super();
        window?.addEventListener('resize', () => this.emit('changeDisplaySize'));
    }

    /**
     * @type {Map<string, number>}
     * @public
     * @static
     */
    public static sizes = new Map<string, number>();

    /**
     * @param  {string} sizeKey
     * @returns {boolean}
     * @protected
     * @memberof UIElement
     */
    protected isDisplaySize(sizeKey : string) : boolean
    {
        if(!UIElement.sizes.has(sizeKey))
        {
            Debug.error('display size key not found');
        }

        return window.matchMedia(`(min-width: ${UIElement.sizes.get(sizeKey)}px)`).matches;
    }
}