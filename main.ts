import { mkdirSync, writeFileSync } from "node:fs";

// One smug line from the self-checkout machine, judging a basket of twelve yoghurts.
const line = "Twelve yoghurts and no spoon. Please place your dignity in the bagging area.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
