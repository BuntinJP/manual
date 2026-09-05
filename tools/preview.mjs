import { preview } from 'astro';

// Use the public API so the test runner owns a foreground server even in an
// agent environment where the Astro CLI starts background servers by default.
const server = await preview({ server: { host: '127.0.0.1', port: 4322 } });
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, async () => {
    await server.stop();
    process.exit(0);
  });
}
