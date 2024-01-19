const result = await Bun.build({
    entrypoints: ['./elysiademo.tsx'],
    outdir: './dist',
    target: "node",
    external: ['*']
});
  
console.log(result);