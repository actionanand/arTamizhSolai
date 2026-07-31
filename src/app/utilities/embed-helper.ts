/**
 * Media embed runtime helpers (browser only).
 *
 * - Exposes `window.arOpenPip(button)` for the floating Picture-in-Picture
 *   mini-player used by embed action buttons.
 * - Loads Instagram's `embed.js` once and (re)processes `.instagram-media`
 *   blockquotes whenever embeds are added to the page (markdown renders and the
 *   frontmatter `embeds` section are both injected dynamically).
 *
 * Imported once from `main.ts`, mirroring `tabs-helper.ts`.
 */

const INSTAGRAM_SCRIPT = 'https://www.instagram.com/embed.js';
let instagramRequested = false;

function processInstagram(): void {
  const instgrm = (window as any).instgrm;
  if (instgrm?.Embeds?.process) {
    instgrm.Embeds.process();
  }
}

/** Ensure Instagram's embed script is loaded, then process any blockquotes. */
function ensureInstagram(): void {
  if (!document.querySelector('.instagram-media')) return;

  if ((window as any).instgrm) {
    processInstagram();
    return;
  }

  if (instagramRequested) return;
  instagramRequested = true;

  const script = document.createElement('script');
  script.src = INSTAGRAM_SCRIPT;
  script.async = true;
  script.onload = processInstagram;
  document.body.appendChild(script);
}

/** Open a draggable, closable floating mini-player for the given action button. */
function openPip(button: HTMLElement): void {
  const src = button.getAttribute('data-pip-src');
  if (!src) return;

  // Only one mini-player at a time.
  document.getElementById('ar-pip-player')?.remove();

  const vertical = button.getAttribute('data-pip-vertical') === 'true';
  const title = button.getAttribute('data-pip-title') || 'Now playing';
  const width = vertical ? 300 : 400;
  const height = vertical ? 534 : 225;

  const box = document.createElement('div');
  box.id = 'ar-pip-player';
  box.className = 'embed-pip';
  box.style.width = `${width}px`;
  box.innerHTML = `
    <div class="embed-pip__bar" data-pip-drag>
      <span class="embed-pip__title">${title.replace(/[<>&"]/g, '')}</span>
      <button type="button" class="embed-pip__close" aria-label="Close mini player" data-pip-close>&times;</button>
    </div>
    <div class="embed-pip__body" style="height:${height}px;">
      <iframe src="${src.replace(/"/g, '&quot;')}" title="${title.replace(/[<>&"]/g, '')}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
      <div class="embed-pip__shield" hidden></div>
    </div>
    <div class="embed-pip__grip" data-pip-resize title="Drag to resize"></div>`;
  document.body.appendChild(box);

  box.querySelector('[data-pip-close]')?.addEventListener('click', () => box.remove());

  const shield = box.querySelector<HTMLElement>('.embed-pip__shield');
  const bodyEl = box.querySelector<HTMLElement>('.embed-pip__body');

  // Dragging the title bar repositions the player.
  const bar = box.querySelector<HTMLElement>('[data-pip-drag]');
  bar?.addEventListener('mousedown', (e) => {
    const start = { x: e.clientX, y: e.clientY };
    const rect = box.getBoundingClientRect();
    box.style.right = 'auto';
    box.style.bottom = 'auto';
    box.style.left = `${rect.left}px`;
    box.style.top = `${rect.top}px`;
    if (shield) shield.hidden = false;

    const move = (ev: MouseEvent) => {
      box.style.left = `${rect.left + (ev.clientX - start.x)}px`;
      box.style.top = `${rect.top + (ev.clientY - start.y)}px`;
    };
    const up = () => {
      if (shield) shield.hidden = true;
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  });

  // Bottom-right grip resizes the player.
  const grip = box.querySelector<HTMLElement>('[data-pip-resize]');
  grip?.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const start = { x: e.clientX, y: e.clientY };
    const origW = box.offsetWidth;
    const origH = bodyEl?.offsetHeight ?? height;
    if (shield) shield.hidden = false;

    const move = (ev: MouseEvent) => {
      const w = Math.max(220, Math.min(window.innerWidth - 24, origW + (ev.clientX - start.x)));
      const h = Math.max(140, Math.min(window.innerHeight - 24, origH + (ev.clientY - start.y)));
      box.style.width = `${w}px`;
      if (bodyEl) bodyEl.style.height = `${h}px`;
    };
    const up = () => {
      if (shield) shield.hidden = true;
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  });
}

export function initializeEmbeds(): void {
  (window as any).arOpenPip = openPip;

  ensureInstagram();

  // Embeds are injected asynchronously (markdown render + frontmatter section),
  // so watch for new `.instagram-media` nodes and process them, debounced.
  let pending = 0;
  const observer = new MutationObserver((mutations) => {
    const added = mutations.some((m) =>
      Array.from(m.addedNodes).some(
        (n) =>
          n.nodeType === 1 &&
          ((n as Element).matches?.('.instagram-media') || (n as Element).querySelector?.('.instagram-media')),
      ),
    );
    if (!added) return;
    window.clearTimeout(pending);
    pending = window.setTimeout(ensureInstagram, 300);
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEmbeds);
  } else {
    initializeEmbeds();
  }
}
