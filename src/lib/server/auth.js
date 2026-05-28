import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "./db.js";
import { authSchema } from "./schema/auth.schema.js";
import { getBaseUrl, getEnv } from "./env.js";

export const auth = betterAuth({
  baseURL: getBaseUrl(),
  secret: getEnv("BETTER_AUTH_SECRET"),
  database: drizzleAdapter(db, {
    provider: "mysql",
    schema: authSchema,
  }),
  emailAndPassword: {
    enabled: true,
    disableSignUp: getEnv("BETTER_AUTH_DISABLE_SIGN_UP", "false") === "true",
  },
  trustedOrigins: [getBaseUrl()],
  rateLimit: {
    enabled: false,
  },
});

