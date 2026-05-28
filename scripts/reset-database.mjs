import mysql from "mysql2/promise";
import { getEnv, validateServerEnv } from "../src/lib/server/env.js";

const APP_TABLES = [
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

function getMode() {
  const modeArg = process.argv.find((arg) => arg.startsWith("--mode="));
  if (!modeArg) return "app";

  const mode = modeArg.split("=")[1];
  if (mode !== "app" && mode !== "all") {
    throw new Error('Mode reset tidak valid. Gunakan "--mode=app" atau "--mode=all".');
  }

  return mode;
}

async function getAllTables(connection) {
  const databaseName = getEnv("DATABASE_NAME");
  const [rows] = await connection.query(
    `
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = ?
      ORDER BY table_name ASC
    `,
    [databaseName]
  );

  return rows.map((row) => row.table_name);
}

async function main() {
  validateServerEnv();

  const confirmed = process.argv.includes("--force");
  const mode = getMode();
  if (!confirmed) {
    throw new Error(
      'Database reset diblokir. Jalankan lagi dengan flag "--force" karena proses ini akan menghapus tabel database.'
    );
  }

  const connection = await mysql.createConnection(getConnectionConfig());

  try {
    const tables = mode === "all" ? await getAllTables(connection) : APP_TABLES;

    await connection.query("SET FOREIGN_KEY_CHECKS = 0");

    for (const table of tables) {
      await connection.query(`DROP TABLE IF EXISTS \`${table}\``);
      console.log(`Dropped table: ${table}`);
    }

    await connection.query("SET FOREIGN_KEY_CHECKS = 1");
    console.log(
      mode === "all"
        ? "All tables in the active database have been reset."
        : "Application tables reset completed."
    );
  } finally {
    await connection.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
