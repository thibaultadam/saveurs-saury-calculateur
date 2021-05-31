import Configurator, { Data } from "../Configurator";
import Debug from "../Tools/Debug";

export type DataParserConstructor = new (
    configurator : Configurator,
    data? : Data) 
    => DataParser

export type DataParserCallback = (data: any) => any;

export default
abstract class DataParser {
    
    protected parsers = new Map<string, DataParserCallback>();

    constructor(
        public configurator: Configurator,
        public data : Data = configurator.data
    )
    {

    }

    protected addDataParser(dataKey: string, callback: DataParserCallback) : void 
    {
        this.parsers.set(dataKey, callback);
    }

    public parse()
    {
        for(const parser of this.parsers.entries())
        {
            const data = this.data[parser[0]];

            if(!data)
            {
                Debug.error(`data parser key "${parser[0]}" is not a valid data key, please define the data or fix the parser key in your DataParser`);
            }

            try {
                parser[1](data);
            }
            catch(error)
            {
                Debug.error(`error occured in data parsing of "${parser[0]}"`, error);
            }
        }
    }
}
