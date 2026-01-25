class TaskQueue {
  constructor() {
    this.queue = [];
  }

  add(task) {
    this.queue.push(task);
  }

  next() {
    return this.queue.shift() || null;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

module.exports = {
  TaskQueue,
};
