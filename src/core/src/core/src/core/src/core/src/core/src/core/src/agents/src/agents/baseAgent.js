class BaseAgent {
    constructor(runtime) {
        this.runtime = runtime;
    }

    async run(task) {
        throw new Error("run() not implemented");
    }
}

module.exports = BaseAgent;
