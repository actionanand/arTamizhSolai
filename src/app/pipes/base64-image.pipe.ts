import { Pipe, PipeTransform } from '@angular/core';
import { resolveBase64Image } from '../config/base64-images-registry';

/**
 * Pipe to transform base64 image syntax in markdown into img tags
 * 
 * Supported formats:
 * ::img[filename#CONSTANT_NAME]                          - Image only
 * ::img[filename#CONSTANT_NAME|alt text]                 - Image with alt text
 * ::img[filename#CONSTANT_NAME|alt text|width]           - Image with alt and width
 * ::img[filename#CONSTANT_NAME|alt text|width|center]    - Centered image
 * 
 * Examples:
 * ::img[base64-images#PLACEHOLDER_IMAGE]
 * ::img[base64-images#PLACEHOLDER_IMAGE|A beautiful house]
 * ::img[base64-images#PLACEHOLDER_IMAGE|A beautiful house|500px]
 * ::img[base64-images#PLACEHOLDER_IMAGE|A beautiful house|500px|center]
 */
@Pipe({
  name: 'base64Image',
  standalone: true
})
export class Base64ImagePipe implements PipeTransform {
  transform(content: string): string {
    if (!content) return '';

    // Store code blocks to prevent processing ::img inside them
    const codeBlocks: string[] = [];
    let processedContent = content;
    
    // Temporarily replace code blocks (``` or ` or <code>/<pre>) with placeholders
    processedContent = processedContent.replace(/```[\s\S]*?```/g, (match) => {
      const index = codeBlocks.length;
      codeBlocks.push(match);
      return `___CODE_BLOCK_${index}___`;
    });
    
    processedContent = processedContent.replace(/`[^`]+`/g, (match) => {
      const index = codeBlocks.length;
      codeBlocks.push(match);
      return `___CODE_BLOCK_${index}___`;
    });
    
    processedContent = processedContent.replace(/<code>[\s\S]*?<\/code>/gi, (match) => {
      const index = codeBlocks.length;
      codeBlocks.push(match);
      return `___CODE_BLOCK_${index}___`;
    });
    
    processedContent = processedContent.replace(/<pre>[\s\S]*?<\/pre>/gi, (match) => {
      const index = codeBlocks.length;
      codeBlocks.push(match);
      return `___CODE_BLOCK_${index}___`;
    });

    // Pattern: ::img[filename#CONSTANT_NAME|alt|width|align]
    const imgRegex = /::img\[([^\]]+)\]/g;
    
    processedContent = processedContent.replace(imgRegex, (match, params) => {
      const parts = params.split('|').map((p: string) => p.trim());
      const imageRef = parts[0];
      const altText = parts[1] || '';
      const width = parts[2] || '';
      const align = parts[3] || '';

      // Resolve the base64 image using centralized function
      const base64Src = resolveBase64Image(imageRef);
      
      if (!base64Src) {
        console.warn(`Base64 image "${imageRef}" not found`);
        return `<div class="base64-image-error">⚠️ Image not found: ${imageRef}</div>`;
      }

      // Build the img tag with optional styling
      const widthStyle = width ? `max-width: ${width};` : '';
      const alignClass = align === 'center' ? 'base64-image--center' : '';
      const containerClass = `base64-image ${alignClass}`.trim();
      const styleAttr = widthStyle ? ` style="${widthStyle}"` : '';

      return `<div class="${containerClass}">
  <img src="${base64Src}" alt="${this.escapeHtml(altText)}"${styleAttr} class="base64-image__img" />
  ${altText ? `<p class="base64-image__caption">${this.escapeHtml(altText)}</p>` : ''}
</div>`;
    });
    
    // Restore code blocks
    processedContent = processedContent.replace(/___CODE_BLOCK_(\d+)___/g, (match, index) => {
      return codeBlocks[parseInt(index)];
    });

    return processedContent;
  }

  /**
   * Escape HTML special characters
   */
  private escapeHtml(text: string): string {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }
}
