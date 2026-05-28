import { auth } from "./auth.js";

export async function getServerSession(headers) {
  return auth.api.getSession({
    headers,
  });
}

