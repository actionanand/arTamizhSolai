import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to transform custom text formatting syntax into styled HTML
 * 
 * Supported formats:
 * ::bg[color]{text}         - Background color
 * ::color[value]{text}      - Text color
 * ::weight[value]{text}     - Font weight (normal, bold, 100-900)
 * ::align[value]{text}      - Text alignment (left, center, right, justify)
 * ::bold{text}              - Bold text
 * ::italic{text}            - Italic text
 * ::strike{text}            - Strikethrough text
 * ::combo[attr1:val1;attr2:val2]{text} - Combine multiple styles
 */
@Pipe({
  name: 'textFormat',
  standalone: true
})
export class TextFormatPipe implements PipeTransform {
  transform(content: string): string {
    if (!content) return '';

    let processed = content;

    // Process combo format first (multiple attributes)
    processed = this.processComboFormat(processed);

    // Process individual formats
    processed = this.processBackgroundColor(processed);
    processed = this.processTextColor(processed);
    processed = this.processFontWeight(processed);
    processed = this.processAlignment(processed);
    processed = this.processBold(processed);
    processed = this.processItalic(processed);
    processed = this.processStrikethrough(processed);

    return processed;
  }

  /**
   * Process combo format: ::combo[bg:yellow;color:red;weight:bold]{text}
   */
  private processComboFormat(content: string): string {
    const regex = /::combo\[([^\]]+)\]\{([^}]+)\}/g;
    return content.replace(regex, (match, attributes, text) => {
      const styles = this.parseComboAttributes(attributes);
      const classes: string[] = [];
      const inlineStyles: string[] = [];

      if (styles['bg']) {
        inlineStyles.push(`background-color: ${this.sanitizeColor(styles['bg'])}`);
      }
      if (styles['color']) {
        inlineStyles.push(`color: ${this.sanitizeColor(styles['color'])}`);
      }
      if (styles['weight']) {
        inlineStyles.push(`font-weight: ${this.sanitizeWeight(styles['weight'])}`);
      }
      if (styles['align']) {
        classes.push(`text-align-${this.sanitizeAlign(styles['align'])}`);
      }
      if (styles['bold'] === 'true') {
        inlineStyles.push('font-weight: bold');
      }
      if (styles['italic'] === 'true') {
        inlineStyles.push('font-style: italic');
      }
      if (styles['strike'] === 'true') {
        inlineStyles.push('text-decoration: line-through');
      }

      const classAttr = classes.length > 0 ? ` class="${classes.join(' ')}"` : '';
      const styleAttr = inlineStyles.length > 0 ? ` style="${inlineStyles.join('; ')}"` : '';
      
      return `<span${classAttr}${styleAttr}>${text}</span>`;
    });
  }

  /**
   * Parse combo attributes like "bg:yellow;color:red;weight:bold"
   */
  private parseComboAttributes(attributes: string): Record<string, string> {
    const result: Record<string, string> = {};
    const pairs = attributes.split(';');
    
    for (const pair of pairs) {
      const [key, value] = pair.split(':').map(s => s.trim());
      if (key && value) {
        result[key] = value;
      }
    }
    
    return result;
  }

  /**
   * Process background color: ::bg[yellow]{text}
   */
  private processBackgroundColor(content: string): string {
    const regex = /::bg\[([^\]]+)\]\{([^}]+)\}/g;
    return content.replace(regex, (match, color, text) => {
      const sanitizedColor = this.sanitizeColor(color);
      return `<span style="background-color: ${sanitizedColor}">${text}</span>`;
    });
  }

  /**
   * Process text color: ::color[red]{text}
   */
  private processTextColor(content: string): string {
    const regex = /::color\[([^\]]+)\]\{([^}]+)\}/g;
    return content.replace(regex, (match, color, text) => {
      const sanitizedColor = this.sanitizeColor(color);
      return `<span style="color: ${sanitizedColor}">${text}</span>`;
    });
  }

  /**
   * Process font weight: ::weight[bold]{text} or ::weight[700]{text}
   */
  private processFontWeight(content: string): string {
    const regex = /::weight\[([^\]]+)\]\{([^}]+)\}/g;
    return content.replace(regex, (match, weight, text) => {
      const sanitizedWeight = this.sanitizeWeight(weight);
      return `<span style="font-weight: ${sanitizedWeight}">${text}</span>`;
    });
  }

  /**
   * Process text alignment: ::align[center]{text}
   */
  private processAlignment(content: string): string {
    const regex = /::align\[([^\]]+)\]\{([^}]+)\}/g;
    return content.replace(regex, (match, align, text) => {
      const sanitizedAlign = this.sanitizeAlign(align);
      return `<span class="text-align-${sanitizedAlign}">${text}</span>`;
    });
  }

  /**
   * Process bold: ::bold{text}
   */
  private processBold(content: string): string {
    const regex = /::bold\{([^}]+)\}/g;
    return content.replace(regex, '<span style="font-weight: bold">$1</span>');
  }

  /**
   * Process italic: ::italic{text}
   */
  private processItalic(content: string): string {
    const regex = /::italic\{([^}]+)\}/g;
    return content.replace(regex, '<span style="font-style: italic">$1</span>');
  }

  /**
   * Process strikethrough: ::strike{text}
   */
  private processStrikethrough(content: string): string {
    const regex = /::strike\{([^}]+)\}/g;
    return content.replace(regex, '<span style="text-decoration: line-through">$1</span>');
  }

  /**
   * Sanitize color input (allow named colors, hex, rgb, rgba)
   */
  private sanitizeColor(color: string): string {
    const trimmed = color.trim().toLowerCase();
    
    // Named colors
    const namedColors = [
      'black', 'white', 'red', 'green', 'blue', 'yellow', 'orange', 'purple',
      'pink', 'brown', 'gray', 'grey', 'cyan', 'magenta', 'lime', 'navy',
      'teal', 'olive', 'maroon', 'aqua', 'fuchsia', 'silver', 'darkred',
      'darkgreen', 'darkblue', 'lightgray', 'lightblue', 'lightgreen',
      'lightyellow', 'transparent'
    ];
    
    if (namedColors.includes(trimmed)) {
      return trimmed;
    }
    
    // Hex colors (#FFF or #FFFFFF)
    if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(trimmed)) {
      return trimmed;
    }
    
    // RGB/RGBA
    if (/^rgba?\([^)]+\)$/i.test(trimmed)) {
      return trimmed;
    }
    
    // Default to black if invalid
    return 'inherit';
  }

  /**
   * Sanitize font weight
   */
  private sanitizeWeight(weight: string): string {
    const trimmed = weight.trim().toLowerCase();
    
    // Named weights
    if (['normal', 'bold', 'bolder', 'lighter'].includes(trimmed)) {
      return trimmed;
    }
    
    // Numeric weights (100-900)
    const numeric = parseInt(trimmed, 10);
    if (!isNaN(numeric) && numeric >= 100 && numeric <= 900 && numeric % 100 === 0) {
      return numeric.toString();
    }
    
    return 'normal';
  }

  /**
   * Sanitize alignment value
   */
  private sanitizeAlign(align: string): string {
    const trimmed = align.trim().toLowerCase();
    const validAligns = ['left', 'center', 'right', 'justify'];
    
    if (validAligns.includes(trimmed)) {
      return trimmed;
    }
    
    return 'left';
  }
}
