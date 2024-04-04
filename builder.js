const result = await Bun.build({
    entrypoints: ['./index.ts', './server.ts', './honoserver.ts', './filereader.ts', './elysiademo.tsx'],
    outdir: './dist',
    target: "bun",
    external: ['*']
});
  
console.log(result);
