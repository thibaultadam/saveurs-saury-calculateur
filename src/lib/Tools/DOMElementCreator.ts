
export function createElement(creationQuery: string): HTMLElement | HTMLCollection | undefined
{
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(creationQuery, 'text/html');
    const body = parsedDocument.children[0]?.querySelector('body');

    if(body?.children?.length && body.children.length > 1)
    {
        return body?.children as HTMLCollection;
    }
    else
    {
        return body?.children[0] as HTMLElement | undefined;
    }
}