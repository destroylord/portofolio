import type { MiddlewareHandler } from "astro";
import { getServerSession } from "./lib/server/session.js";

export const onRequest: MiddlewareHandler = async (context, next) => {
  try {
    const session = await getServerSession(context.request.headers);
    context.locals.session = session?.session ?? null;
    context.locals.user = session?.user ?? null;
  } catch {
    context.locals.session = null;
    context.locals.user = null;
  }

  const { pathname, search } = context.url;
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginRoute = pathname === "/admin/login";
  const isAuthenticated = Boolean(context.locals.session && context.locals.user);

  if (isAdminRoute && !isLoginRoute && !isAuthenticated) {
    const redirectTarget = `/admin/login?next=${encodeURIComponent(`${pathname}${search}`)}`;
    return context.redirect(redirectTarget);
  }

  if (isLoginRoute && isAuthenticated) {
    return context.redirect("/admin");
  }

  return next();
};
