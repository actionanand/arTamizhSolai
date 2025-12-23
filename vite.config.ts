/// <reference types="vitest" />

import { defineConfig, Plugin } from 'vite';
import analog from '@analogjs/platform';
import { bundledLanguages } from 'shiki';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isProduction = mode === 'production' || process.env['GITHUB_PAGES'] === 'true';
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
        shikiOptions: {
          highlight: {
            // alternate theme
            theme: 'ayu-dark'
          },
          highlighter: {
             // add more languages
            additionalLangs: [
              'javascript',
              'typescript',
              'python',
              'java',
              'ruby',
              'c',
              'cpp',
              'json',
              'yaml',
              'markdown',
              'bash'
            ],
          },
        },
        },
        prerender: {
          routes: ['/', '/blog', '/archive'],
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
