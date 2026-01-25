const Runtime = require('./src/core/runtime');
const HabitAgent = require('./src/agents/habitAgent');
const AffiliateAgent = require('./src/agents/affiliateAgent');
const CopyAgent = require('./src/agents/copyAgent');
const AnalyticsAgent = require('./src/agents/analyticsAgent');

const runtime = new Runtime();

runtime.registerAgent("habit", HabitAgent);
runtime.registerAgent("affiliate", AffiliateAgent);
runtime.registerAgent("copy", CopyAgent);
runtime.registerAgent("analytics", AnalyticsAgent);

runtime.start();

runtime.enqueueTask({ type: "habit:daily" });
runtime.enqueueTask({ type: "affiliate:scan" });
runtime.enqueueTask({ type: "copy:generate" });
runtime.enqueueTask({ type: "analytics:report" });
