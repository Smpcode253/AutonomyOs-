// AutonomyOS — Single File Version

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

class Runtime {
  constructor({ agents = [], intervalMs = 4000 } = {}) {
    this.agents = agents;
    this.queue = new TaskQueue();
    this.intervalMs = intervalMs;
    this.timer = null;
  }

  start() {
    console.log("[AutonomyOS] Starting…");

    this.agents.forEach(agent => {
      if (agent.bootstrap) agent.bootstrap(this.queue);
    });

    this.timer = setInterval(async () => {
      const task = this.queue.next();

      if (!task) {
        this.agents.forEach(agent => {
          if (agent.idle) agent.idle(this.queue);
        });
        return;
      }

      const agent = this.agents.find(a => a.canHandle(task));
      if (!agent) return;

      try {
        await agent.handle(task, this.queue);
      } catch (err) {
        console.log("[AutonomyOS] Error:", err);
      }
    }, this.intervalMs);
  }

  stop() {
    clearInterval(this.timer);
    console.log("[AutonomyOS] Stopped.");
  }
}

class TriAgent {
  constructor() {
    this.name = "TriAgent";
  }

  canHandle(task) {
    return [
      "GENERATE_MARKETING",
      "GENERATE_AFFILIATE",
      "GENERATE_ANALYTICS",
    ].includes(task.type);
  }

  bootstrap(queue) {
    queue.add({
      type: "GENERATE_MARKETING",
      payload: {
        product: "AutonomyOS",
        niche: "AI-powered autonomous marketing systems",
      },
    });
  }

  idle(queue) {
    if (queue.isEmpty()) {
      queue.add({
        type: "GENERATE_MARKETING",
        payload: {
          product: "AutonomyOS",
          niche: "AI automation for growth loops",
        },
      });
    }
  }

  async handle(task, queue) {
    const { type, payload } = task;

    if (type === "GENERATE_MARKETING") {
      const { product, niche } = payload;

      console.log("\n[Marketing]");
      console.log(`Hook: Stop manually managing campaigns. Let ${product} run autonomous AI-driven growth loops for your ${niche}.`);
      console.log(`Post: 🚀 ${product} — your AI-native marketing OS.`);

      queue.add({
        type: "GENERATE_AFFILIATE",
        payload: { product },
      });
      return;
    }

    if (type === "GENERATE_AFFILIATE") {
      const { product } = payload;

      console.log("\n[Affiliate]");
      console.log(`Angle: Promote ${product} as the silent AI growth partner.`);
      console.log(`Headline: Turn AI into a full-time marketer.`);
      console.log(`CTA: Share your link and earn.`);

      queue.add({
        type: "GENERATE_ANALYTICS",
        payload: {},
      });
      return;
    }

    if (type === "GENERATE_ANALYTICS") {
      console.log("\n[Analytics]");
      console.log("Summary: Messaging resonates with overwhelmed founders.");
      console.log("Insight: Show concrete loops, not abstract ideas.");
      console.log("Next Step: Generate a 7-day loop for a SaaS founder.");

      queue.add({
        type: "GENERATE_MARKETING",
        payload: {
          product: "AutonomyOS",
          niche: "AI-native autonomous marketing OS",
        },
      });
      return;
    }
  }
}

// Run AutonomyOS
const runtime = new Runtime({
  agents: [new TriAgent()],
  intervalMs: 4000,
});

runtime.start();

setTimeout(() => {
  runtime.stop();
  process.exit(0);
}, 45000);
