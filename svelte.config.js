import 'dotenv/config';
import cloudflare from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: cloudflare({}),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      define: {
        'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
      },
    },
  },
};

export default config;
