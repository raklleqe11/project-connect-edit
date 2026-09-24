import { createFileRoute } from "@tanstack/react-router";
import html from "../site/index.html?raw";

const serve = () =>
  new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });

export const Route = createFileRoute("/$")({
  server: { handlers: { GET: serve } },
});
