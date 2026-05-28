import type { APIRoute } from "astro";
import { createProjectFromForm } from "../../../../lib/server/projects.js";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect, locals }) => {
  if (!locals.user) {
    return redirect("/admin/login");
  }

  try {
    const formData = await request.formData();
    await createProjectFromForm(formData);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create project.";
    return redirect(`/admin/projects/new?error=${encodeURIComponent(message)}`);
  }

  return redirect("/admin/projects");
};
