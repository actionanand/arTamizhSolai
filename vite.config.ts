/// <reference types="vitest" />

import { defineConfig, Plugin } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isGitHubPages = process.env['GITHUB_PAGES'] === 'true';
  const base = isGitHubPages ? '/artamizhsolai/' : '/';

  // Plugin to update <base href> in index.html and inject base path helper
  const htmlBasePlugin = (): Plugin => ({
    name: 'html-base-transform',
    transformIndexHtml(html) {
      const updatedHtml = html.replace(
        /<base href="[^"]*" \/>/,
        `<base href="${base}" />`
      );
      
      // Inject base path helper script for dynamic imports
      const baseScript = `
    <script>
      window.__prependBase = function(url) {
        const base = document.querySelector('base')?.getAttribute('href') || '/';
        if (url.startsWith('/')) return url;
        return base + url;
      };
    </script>`;
      
      return updatedHtml.replace('</head>', baseScript + '\n  </head>');
    },
  });

  return {
    base,
    build: {
      target: ['es2020'],
      rollupOptions: {
        output: {
          // Ensure dynamic imports use the correct base path
          manualChunks: undefined,
        },
      },
    },
    resolve: {
      mainFields: ['module'],
    },
    experimental: {
      // Ensure base path is applied to dynamic imports
      renderBuiltUrl(filename, { hostType }) {
        if (hostType === 'js') {
          return { runtime: `window.__prependBase(${JSON.stringify(filename)})` };
        }
        return { relative: true };
      },
    },
    plugins: [
      analog({
        content: {
          highlighter: 'shiki',
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
