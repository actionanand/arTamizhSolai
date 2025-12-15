/// <reference types="vitest" />

import { defineConfig, Plugin } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isGitHubPages = process.env['GITHUB_PAGES'] === 'true';
  const base = isGitHubPages ? '/artamizhsolai/' : '/';

  // Plugin to update <base href> in index.html
  const htmlBasePlugin = (): Plugin => ({
    name: 'html-base-transform',
    transformIndexHtml(html) {
      return html.replace(
        /<base href="[^"]*" \/>/,
        `<base href="${base}" />`
      );
    },
  });

  return {
    base,
    build: {
      target: ['es2020'],
    },
    resolve: {
      mainFields: ['module'],
    },
    plugins: [
      analog({
        content: {
          highlighter: 'shiki',
        },
        prerender: {
          routes: ['/blog', '/blog/2022-12-27-my-first-post'],
        },
      }),
      htmlBasePlugin(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
  };
});
