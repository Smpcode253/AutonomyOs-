const EventEmitter = require('events');

class EventBus extends EventEmitter {
    emitEvent(event, payload) {
        this.emit(event, payload);
    }

    onEvent(event, handler) {
        this.on(event, handler);
    }
}

module.exports = EventBus;
