import { runWeeklyRollup } from "./rollup.ts";

runWeeklyRollup().catch((err) => {
  console.error(err);
  process.exit(1);
});
