export type DebugLevel = "none" | "info" | "log" | "warn" | "error";

export  
class Debug
{
    public static debugLevel : DebugLevel = "info";

    public static info(...args : any) : void
    {
        switch(Debug.debugLevel)
        {
            case "info" :
            console.info(...args);
        }
    }

    public static log(...args : any) : void
    {
        switch(Debug.debugLevel)
        {
            case "info" :
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
            case "info" :
            case "log" :
            case "warn" :
                console.warn(...args);
        }
    }

    public static error(...args : any) : void
    {
        switch(Debug.debugLevel)
        {
            case "info" :
            case "log" :
            case "warn" :
            case "error" :
                console.error(...args);
        }
    }
}