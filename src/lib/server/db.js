import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { getEnv } from "./env.js";
import * as schema from "./schema/index.js";

export const connectionPool = mysql.createPool({
  host: getEnv("DATABASE_HOST", "127.0.0.1"),
  port: Number(getEnv("DATABASE_PORT", "3306")),
  database: getEnv("DATABASE_NAME", "warm_story"),
  user: getEnv("DATABASE_USER", "root"),
  password: getEnv("DATABASE_PASSWORD", ""),
  connectionLimit: Number(getEnv("DATABASE_CONNECTION_LIMIT", "10")),
});

export const db = drizzle(connectionPool, {
  schema,
  mode: "default",
});

export async function closeDb() {
  await connectionPool.end();
}
