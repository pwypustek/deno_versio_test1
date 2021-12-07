import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

function handler(req: Request): Response {
  return new Response("Hello world");
}

console.log("Listening on http://localhost:8000");
await serve(handler);


/**
 * webserver.ts
 */
/*import { serve } from "https://deno.land/std@0.92.0/http/server.ts";

const server = serve({ hostname: "0.0.0.0", port: 80 });
//console.log("HTTP webserver running.  Access it at:  http://localhost:80/");

for await (const request of server) {
  let bodyContent = "Your user-agent iiiiiiis:\n\n";
  bodyContent += request.headers.get("user-agent") || "Unknown";

  request.respond({ status: 200, body: bodyContent });
}
*/
