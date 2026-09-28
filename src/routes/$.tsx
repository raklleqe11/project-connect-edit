import { createFileRoute } from "@tanstack/react-router";
import html from "../site/index.html?raw";

const serve = ({ request }: { request: Request }) => {
  const { pathname } = new URL(request.url);
  if (pathname === "/menu" || pathname === "/menu/") {
    return new Response(null, { status: 301, headers: { location: "/#menu" } });
  }
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
};

export const Route = createFileRoute("/$")({
  server: { handlers: { GET: serve } },
});
