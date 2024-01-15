// server.ts
// Change this function to allow different routes for Bun.serve
Bun.serve({
  fetch(req) {
    return new Response(`Echo: ${req.url}`);
  }
});
