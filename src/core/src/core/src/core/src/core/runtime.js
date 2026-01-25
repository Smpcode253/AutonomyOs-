const AgentRegistry = require('./agentRegistry');
const TaskQueue = require('./taskQueue');
const WorkerLoop = require('./workerLoop');
const EventBus = require('./eventBus');
const Logger = require('./logger');
const config = require('./config');

class Runtime {
    constructor() {
        this.registry = new AgentRegistry();
        this.queue = new TaskQueue();
        this.events = new EventBus();
        this.worker = new WorkerLoop(this.queue, this.registry, this.events);
    }

    registerAgent(name, agentClass) {
        this.registry.register(name, agentClass);
        Logger.info(`Agent registered: ${name}`);
    }

    enqueueTask(task) {
        this.queue.enqueue(task);
        Logger.info(`Task enqueued: ${task.type}`);
    }

    start() {
        Logger.info("Runtime starting
