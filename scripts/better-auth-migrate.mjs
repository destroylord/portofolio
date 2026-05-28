import { spawn } from "node:child_process";
import { getEnv, validateServerEnv } from "../src/lib/server/env.js";

validateServerEnv();

const args = ["drizzle-kit", "push", "--config=drizzle.config.mjs"];
if (process.argv.includes("--force")) {
  args.push("--force");
}

const child = spawn("npx", args, {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    DATABASE_HOST: getEnv("DATABASE_HOST"),
    DATABASE_PORT: getEnv("DATABASE_PORT"),
    DATABASE_NAME: getEnv("DATABASE_NAME"),
    DATABASE_USER: getEnv("DATABASE_USER"),
    DATABASE_PASSWORD: getEnv("DATABASE_PASSWORD"),
  },
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
