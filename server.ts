Bun.serve({
    fetch(req: Request) {
      return new Response(`Echo: ${req.url}`);
    },
});
