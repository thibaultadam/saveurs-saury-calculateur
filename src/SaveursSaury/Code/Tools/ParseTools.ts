import { ChoicesEnumerator } from "../../../lib/ChoicesManagement/ChoicesEnumerator";
import { ChoiceData } from "../Data/DataParser";

export function parseChoiceData(_choiceData: ChoiceData, choicesEnumerator: ChoicesEnumerator): ChoiceData
{
    const choiceData = Object.assign({}, _choiceData);

    if(choiceData.parse)
    {
        for(const key of Object.keys(choiceData.parse))
        {
            const parser = choiceData.parse[key];

            choiceData[key] = stringReplace(choiceData[key], parser, choicesEnumerator);
        }
    }

    return choiceData;
}

type Parser = {
    [index: string]: string | Replacer
}

type Replacer = {
    index: string,
    [index:string]: string
};

function stringReplace(
    value: string, 
    parser: Parser, 
    choicesEnumerator: ChoicesEnumerator)
{
    let formatedValue = value.toString();

    for(const key of Object.keys(parser))
    {
        switch(key)
        {
            case 'replace':
                formatedValue = (parser[key] as Replacer)[choicesEnumerator.getByLabel((parser[key] as Replacer).index)?.value as string] || formatedValue;
                break;
            default: 
                formatedValue = formatedValue.replace(parser[key] as string, choicesEnumerator.getByLabel(key)?.value as string);
                break;
        }
    }

    return formatedValue;
}