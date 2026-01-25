const BaseAgent = require('./baseAgent');

class CopyAgent extends BaseAgent {
    async run(task) {
        return {
            status: "ok",
            message: `CopyAgent processed: ${task.type}`
        };
    }
}

module.exports = CopyAgent;
