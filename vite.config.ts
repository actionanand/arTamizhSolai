/// <reference types="vitest" />

import { defineConfig, Plugin } from 'vite';
import analog from '@analogjs/platform';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isGitHubPages = process.env['GITHUB_PAGES'] === 'true';
  const base = isGitHubPages ? '/artamizhsolai/' : '/';

  // Helper to get all blog post slugs
  function getAllBlogRoutes() {
    const routes = ['/', '/blog', '/archive'];
    try {
      const contentDir = join(process.cwd(), 'src/content');
      const files = readdirSync(contentDir).filter(f => f.endsWith('.md'));
      
      files.forEach(file => {
        const content = readFileSync(join(contentDir, file), 'utf-8');
        const slugMatch = content.match(/^slug:\s*(.+?)$/m);
        if (slugMatch) {
          const slug = slugMatch[1].trim();
          routes.push(`/blog/${slug}`);
        }
      });
    } catch (e) {
      console.warn('Could not read content files for prerender', e);
    }
    return routes;
  }

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
          routes: getAllBlogRoutes(),
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
