import { Pipe, PipeTransform } from '@angular/core';
import { transformAdmonitions } from '../utilities/marked-admonition-plugin';

@Pipe({
  name: 'admonitionTransform',
  standalone: true
})
export class AdmonitionTransformPipe implements PipeTransform {
  transform(content: string | object | undefined): string {
    if (!content) {
      return '';
    }
    
    if (typeof content === 'string') {
      return transformAdmonitions(content);
    }
    
    // If content is an object, return as-is (analog might handle it)
    return '';
  }
}
