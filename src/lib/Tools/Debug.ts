export type DebugLevel = "none" | "log" | "warn" | "error";

export default 
class Debug
{
    public static debugLevel : DebugLevel = "log";

    public static log(...args : any) : void
    {
        switch(Debug.debugLevel)
        {
            case "log" :
            // for tracing calls before console.log
            console.groupCollapsed(...args);
            console.trace();
            console.groupEnd();
        }
    }

    public static warn(...args : any) : void
    {
        switch(Debug.debugLevel)
        {
            case "log" :
            case "warn" :
                console.warn(...args);
        }
    }

    public static error(...args : any) : void
    {
        switch(Debug.debugLevel)
        {
            case "log" :
            case "warn" :
            case "error" :
                console.error(...args);
        }
    }
}