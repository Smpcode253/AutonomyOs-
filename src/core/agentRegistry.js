class AgentRegistry {
    constructor() {
        this.registry = {};
    }

    register(name, agentClass) {
        this.registry[name] = agentClass;
    }

    get(name) {
        return this.registry[name];
    }

    list() {
        return Object.keys(this.registry);
    }
}

module.exports = AgentRegistry;
