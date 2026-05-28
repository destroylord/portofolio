import fs from "node:fs";
import path from "node:path";

let envLoaded = false;

function loadDotEnvFile() {
  if (envLoaded) return;

  const envPath = path.resolve(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) {
    envLoaded = true;
    return;
  }

  const raw = fs.readFileSync(envPath, "utf8");
  const lines = raw.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1);

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }

  envLoaded = true;
}

const requiredEnvKeys = [
  "BETTER_AUTH_SECRET",
  "DATABASE_HOST",
  "DATABASE_PORT",
  "DATABASE_NAME",
  "DATABASE_USER",
];

export function getEnv(key, fallback = "") {
  loadDotEnvFile();
  return process.env[key] ?? fallback;
}

export function getBaseUrl() {
  loadDotEnvFile();
  return process.env.BETTER_AUTH_URL || process.env.SITE_URL || "http://localhost:4321";
}

export function validateServerEnv() {
  loadDotEnvFile();
  const missing = requiredEnvKeys.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}
