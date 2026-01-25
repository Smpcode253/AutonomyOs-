class AutonomyError extends Error {
    constructor(message) {
        super(message);
        this.name = "AutonomyError";
    }
}

class AgentNotFoundError extends AutonomyError {
    constructor(agentName) {
        super(`Agent not found: ${agentName}`);
        this.name = "AgentNotFoundError";
    }
}

class TaskValidationError extends AutonomyError {
    constructor(details) {
        super(`Task validation failed: ${details}`);
        this.name = "TaskValidationError";
    }
}

module.exports = {
    AutonomyError,
    AgentNotFoundError,
    TaskValidationError
};
