await Bun.build({
    entrypoints: ['./index.ts', './server.ts', './honoserver.ts', './filereader.ts'],
    outdir: './dist',
});
  