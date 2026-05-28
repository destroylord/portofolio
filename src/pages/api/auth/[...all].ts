import type { APIRoute } from "astro";
import { auth } from "../../../lib/server/auth.js";

export const prerender = false;

const handler: APIRoute = async ({ request }) => auth.handler(request);

export const ALL = handler;

