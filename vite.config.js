/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte('./svelte.config.js')],
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    minify: true,
    assetsDir: 'assets',
    assetsInlineLimit: 0
  }
})
