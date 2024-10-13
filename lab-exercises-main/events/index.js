// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    on(eventName, callback) {
        if (this[eventName]) {
            this[eventName].push(callback);
        } else {
            this[eventName] = [callback];
        }
    }

    trigger(eventName) {
        return !this[eventName] ? null : this[eventName].forEach((fn) => fn());
    }
    off(eventName) {
        delete this[eventName];
    }
}

module.exports = Events;
