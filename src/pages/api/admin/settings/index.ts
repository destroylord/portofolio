import type { APIRoute } from "astro";
import { upsertSiteContentFromForm } from "../../../../lib/server/content.js";

export const prerender = false;

export const POST: APIRoute = async ({ locals, redirect, request }) => {
  if (!locals.user) {
    return redirect("/admin/login");
  }

  try {
    const formData = await request.formData();
    await upsertSiteContentFromForm(formData);
    return redirect("/admin/settings?saved=1");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to save site settings.";
    return redirect(`/admin/settings?error=${encodeURIComponent(message)}`);
  }
};
