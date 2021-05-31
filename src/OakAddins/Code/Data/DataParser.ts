import Configurator from "../../../lib/Configurator";
import _DataParser from "../../../lib/Data/DataParser";

export default
class DataParser extends _DataParser {

    constructor(configurator: Configurator)
    {
        super(configurator);
        
        this.addDataParser('choices', this.treeParser);
    }

    private treeParser(data: any) : any
    {

    }
}