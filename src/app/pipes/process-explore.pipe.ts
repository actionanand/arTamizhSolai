import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'processExplore',
  standalone: true,
})
export class ProcessExplorePipe implements PipeTransform {
  transform(content: string): string {
    if (!content) return '';
    
    let processed = content;
    let exploreItems: string[] = [];

    // Look for explore block: :::explore ... ::: 
    const exploreBlockRegex = /:::explore\s*\n([\s\S]*?)\n:::/g;
    const exploreBlockMatch = exploreBlockRegex.exec(content);
    
    if (exploreBlockMatch) {
      // Extract items from the block - handle both [>] and [&gt;] (HTML encoded)
      const exploreBlock = exploreBlockMatch[1];
      exploreItems = exploreBlock
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0 && /^\[(&gt;|>)\]\s/.test(line));

      // Remove the entire explore block from content
      processed = content.replace(exploreBlockRegex, '').trim();
    }

    // Add explore section at the end if items were found
    if (exploreItems.length > 0) {
      let section = '\n\n<section class="blog-post__explore">\n';
      section += '<div class="explore-header">\n';
      section += '<span class="explore-icon">🔍</span>\n';
      section += '<span class="explore-title">Explore Further</span>\n';
      section += '</div>\n';
      section += '<ol class="explore-list">\n';

      exploreItems.forEach(item => {
        // Remove leading [>] or [&gt;] and space
        const itemContent = item.replace(/^\[(&gt;|>)\]\s/, '').trim();
        
        // Content is already processed as HTML, so use it directly
        section += `<li>${itemContent}</li>\n`;
      });

      section += '</ol>\n</section>\n';
      processed += section;
    }

    return processed;
  }

  private parseMarkdownLinks(text: string): string {
    // Match [text](url) pattern and convert to HTML links
    return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, linkText, url) => {
      // Ensure URL has protocol for external links
      let href = url;
      if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('/')) {
        href = `https://${url}`;
      }
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
    });
  }
}