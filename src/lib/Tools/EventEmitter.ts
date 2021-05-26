// original code adapted in typescript from https://gist.github.com/mudge/5830382

/* Polyfill EventEmitter. */
export default
abstract class EventEmitter {
    events: any

    constructor()
    {
        this.events = {};
    }   

    on(event: any, listener: any) {
        if (typeof this.events[event] !== 'object') {
            this.events[event] = [];
        }
    
        this.events[event].push(listener);
    }

    removeListener(event: any, listener: any) {
        var idx;
    
        if (typeof this.events[event] === 'object') {
            idx = this.events[event].indexOf(listener);
    
            if (idx > -1) {
                this.events[event].splice(idx, 1);
            }
        }
    }

    emit(event: any, ...args: any[]) {
        var i, listeners, length, args = [].slice.call(arguments, 1) as any[];
    
        if (typeof this.events[event] === 'object') {
            listeners = this.events[event].slice();
            length = listeners.length;
    
            for (i = 0; i < length; i++) {
                listeners[i].apply(this, args);
            }
        }
    }

    once(event: any, listener: any) {
        this.on(event, function g (this: any) {
            this.removeListener(event, g);
            listener.apply(this, arguments);
        });
    }
}