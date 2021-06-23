export function stringReplace(value: string, parser: {[index: string]: string}, context: {[index: string]: string})
{
    let formatedValue = value.toString();

    for(const key of Object.keys(parser))
    {
        formatedValue = formatedValue.replace(parser[key], context[key]);
    }

    return formatedValue;
}