import mysql from "mysql2/promise";
import { getEnv, validateServerEnv } from "../src/lib/server/env.js";

const TABLES = [
  "session",
  "account",
  "verification",
  "user",
  "project",
  "site_content",
  "about_content",
];

function getConnectionConfig() {
  return {
    host: getEnv("DATABASE_HOST", "localhost"),
    port: Number(getEnv("DATABASE_PORT", "3306")),
    database: getEnv("DATABASE_NAME"),
    user: getEnv("DATABASE_USER"),
    password: getEnv("DATABASE_PASSWORD", ""),
  };
}

async function main() {
  validateServerEnv();

  const confirmed = process.argv.includes("--force");
  if (!confirmed) {
    throw new Error(
      'Database reset diblokir. Jalankan lagi dengan flag "--force" karena proses ini akan menghapus semua tabel aplikasi.'
    );
  }

  const connection = await mysql.createConnection(getConnectionConfig());

  try {
    await connection.query("SET FOREIGN_KEY_CHECKS = 0");

    for (const table of TABLES) {
      await connection.query(`DROP TABLE IF EXISTS \`${table}\``);
      console.log(`Dropped table: ${table}`);
    }

    await connection.query("SET FOREIGN_KEY_CHECKS = 1");
    console.log("Application tables reset completed.");
  } finally {
    await connection.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
