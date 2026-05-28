import type { APIRoute } from "astro";
import { upsertAboutContentFromForm } from "../../../../lib/server/content.js";

export const prerender = false;

export const POST: APIRoute = async ({ locals, redirect, request }) => {
  if (!locals.user) {
    return redirect("/admin/login");
  }

  try {
    const formData = await request.formData();
    await upsertAboutContentFromForm(formData);
    return redirect("/admin/about?saved=1");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to save about content.";
    return redirect(`/admin/about?error=${encodeURIComponent(message)}`);
  }
};
