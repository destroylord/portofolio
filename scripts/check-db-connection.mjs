import mysql from "mysql2/promise";
import { getEnv } from "../src/lib/server/env.js";

function maskPassword(password) {
  if (!password) return "(empty)";
  if (password.length <= 2) return "*".repeat(password.length);
  return `${password[0]}${"*".repeat(password.length - 2)}${password[password.length - 1]}`;
}

async function main() {
  const config = {
    host: getEnv("DATABASE_HOST", "127.0.0.1"),
    port: Number(getEnv("DATABASE_PORT", "3306")),
    database: getEnv("DATABASE_NAME", "warm_story"),
    user: getEnv("DATABASE_USER", "root"),
    password: getEnv("DATABASE_PASSWORD", ""),
  };

  console.log("DB config loaded from .env:");
  console.log(`- host: ${config.host}`);
  console.log(`- port: ${config.port}`);
  console.log(`- database: ${config.database}`);
  console.log(`- user: ${config.user}`);
  console.log(`- password: ${maskPassword(config.password)}`);
  console.log(`- password length: ${config.password.length}`);

  const connection = await mysql.createConnection(config);
  const [rows] = await connection.query("SELECT CURRENT_USER() AS currentUser, DATABASE() AS dbName");
  await connection.end();

  console.log("Connection successful.");
  console.log(rows[0]);
}

main().catch((error) => {
  console.error("Connection failed.");
  console.error(error);
  process.exit(1);
});

