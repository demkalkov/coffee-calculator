/** @type {import('@sveltejs/kit').Config} */
import preprocess from "svelte-preprocess";

const config = {
  outDir: 'docs',
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  paths: {
    base: '.'
  },
  version: {
    name: Date.now().toString(),
    pollInterval: 0
  }
}

export default config;