import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to transform custom tabs syntax into interactive tabbed content
 * Similar to Docusaurus tabs functionality
 * 
 * Supported formats:
 * :::tabs
 * ::tab[Tab Title 1]{Content for tab 1}
 * ::tab[Tab Title 2]{Content for tab 2}
 * ::tab[Tab Title 3]{Content for tab 3}
 * :::
 * 
 * Features:
 * - Multiple tabs in a single container
 * - Active tab highlighting
 * - Smooth transitions
 * - Mobile responsive
 * - Keyboard accessible
 */
@Pipe({
  name: 'tabs',
  standalone: true
})
export class TabsPipe implements PipeTransform {
  private tabGroupCounter = 0;

  transform(content: string): string {
    if (!content) return '';

    let processed = content;

    // Process tab groups
    processed = this.processTabGroups(processed);

    return processed;
  }

  /**
   * Process tab groups: :::tabs ... :::
   */
  private processTabGroups(content: string): string {
    // Match tab groups with :::tabs ... :::
    const tabGroupRegex = /:::tabs\s*([\s\S]*?):::/g;
    
    return content.replace(tabGroupRegex, (match, tabsContent) => {
      const groupId = `tab-group-${++this.tabGroupCounter}`;
      const tabs = this.extractTabs(tabsContent);
      
      if (tabs.length === 0) {
        return match; // Return original if no valid tabs found
      }

      return this.renderTabGroup(groupId, tabs);
    });
  }

  /**
   * Extract individual tabs from tabs content
   */
  private extractTabs(content: string): Array<{ title: string; content: string }> {
    const tabs: Array<{ title: string; content: string }> = [];
    const tabRegex = /::tab\[([^\]]+)\]\{([^}]+)\}/g;
    
    let match;
    while ((match = tabRegex.exec(content)) !== null) {
      tabs.push({
        title: match[1].trim(),
        content: match[2].trim()
      });
    }

    return tabs;
  }

  /**
   * Render complete tab group with headers and panels
   */
  private renderTabGroup(groupId: string, tabs: Array<{ title: string; content: string }>): string {
    const tabHeaders = tabs.map((tab, index) => {
      const tabId = `${groupId}-tab-${index}`;
      const panelId = `${groupId}-panel-${index}`;
      const isActive = index === 0 ? 'tabs__tab--active' : '';
      
      return `<button 
        class="tabs__tab ${isActive}" 
        id="${tabId}" 
        role="tab" 
        aria-selected="${index === 0}" 
        aria-controls="${panelId}"
        onclick="window.switchTab(event, '${groupId}', ${index})">
        ${this.escapeHtml(tab.title)}
      </button>`;
    }).join('\n        ');

    const tabPanels = tabs.map((tab, index) => {
      const panelId = `${groupId}-panel-${index}`;
      const tabId = `${groupId}-tab-${index}`;
      const isActive = index === 0 ? 'tabs__panel--active' : '';
      
      return `<div 
        class="tabs__panel ${isActive}" 
        id="${panelId}" 
        role="tabpanel" 
        aria-labelledby="${tabId}">
        ${tab.content}
      </div>`;
    }).join('\n      ');

    return `<div class="tabs" id="${groupId}" role="tablist">
      <div class="tabs__header">
        ${tabHeaders}
      </div>
      <div class="tabs__content">
      ${tabPanels}
      </div>
    </div>`;
  }

  /**
   * Escape HTML special characters
   */
  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}
