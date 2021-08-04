const fs = require("fs");
const path = require("path");

function startTest()
{
    const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/OakAddins/data/fr-FR/products-fr-FR.json')));
    const responseTable = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/OakAddins/data/fr-FR/responses-table-fr-FR.json')));
    
    // red console.log("\x1b[31m", '', "\x1b[0m")
    // green console.log("\x1b[32m", '', "\x1b[0m")
    
    function isInProducts(product)
    {
        for(const _product of Object.values(products))
        {
            if(_product.productsKeys.includes(product))
            {
                return true;
            }
        }
    
        return false;
    }
    
    for(const responseLine of responseTable)
    {
        if(responseLine.type === 'tbody')
        {
            if(!isInProducts(responseLine.product))
            {
                console.log("\x1b[31m", `Product in response table "${responseLine.product}" is not refered in products ❌`, "\x1b[0m");
            }
            else
            {
                console.log("\x1b[32m", `Product in response table "${responseLine.product}" is refered in products ✅`, "\x1b[0m");
            }
        }
    }
}

module.exports = startTest;