/// <reference types="vitest" />

import { defineConfig, Plugin } from 'vite';
import analog from '@analogjs/platform';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isGitHubPages = process.env['GITHUB_PAGES'] === 'true';
  const base = isGitHubPages ? '/artamizhsolai/' : '/';

  // Function to extract slug from markdown frontmatter
  const getBlogRoutes = () => {
    const contentDir = join(process.cwd(), 'src/content');
    const routes = ['/'];
    
    try {
      const files = readdirSync(contentDir).filter(file => file.endsWith('.md'));
      
      files.forEach(file => {
        const content = readFileSync(join(contentDir, file), 'utf-8');
        const slugMatch = content.match(/^slug:\s*(.+)$/m);
        
        if (slugMatch) {
          const slug = slugMatch[1].trim();
          routes.push(`/blog/${slug}`);
        }
      });
    } catch (error) {
      console.warn('Could not read content directory:', error);
    }
    
    return routes;
  };

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
          routes: async () => {
            // Automatically generate routes for all blog posts
            const blogRoutes = getBlogRoutes();
            return [
              ...blogRoutes,
              '/blog',
              '/archive',
            ];
          },
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
