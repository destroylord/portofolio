import { auth } from "../src/lib/server/auth.js";
import { validateServerEnv, getEnv } from "../src/lib/server/env.js";

async function main() {
  validateServerEnv();

  const email = getEnv("ADMIN_EMAIL");
  const password = getEnv("ADMIN_PASSWORD");
  const name = getEnv("ADMIN_NAME", "Warm Story Admin");

  if (!email || !password) {
    throw new Error("Missing ADMIN_EMAIL or ADMIN_PASSWORD in environment.");
  }

  await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });

  console.log(`Admin user seeded for ${email}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

