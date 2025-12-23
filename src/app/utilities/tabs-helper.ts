/**
 * Tabs Utility - Handle tab switching functionality
 * This should be loaded globally for tab interactions
 */

/**
 * Switch active tab in a tab group
 * @param event - Click event
 * @param groupId - ID of the tab group
 * @param tabIndex - Index of the tab to activate
 */
export function switchTab(event: Event, groupId: string, tabIndex: number): void {
  event.preventDefault();
  
  const tabGroup = document.getElementById(groupId);
  if (!tabGroup) return;

  // Get all tabs and panels in this group
  const tabs = tabGroup.querySelectorAll('.tabs__tab');
  const panels = tabGroup.querySelectorAll('.tabs__panel');

  // Deactivate all tabs and panels
  tabs.forEach(tab => {
    tab.classList.remove('tabs__tab--active');
    tab.setAttribute('aria-selected', 'false');
  });
  
  panels.forEach(panel => {
    panel.classList.remove('tabs__panel--active');
  });

  // Activate selected tab and panel
  if (tabs[tabIndex] && panels[tabIndex]) {
    tabs[tabIndex].classList.add('tabs__tab--active');
    tabs[tabIndex].setAttribute('aria-selected', 'true');
    panels[tabIndex].classList.add('tabs__panel--active');
  }
}

/**
 * Initialize tabs with keyboard navigation support
 */
export function initializeTabs(): void {
  // Make switchTab available globally for onclick handlers
  (window as any).switchTab = switchTab;

  // Add keyboard navigation
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    
    if (!target.classList.contains('tabs__tab')) return;

    const tabGroup = target.closest('.tabs');
    if (!tabGroup) return;

    const tabs = Array.from(tabGroup.querySelectorAll('.tabs__tab'));
    const currentIndex = tabs.indexOf(target);

    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    if (newIndex !== currentIndex && tabs[newIndex]) {
      (tabs[newIndex] as HTMLElement).click();
      (tabs[newIndex] as HTMLElement).focus();
    }
  });
}

// Auto-initialize on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTabs);
  } else {
    initializeTabs();
  }
}
