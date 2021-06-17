
export function createElement(creationQuery: string): HTMLElement
{
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(creationQuery, 'text/html');
    const element = parsedDocument.children[0]?.querySelector('body')?.children[0];

    return element as HTMLElement;
}