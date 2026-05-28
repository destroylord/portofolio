import type { APIRoute } from "astro";
import { deleteProjectById, updateProjectFromForm } from "../../../../lib/server/projects.js";

export const prerender = false;

export const POST: APIRoute = async ({ request, params, redirect, locals }) => {
  if (!locals.user) {
    return redirect("/admin/login");
  }

  const id = params.id;
  if (!id) {
    return new Response("Project id is required.", { status: 400 });
  }

  const formData = await request.formData();
  const action = String(formData.get("action") || "update");

  try {
    if (action === "delete") {
      await deleteProjectById(id);
      return redirect("/admin/projects");
    }

    await updateProjectFromForm(id, formData);
    return redirect(`/admin/projects/${id}?saved=1`);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to update project.";
    return redirect(`/admin/projects/${id}?error=${encodeURIComponent(message)}`);
  }
};
