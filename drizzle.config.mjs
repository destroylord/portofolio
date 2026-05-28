import { defineConfig } from "drizzle-kit";
import { getEnv } from "./src/lib/server/env.js";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/lib/server/schema/*.js",
  dialect: "mysql",
  dbCredentials: {
    host: getEnv("DATABASE_HOST", "127.0.0.1"),
    port: Number(getEnv("DATABASE_PORT", "3306")),
    user: getEnv("DATABASE_USER", "root"),
    password: getEnv("DATABASE_PASSWORD", ""),
    database: getEnv("DATABASE_NAME", "warm_story"),
  },
});

