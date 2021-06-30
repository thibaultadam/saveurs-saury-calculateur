import { ChoicesEnumerator } from "../../../lib/ChoicesManagement/ChoicesEnumerator";
import { ChoiceData } from "../Data/DataProvider";

export function parseChoiceData(_choiceData: ChoiceData, choicesEnumerator: ChoicesEnumerator): ChoiceData
{
    const choiceData = Object.assign({}, _choiceData);

    if(choiceData.parse)
    {
        for(const key of Object.keys(choiceData.parse as {[index: string]: string}))
        {
            const parser = choiceData.parse[key] as {[index: string]: string};

            choiceData[key] = stringReplace(choiceData[key], parser, choicesEnumerator);
        }
    }

    return choiceData;
}

function stringReplace(
    value: string, 
    parser: {[index: string]: string}, 
    choicesEnumerator: ChoicesEnumerator)
{
    let formatedValue = value.toString();

    for(const key of Object.keys(parser))
    {
        formatedValue = formatedValue.replace(parser[key], choicesEnumerator.getByLabel(key)?.value as string);
    }

    return formatedValue;
}