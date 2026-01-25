const BaseAgent = require('./baseAgent');

class AffiliateAgent extends BaseAgent {
    async run(task) {
        return {
            status: "ok",
            message: `AffiliateAgent processed: ${task.type}`
        };
    }
}

module.exports = AffiliateAgent;
