import {Configurator, Data } from "../Configurator";
import {Debug} from "../Tools/Debug";

export type DataParserConstructor = new (
    configurator : Configurator,
    data? : Data) 
    => DataParser

export type DataParserCallback = (sourceData: any) => any;

export type DataParserCallbackData = {
    callback: DataParserCallback,
    thisArg: any
};

export 
abstract class DataParser {
    
    protected parsers = new Map<string, DataParserCallbackData>();

    constructor(
        public configurator: Configurator,
        public data : Data = configurator.data
    )
    {

    }

    protected addDataParser(dataKey: string, callback: DataParserCallback, thisArg?: any): void 
    {
        this.parsers.set(dataKey, { 
            callback,
            thisArg
        });
    }

    public async parse(): Promise<void>
    {
        for(const parser of this.parsers.entries())
        {
            let data = this.data[parser[0]];

            if(!data)
            {
                Debug.error(`data parser key "${parser[0]}" is not a valid data key, please define the data or fix the parser key in your DataParser`);
            }

            try {
                this.data[parser[0]] = await parser[1].callback.call(parser[1].thisArg, data);
            }
            catch(error)
            {
                Debug.error(`error occured in data parsing of "${parser[0]}"`, error);
            }
        }
    }
}
