/**
 * Transform admonitions in HTML output
 * Converts :::type content ::: blocks into styled divs
 */

const SVG_ICONS: Record<string, string> = {
  tip: 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbDpub25lO3N0cm9rZTojMDgzMmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LmNscy0xe3N0cm9rZS13aWR0aDoycHg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT48L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LDEzLjFhOCw4LDAsMSwwLTEzLjYsNS43QTUuMDcsNS4wNywwLDAsMSwxMiwyMi40VjIzaDh2LS41M2E1LjIzLDUuMjMsMCwwLDEsMS42My0zLjY5QTgsOCwwLDAsMCwyNCwxMy4xWiI+PC9wYXRoPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjEyIiB4Mj0iMjAiIHkxPSIyNiIgeTI9IjI2Ij48L2xpbmU+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTMiIHgyPSIxOSIgeTE9IjI3IiB5Mj0iMjciPjwvbGluZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxNiIgeDI9IjE2IiB5MT0iMjgiIHkyPSIyNyI+PC9saW5lPjxwb2x5bGluZSBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTYgMTIuNDIgMTUgMTUuMjUgMTcgMTUuMjUgMTYgMTguMTciPjwvcG9seWxpbmU+PC9zdmc+',
  warning: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBzdHJva2U9IiM1MzUzNTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuMTIgNC42MjNhMSAxIDAgMDExLjc2IDBsMTEuMzIgMjAuOUExIDEgMCAwMTI3LjMyMSAyN0g0LjY3OWExIDEgMCAwMS0uODgtMS40NzZsMTEuMzIyLTIwLjl6TTE2IDE4di02Ii8+DQogIDxwYXRoIGZpbGw9IiM1MzUzNTgiIGQ9Ik0xNy41IDIyLjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6Ii8+DQo8L3N2Zz4=',
  danger: 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE3LjY2IDExLjJjLS4yMy0uMy0uNTEtLjU2LS43Ny0uODItLjY3LS42LTEuNDMtMS4wMy0yLjA3LTEuNjZDMTMuMzMgNy4yNiAxMyA0Ljg1IDEzLjk1IDNjLS45NS4yMy0xLjc4Ljc1LTIuNDkgMS4zMi0yLjU5IDIuMDgtMy42MSA1Ljc1LTIuMzkgOC45LjA0LjEuMDguMi4wOC4zMyAwIC4yMi0uMTUuNDItLjM1LjUtLjIzLjEtLjQ3LjA0LS42Ni0uMTJhLjU4LjU4IDAgMCAxLS4xNC0uMTdjLTEuMTMtMS40My0xLjMxLTMuNDgtLjU1LTUuMTJDNS43OCAxMCA0Ljg3IDEyLjMgNSAxNC40N2MuMDYuNS4xMiAxIC4yOSAxLjUuMTQuNi40MSAxLjIuNzEgMS43MyAxLjA4IDEuNzMgMi45NSAyLjk3IDQuOTYgMy4yMiAyLjE0LjI3IDQuNDMtLjEyIDYuMDctMS42IDEuODMtMS42NiAyLjQ3LTQuMzIgMS41My02LjZsLS4xMy0uMjZjLS4yMS0uNDYtLjc3LTEuMjYtLjc3LTEuMjZtLTMuMTYgNi4zYy0uMjguMjQtLjc0LjUtMS4xLjYtMS4xMi40LTIuMjQtLjE2LTIuOS0uODIgMS4xOS0uMjggMS45LTEuMTYgMi4xMS0yLjA1LjE3LS44LS4xNS0xLjQ2LS4yOC0yLjIzLS4xMi0uNzQtLjEtMS4zNy4xNy0yLjA2LjE5LjM4LjM5Ljc2LjYzIDEuMDYuNzcgMSAxLjk4IDEuNDQgMi4yNCAyLjguMDQuMTQuMDYuMjguMDYuNDMuMDMuODItLjMzIDEuNzItLjkzIDIuMjd6Ii8+PC9zdmc+',
  info: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE2MCIgd2lkdGg9IjE2MCIgdmVyc2lvbj0iMS4wIj4KIDxnIGZpbGw9IiM0YjRiNGIiPgogIDxwYXRoIGQ9Im04MCAxNWMtMzUuODggMC02NSAyOS4xMi02NSA2NXMyOS4xMiA2NSA2NSA2NSA2NS0yOS4xMiA2NS02NS0yOS4xMi02NS02NS02NXptMCAxMGMzMC4zNiAwIDU1IDI0LjY0IDU1IDU1cy0yNC42NCA1NS01NSA1NS01NS0yNC42NC01NS01NSAyNC42NC01NSA1NS01NXoiLz4KICA8cGF0aCBkPSJtNTcuMzczIDE4LjIzMWE5LjM4MzQgOS4xMTUzIDAgMSAxIC0xOC43NjcgMCA5LjM4MzQgOS4xMTUzIDAgMSAxIDE4Ljc2NyAweiIgdHJhbnNmb3JtPSJtYXRyaXgoMS4xOTg5IDAgMCAxLjIzNDIgMjEuMjE0IDI4Ljc1KSIvPgogIDxwYXRoIGQ9Im05MC42NjUgMTEwLjk2Yy0wLjA2OSAyLjczIDEuMjExIDMuNSA0LjMyNyAzLjgybDUuMDA4IDAuMXY1LjEyaC0zOS4wNzN2LTUuMTJsNS41MDMtMC4xYzMuMjkxLTAuMSA0LjA4Mi0xLjM4IDQuMzI3LTMuODJ2LTMwLjgxM2MwLjAzNS00Ljg3OS02LjI5Ni00LjExMy0xMC43NTctMy45Njh2LTUuMDc0bDMwLjY2NS0xLjEwNSIvPgogPC9nPgo8L3N2Zz4K',
  note: 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM4M2Q0MSIgZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMy4wMiAxNy4yNXptMTcuNzEtMTAuMjFjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6Ii8+PC9zdmc+',
  success: 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzBmNTEzMiIgZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxTDkgMTYuMTd6Ii8+PC9zdmc+',
  caution: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBzdHJva2U9IiM1MzUzNTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuMTIgNC42MjNhMSAxIDAgMDExLjc2IDBsMTEuMzIgMjAuOUExIDEgMCAwMTI3LjMyMSAyN0g0LjY3OWExIDEgMCAwMS0uODgtMS40NzZsMTEuMzIyLTIwLjl6TTE2IDE4di02Ii8+DQogIDxwYXRoIGZpbGw9IiM1MzUzNTgiIGQ9Ik0xNy41IDIyLjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6Ii8+DQo8L3N2Zz4=',
};

