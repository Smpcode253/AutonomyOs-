const BaseAgent = require('./baseAgent');

class HabitAgent extends BaseAgent {
    async run(task) {
        return {
            status: "ok",
            message: `HabitAgent processed: ${task.type}`
        };
    }
}

module.exports = HabitAgent;
