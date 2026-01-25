const Logger = require('./logger');

class HealthMonitor {
    constructor(registry) {
        this.registry = registry;
        this.lastSeen = {};
    }

    heartbeat(agentName) {
        this.lastSeen[agentName] = Date.now();
    }

    check(maxAge = 30000) {
        const now = Date.now();
        for (const agentName of Object.keys(this.lastSeen)) {
            if (now - this.lastSeen[agentName] > maxAge) {
                Logger.warn(`Agent stalled: ${agentName}`);
            }
        }
    }
}

module.exports = HealthMonitor;