export function transformAdmonitions(html: string): string {
  // Pattern to match admonitions
  const admonitionPattern = /:::(\w+)(?:\[(.*?)\])?\s*\n([\s\S]*?)\n:::/g;

  return html.replace(admonitionPattern, (match, type, customTitle, content) => {
    type = type.toLowerCase();
    const validTypes = ['tip', 'warning', 'danger', 'info', 'note', 'collapse', 'success', 'caution'];

    if (!validTypes.includes(type)) {
      return match; // Return original if type is invalid
    }

    const defaultTitles: Record<string, string> = {
      tip: 'Tip',
      warning: 'Warning',
      danger: 'Danger',
      info: 'Info',
      note: 'Note',
      success: 'Success',
      caution: 'Caution',
      collapse: 'Details',
    };

    const title = customTitle || defaultTitles[type];
    const isCollapsible = type === 'collapse';
    const contentTrimmed = content.trim();
    const icon = SVG_ICONS[type] || '';

    if (isCollapsible) {
      return `<details class="admonition admonition--collapse">
        <summary class="admonition__title">
          <span class="admonition__icon"></span>
          ${title}
        </summary>
        <div class="admonition__content">
          ${contentTrimmed}
        </div>
      </details>`;
    }

    return `<div class="admonition admonition--${type}">
      <div class="admonition__title">
        <img class="admonition__icon" src="${icon}" alt="${type}" />
        ${title}
      </div>
      <div class="admonition__content">
        ${contentTrimmed}
      </div>
    </div>`;
  });
}

