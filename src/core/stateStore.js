class StateStore {
    constructor(initialState = {}) {
        this.state = initialState;
    }

    get(key) {
        return this.state[key];
    }

    set(key, value) {
        this.state[key] = value;
    }

    all() {
        return { ...this.state };
    }
}

module.exports = StateStore;
