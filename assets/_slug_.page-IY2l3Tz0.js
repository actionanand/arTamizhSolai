import{ɵ as H,C as R,N as K,R as G,g as d,l as _,a,b as c,c as s,h as S,n as l,k as i,m as D,o as tt,p as nt,t as x,B as et,v as N,w as ot,x as it,u as O,r as h,e as C,D as $,E as st,F as at,i as rt,f as F,P as ct,G as lt,H as gt,I as dt,J as z,K as k,L as _t,M as ut,O as mt,z as U,q as pt,d as Mt,Q as ft,j as ht}from"./index-uvPfDKze.js";import{p as xt}from"./pagination-config-BIRU8DJ8.js";function bt(n){const e=[],t=/<h([1-4])[^>]*?(?:id=\"([^\"]*)\")?[^>]*>([\s\S]*?)<\/h\1>/gi;let o;for(;(o=t.exec(n))!==null;){const r=parseInt(o[1],10),g=o[2]||Ct(W(o[3])),m=It(W(o[3]).trim());e.push({level:r,text:m,id:g})}return e}function W(n){return n.replace(/<[^>]*>/g,"")}function Ct(n){return n.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function It(n){return n.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'")}const Pt=()=>[],Lt=(n,e)=>e.id;function yt(n,e){if(n&1){const t=tt();a(0,"li",4)(1,"a",5),nt("click",function(){const r=ot(t).$implicit,g=l(2);return it(g.scrollToElement(r.id))}),c(2),s()()}if(n&2){const t=e.$implicit;x("ngClass","toc__item--level-"+t.level),i(),x("routerLink",et(4,Pt))("fragment",t.id),i(),N(" ",t.text," ")}}function vt(n,e){if(n&1&&(a(0,"aside",0)(1,"nav",1)(2,"h3",2),c(3,"Table of Contents"),s(),a(4,"ul",3),S(5,yt,3,5,"li",4,Lt),s()()()),n&2){const t=l();i(5),D(t.headings)}}const P=class P{constructor(){this.headings=[]}scrollToElement(e){setTimeout(()=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})},0)}};P.ɵfac=function(t){return new(t||P)},P.ɵcmp=H({type:P,selectors:[["app-table-of-contents"]],inputs:{headings:"headings"},decls:1,vars:1,consts:[[1,"toc"],[1,"toc__nav"],[1,"toc__title"],[1,"toc__list"],[1,"toc__item",3,"ngClass"],[1,"toc__link",3,"click","routerLink","fragment"]],template:function(t,o){t&1&&d(0,vt,7,0,"aside",0),t&2&&_(o.headings.length>0?0:-1)},dependencies:[R,K,G],styles:[`.toc[_ngcontent-%COMP%] {
      position: sticky;
      top: 100px;
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 1rem;
      width: fit-content;
      min-width: 180px;
      max-width: 250px;
      max-height: 70vh;
      overflow-y: auto;
    }

    .toc__nav[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
    }

    .toc__title[_ngcontent-%COMP%] {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 1rem 0;
      color: #212529;
    }

    .toc__list[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .toc__item[_ngcontent-%COMP%] {
      margin: 0.5rem 0;
    }

    .toc__item--level-2[_ngcontent-%COMP%] {
      margin-left: 0;
    }

    .toc__item--level-3[_ngcontent-%COMP%] {
      margin-left: 1.5rem;
    }

    .toc__item--level-4[_ngcontent-%COMP%] {
      margin-left: 3rem;
    }

    .toc__link[_ngcontent-%COMP%] {
      color: #495057;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s ease;
      display: block;
      padding: 0.25rem 0;
    }

    .toc__link[_ngcontent-%COMP%]:hover {
      color: #0d6efd;
    }

    @media (max-width: 1024px) {
      .toc[_ngcontent-%COMP%] {
        display: none;
      }
    }`]});let A=P;const Q=n=>["/blog",n];function wt(n,e){if(n&1&&(a(0,"a",1)(1,"span",4),c(2,"← Previous"),s(),a(3,"span",5),c(4),s()()),n&2){const t=l();x("routerLink",O(2,Q,t.previousPost.attributes.slug)),i(4),h(t.previousPost.attributes.title)}}function jt(n,e){n&1&&C(0,"div",2)}function Tt(n,e){if(n&1&&(a(0,"a",3)(1,"span",4),c(2,"Next →"),s(),a(3,"span",5),c(4),s()()),n&2){const t=l();x("routerLink",O(2,Q,t.nextPost.attributes.slug)),i(4),h(t.nextPost.attributes.title)}}function Nt(n,e){n&1&&C(0,"div",2)}const L=class L{constructor(){this.previousPost=null,this.nextPost=null}};L.ɵfac=function(t){return new(t||L)},L.ɵcmp=H({type:L,selectors:[["app-post-navigation"]],inputs:{previousPost:"previousPost",nextPost:"nextPost"},decls:5,vars:2,consts:[[1,"post-nav"],[1,"post-nav__link","post-nav__link--prev",3,"routerLink"],[1,"post-nav__placeholder"],[1,"post-nav__link","post-nav__link--next",3,"routerLink"],[1,"post-nav__label"],[1,"post-nav__title"]],template:function(t,o){t&1&&(a(0,"nav",0),d(1,wt,5,4,"a",1)(2,jt,1,0,"div",2),d(3,Tt,5,4,"a",3)(4,Nt,1,0,"div",2),s()),t&2&&(i(),_(o.previousPost?1:2),i(2),_(o.nextPost?3:4))},dependencies:[G,R],styles:[`.post-nav[_ngcontent-%COMP%] {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin: 4rem 0 2rem 0;
      padding-top: 2rem;
      border-top: 1px solid #dee2e6;
    }

    .post-nav__link[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.5rem;
      background: linear-gradient(135deg, #f0f5ff 0%, #ffffff 100%);
      border: 1px solid #dee2e6;
      border-radius: 8px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .post-nav__link[_ngcontent-%COMP%]:hover {
      border-color: #0d6efd;
      background: linear-gradient(135deg, #e7f0ff 0%, #f0f5ff 100%);
      box-shadow: 0 6px 16px rgba(13, 110, 253, 0.2);
      transform: translateY(-2px);
    }

    .post-nav__link--prev[_ngcontent-%COMP%] {
      text-align: left;
    }

    .post-nav__link--next[_ngcontent-%COMP%] {
      text-align: right;
    }

    .post-nav__label[_ngcontent-%COMP%] {
      font-size: 0.8rem;
      color: #6c757d;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .post-nav__title[_ngcontent-%COMP%] {
      font-weight: 700;
      color: #0d6efd;
      line-height: 1.4;
      font-size: 1.1rem;
    }

    .post-nav__placeholder[_ngcontent-%COMP%] {
      opacity: 0;
    }

    @media (max-width: 640px) {
      .post-nav[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .post-nav__link--next[_ngcontent-%COMP%] {
        text-align: left;
      }
    }`]});let E=L;const St={tip:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbDpub25lO3N0cm9rZTojMDgzMmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LmNscy0xe3N0cm9rZS13aWR0aDoycHg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT48L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LDEzLjFhOCw4LDAsMSwwLTEzLjYsNS43QTUuMDcsNS4wNywwLDAsMSwxMiwyMi40VjIzaDh2LS41M2E1LjIzLDUuMjMsMCwwLDEsMS42My0zLjY5QTgsOCwwLDAsMCwyNCwxMy4xWiI+PC9wYXRoPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjEyIiB4Mj0iMjAiIHkxPSIyNiIgeTI9IjI2Ij48L2xpbmU+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTMiIHgyPSIxOSIgeTE9IjI3IiB5Mj0iMjciPjwvbGluZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxNiIgeDI9IjE2IiB5MT0iMjgiIHkyPSIyNyI+PC9saW5lPjxwb2x5bGluZSBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTYgMTIuNDIgMTUgMTUuMjUgMTcgMTUuMjUgMTYgMTguMTciPjwvcG9seWxpbmU+PC9zdmc+",warning:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBzdHJva2U9IiM1MzUzNTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuMTIgNC42MjNhMSAxIDAgMDExLjc2IDBsMTEuMzIgMjAuOUExIDEgMCAwMTI3LjMyMSAyN0g0LjY3OWExIDEgMCAwMS0uODgtMS40NzZsMTEuMzIyLTIwLjl6TTE2IDE4di02Ii8+DQogIDxwYXRoIGZpbGw9IiM1MzUzNTgiIGQ9Ik0xNy41IDIyLjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6Ii8+DQo8L3N2Zz4=",danger:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE3LjY2IDExLjJjLS4yMy0uMy0uNTEtLjU2LS43Ny0uODItLjY3LS42LTEuNDMtMS4wMy0yLjA3LTEuNjZDMTMuMzMgNy4yNiAxMyA0Ljg1IDEzLjk1IDNjLS45NS4yMy0xLjc4Ljc1LTIuNDkgMS4zMi0yLjU5IDIuMDgtMy42MSA1Ljc1LTIuMzkgOC45LjA0LjEuMDguMi4wOC4zMyAwIC4yMi0uMTUuNDItLjM1LjUtLjIzLjEtLjQ3LjA0LS42Ni0uMTJhLjU4LjU4IDAgMCAxLS4xNC0uMTdjLTEuMTMtMS40My0xLjMxLTMuNDgtLjU1LTUuMTJDNS43OCAxMCA0Ljg3IDEyLjMgNSAxNC40N2MuMDYuNS4xMiAxIC4yOSAxLjUuMTQuNi40MSAxLjIuNzEgMS43MyAxLjA4IDEuNzMgMi45NSAyLjk3IDQuOTYgMy4yMiAyLjE0LjI3IDQuNDMtLjEyIDYuMDctMS42IDEuODMtMS42NiAyLjQ3LTQuMzIgMS41My02LjZsLS4xMy0uMjZjLS4yMS0uNDYtLjc3LTEuMjYtLjc3LTEuMjZtLTMuMTYgNi4zYy0uMjguMjQtLjc0LjUtMS4xLjYtMS4xMi40LTIuMjQtLjE2LTIuOS0uODIgMS4xOS0uMjggMS45LTEuMTYgMi4xMS0yLjA1LjE3LS44LS4xNS0xLjQ2LS4yOC0yLjIzLS4xMi0uNzQtLjEtMS4zNy4xNy0yLjA2LjE5LjM4LjM5Ljc2LjYzIDEuMDYuNzcgMSAxLjk4IDEuNDQgMi4yNCAyLjguMDQuMTQuMDYuMjguMDYuNDMuMDMuODItLjMzIDEuNzItLjkzIDIuMjd6Ii8+PC9zdmc+",info:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE2MCIgd2lkdGg9IjE2MCIgdmVyc2lvbj0iMS4wIj4KIDxnIGZpbGw9IiM0YjRiNGIiPgogIDxwYXRoIGQ9Im04MCAxNWMtMzUuODggMC02NSAyOS4xMi02NSA2NXMyOS4xMiA2NSA2NSA2NSA2NS0yOS4xMiA2NS02NS0yOS4xMi02NS02NS02NXptMCAxMGMzMC4zNiAwIDU1IDI0LjY0IDU1IDU1cy0yNC42NCA1NS01NSA1NS01NS0yNC42NC01NS01NSAyNC42NC01NSA1NS01NXoiLz4KICA8cGF0aCBkPSJtNTcuMzczIDE4LjIzMWE5LjM4MzQgOS4xMTUzIDAgMSAxIC0xOC43NjcgMCA5LjM4MzQgOS4xMTUzIDAgMSAxIDE4Ljc2NyAweiIgdHJhbnNmb3JtPSJtYXRyaXgoMS4xOTg5IDAgMCAxLjIzNDIgMjEuMjE0IDI4Ljc1KSIvPgogIDxwYXRoIGQ9Im05MC42NjUgMTEwLjk2Yy0wLjA2OSAyLjczIDEuMjExIDMuNSA0LjMyNyAzLjgybDUuMDA4IDAuMXY1LjEyaC0zOS4wNzN2LTUuMTJsNS41MDMtMC4xYzMuMjkxLTAuMSA0LjA4Mi0xLjM4IDQuMzI3LTMuODJ2LTMwLjgxM2MwLjAzNS00Ljg3OS02LjI5Ni00LjExMy0xMC43NTctMy45Njh2LTUuMDc0bDMwLjY2NS0xLjEwNSIvPgogPC9nPgo8L3N2Zz4K",note:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM4M2Q0MSIgZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMy4wMiAxNy4yNXptMTcuNzEtMTAuMjFjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6Ii8+PC9zdmc+",success:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzBmNTEzMiIgZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxTDkgMTYuMTd6Ii8+PC9zdmc+",caution:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBzdHJva2U9IiM1MzUzNTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuMTIgNC42MjNhMSAxIDAgMDExLjc2IDBsMTEuMzIgMjAuOUExIDEgMCAwMTI3LjMyMSAyN0g0LjY3OWExIDEgMCAwMS0uODgtMS40NzZsMTEuMzIyLTIwLjl6TTE2IDE4di02Ii8+DQogIDxwYXRoIGZpbGw9IiM1MzUzNTgiIGQ9Ik0xNy41IDIyLjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6Ii8+DQo8L3N2Zz4="};function Dt(n){const e=/:::(\w+)(?:\[(.*?)\])?\s*\n([\s\S]*?)\n:::/g;return n.replace(e,(t,o,r,g)=>{if(o=o.toLowerCase(),!["tip","warning","danger","info","note","collapse","success","caution"].includes(o))return t;const b=r||{tip:"Tip",warning:"Warning",danger:"Danger",info:"Info",note:"Note",success:"Success",caution:"Caution",collapse:"Details"}[o],j=o==="collapse",u=g.trim(),p=St[o]||"";return j?`<details class="admonition admonition--collapse">
<summary class="admonition__title">
<span class="admonition__icon"></span>
${b}
</summary>
<div class="admonition__content">

${u}

</div>
</details>`:`<div class="admonition admonition--${o}">
<div class="admonition__title">
<img class="admonition__icon" src="${p}" alt="${o}" />
${b}
</div>
<div class="admonition__content">

${u}

</div>
</div>`})}const y=class y{transform(e){return e&&typeof e=="string"?Dt(e):""}};y.ɵfac=function(t){return new(t||y)},y.ɵpipe=$({name:"admonitionTransform",type:y,pure:!0});let B=y;const v=class v{transform(e){if(!e)return"";const t=new Map;let o=e;const r=/:::footnotes\s*\n([\s\S]*?)\n:::/g,g=r.exec(e);if(g){const u=g[1],p=/^\[\^([^\]]+)\]:\s*(.+)$/gm;let M;for(;(M=p.exec(u))!==null;){const f=M[1].trim(),T=M[2].trim();f&&t.set(f,T)}o=e.replace(r,"").trim()}else{const p=/\n\n(\[\^[^\]]+\]:.+\n?)+$/.exec(e);if(p){const M=p[0],f=/^\[\^([^\]]+)\]:\s*(.+)$/gm;let T;for(;(T=f.exec(M))!==null;){const Y=T[1].trim(),q=T[2].trim();Y&&t.set(Y,q)}o=e.substring(0,e.length-M.length).trim()}}const m=new Map,I=new Map;let b=0;const j=/\[\^([^\]]+)\]/g;if(o.replace(j,(u,p)=>{const M=String(p).trim();return m.has(M)||(b+=1,m.set(M,b),I.set(b,M)),""}),o=o.replace(j,(u,p)=>{const M=String(p).trim(),f=m.get(M);return f?`<sup><a data-fn="fn-${f}" id="fnref-${f}" class="footnote-ref" role="button" tabindex="0">[${f}]</a></sup>`:u}),m.size>0){let u=`

<section class="blog-post__footnotes">
`;u+=`<div class="footnotes-header">
`,u+=`<span class="footnotes-icon">📝</span>
`,u+=`<span class="footnotes-title">Footnotes</span>
`,u+=`</div>
`,u+=`<ol>
`;for(let p=1;p<=m.size;p++){const M=I.get(p);let f=t.get(M)||"";f=this.parseMarkdownLinks(f),u+=`<li id="fn-${p}"><p>${f} <a data-fn="fnref-${p}" class="footnote-backref" role="button" tabindex="0" title="Back to reference">↩</a></p></li>
`}u+=`</ol>
</section>
`,o+=u}return o}parseMarkdownLinks(e){return e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(t,o,r)=>{let g=r;return!r.startsWith("http://")&&!r.startsWith("https://")&&!r.startsWith("/")&&(g=`https://${r}`),`<a href="${g}" target="_blank" rel="noopener noreferrer">${o}</a>`})}};v.ɵfac=function(t){return new(t||v)},v.ɵpipe=$({name:"processFootnotes",type:v,pure:!0});let Z=v;const Ot=["contentRef"],J=n=>["/blog",n],X=(n,e)=>e.attributes.slug;function zt(n,e){if(n&1&&(a(0,"p",4),c(1),s()),n&2){const t=l();i(),h(t.attributes.date)}}function kt(n,e){n&1&&(a(0,"span",6),c(1,"📝 Draft"),s())}function At(n,e){n&1&&(a(0,"span",7),c(1,"📌 Pinned"),s())}function Et(n,e){if(n&1&&(a(0,"span",21),c(1),s()),n&2){const t=e.$implicit;i(),h(t)}}function Bt(n,e){if(n&1&&S(0,Et,2,1,"span",21,ht),n&2){const t=l();D(t.attributes.tags)}}function Zt(n,e){if(n&1&&(a(0,"div",22)(1,"strong"),c(2,"Author:"),s(),c(3),s()),n&2){const t=l(2);i(3),N(" ",t.attributes.author," ")}}function Ht(n,e){if(n&1&&(a(0,"div",22)(1,"strong"),c(2,"Epic:"),s(),c(3),s()),n&2){const t=l(2);i(3),N(" ",t.attributes.epicName," ")}}function Rt(n,e){if(n&1&&(a(0,"div",22)(1,"strong"),c(2,"Verse Number:"),s(),c(3),s()),n&2){const t=l(2);i(3),N(" ",t.attributes.verseNumber," ")}}function Gt(n,e){if(n&1&&(a(0,"div",22)(1,"strong"),c(2,"Info:"),s(),c(3),s()),n&2){const t=l(2);i(3),N(" ",t.attributes.articleMetadata," ")}}function Ut(n,e){if(n&1&&(a(0,"div",9),d(1,Zt,4,1,"div",22),d(2,Ht,4,1,"div",22),d(3,Rt,4,1,"div",22),d(4,Gt,4,1,"div",22),s()),n&2){const t=l();i(),_(t.attributes.author?1:-1),i(),_(t.attributes.epicName?2:-1),i(),_(t.attributes.verseNumber?3:-1),i(),_(t.attributes.articleMetadata?4:-1)}}function Yt(n,e){if(n&1&&C(0,"app-table-of-contents",13),n&2){const t=l(2);x("headings",t.headings)}}function Ft(n,e){if(n&1&&(C(0,"analog-markdown",15),z(1,"processFootnotes"),z(2,"admonitionTransform")),n&2){const t=l();x("content",k(2,3,k(1,1,typeof t.content=="string"?t.content:"")))}}function Wt(n,e){if(n&1&&(a(0,"section",16)(1,"div",23),Mt(),a(2,"svg",24),C(3,"circle",25)(4,"line",26)(5,"circle",27),s(),ft(),a(6,"h4"),c(7,"Disclaimer"),s()(),a(8,"p"),c(9),s()()),n&2){const t=l(2);i(9),h(t.disclaimerText)}}function Vt(n,e){if(n&1&&C(0,"img",30),n&2){const t=l().$implicit,o=l(3);x("src",t.attributes.coverImage||o.defaultCoverImage,U)("alt",t.attributes.title)}}function $t(n,e){if(n&1&&(a(0,"span",33),c(1),s()),n&2){const t=l().$implicit;i(),h(t.attributes.date)}}function Qt(n,e){if(n&1&&(a(0,"li",29),d(1,Vt,1,2,"img",30),a(2,"div",31)(3,"a",32),c(4),s(),d(5,$t,2,1,"span",33),s()()),n&2){const t=e.$implicit,o=l(3);i(),_(t.attributes.coverImage||o.defaultCoverImage?1:-1),i(2),x("routerLink",O(4,J,t.attributes.slug)),i(),h(t.attributes.title),i(),_(t.attributes.date?5:-1)}}function Jt(n,e){if(n&1&&(a(0,"div",18)(1,"h3"),c(2,"Related Posts"),s(),a(3,"ul",28),S(4,Qt,6,6,"li",29,X),s()()),n&2){const t=l(2);i(4),D(t.relatedPosts)}}function Xt(n,e){if(n&1&&C(0,"img",30),n&2){const t=l(2).$implicit,o=l(3);x("src",t.attributes.coverImage||o.defaultCoverImage,U)("alt",t.attributes.title)}}function qt(n,e){if(n&1&&(a(0,"span",33),c(1),s()),n&2){const t=l(2).$implicit;i(),h(t.attributes.date)}}function Kt(n,e){if(n&1&&(a(0,"li",29),d(1,Xt,1,2,"img",30),a(2,"div",31)(3,"a",32),c(4),s(),d(5,qt,2,1,"span",33),s()()),n&2){const t=l().$implicit,o=l(3);i(),_(t.attributes.coverImage||o.defaultCoverImage?1:-1),i(2),x("routerLink",O(4,J,t.attributes.slug)),i(),h(t.attributes.title),i(),_(t.attributes.date?5:-1)}}function tn(n,e){if(n&1&&d(0,Kt,6,6,"li",29),n&2){const t=e.$implicit,o=l(3);_(t.attributes.slug!==o.currentSlug?0:-1)}}function nn(n,e){if(n&1&&(a(0,"div",19)(1,"h3"),c(2,"Recent Posts"),s(),a(3,"ul",28),S(4,tn,1,1,null,null,X),s()()),n&2){const t=l(2);i(4),D(t.recentPosts)}}function en(n,e){if(n&1&&(a(0,"article",1)(1,"header",2)(2,"h1",3),c(3),s(),d(4,zt,2,1,"p",4),a(5,"div",5),d(6,kt,2,0,"span",6),d(7,At,2,0,"span",7),a(8,"span",8),c(9),s(),d(10,Bt,2,0),s(),d(11,Ut,5,4,"div",9),a(12,"p",10),c(13),s()(),C(14,"img",11),a(15,"div",12),d(16,Yt,1,1,"app-table-of-contents",13),a(17,"div",14,0),d(19,Ft,3,5,"analog-markdown",15),s()(),d(20,Wt,10,1,"section",16),a(21,"section",17),d(22,Jt,6,0,"div",18)(23,nn,6,0,"div",19),s(),C(24,"app-post-navigation",20),s()),n&2){const t=e,o=l();i(3),h(t.attributes.title),i(),_(t.attributes.date?4:-1),i(2),_(t.attributes.isDraft?6:-1),i(),_(t.attributes.isPinned?7:-1),i(2),h(t.attributes.category||"uncategorized"),i(),_(t.attributes.tags&&t.attributes.tags.length>0?10:-1),i(),_(t.attributes.author||t.attributes.epicName||t.attributes.verseNumber||t.attributes.articleMetadata?11:-1),i(2),h(t.attributes.description),i(),x("src",t.attributes.coverImage||o.defaultCoverImage,U)("alt",t.attributes.title),i(),pt("blog-post__container--no-toc",!o.showToc),i(),_(o.showToc&&o.headings.length>0?16:-1),i(3),_(t.content?19:-1),i(),_(o.showDisclaimer?20:-1),i(2),_(o.relatedPosts.length>0?22:23),i(2),x("previousPost",o.previousPost)("nextPost",o.nextPost)}}const w=class w{constructor(e,t){this.cdr=t,this.post$=st("slug"),this.defaultCoverImage="tamil-literature-default.svg",this.allPosts=[],this.headings=[],this.relatedPosts=[],this.recentPosts=[],this.previousPost=null,this.nextPost=null,this.currentSlug="",this.showToc=!0,this.showDisclaimer=!0,this.disclaimerText="The views expressed are personal and for informational purposes only.",this.hasExtractedHeadings=!1,this.isBrowser=at(e);const r=rt().filter(g=>!g.attributes.isDraft);this.allPosts=r.sort((g,m)=>g.attributes.isPinned&&!m.attributes.isPinned?-1:!g.attributes.isPinned&&m.attributes.isPinned?1:new Date(m.attributes.date||"").getTime()-new Date(g.attributes.date||"").getTime())}ngOnInit(){this.post$.subscribe(e=>{e&&(this.currentSlug=e.attributes.slug,this.showToc=e.attributes.toc!==!1,this.showDisclaimer=e.attributes.disclaimerEnabled!==!1,this.disclaimerText=e.attributes.disclaimerText||this.disclaimerText,this.updateNavigation(),this.updateRelatedPosts(e.attributes.relatedPosts),this.recentPosts=this.allPosts.slice(0,xt.articleRecentPostsCount+1),this.headings=[],this.hasExtractedHeadings=!1)})}ngAfterViewInit(){this.updateContentHeadings(),this.isBrowser&&(this.initObserver(),this.setupFootnoteNavigation())}ngAfterViewChecked(){!this.hasExtractedHeadings&&this.contentRef?.nativeElement&&this.isBrowser&&this.contentRef.nativeElement.querySelectorAll("h1, h2, h3, h4").length>0&&this.headings.length===0&&setTimeout(()=>{this.updateContentHeadings(),this.cdr.detectChanges()},0)}ngOnDestroy(){this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}updateContentHeadings(){if(!this.isBrowser||!this.contentRef?.nativeElement)return;const e=this.contentRef.nativeElement,t=e.querySelectorAll("h1, h2, h3, h4");if(t.length===0)return;t.forEach(g=>{if(!g.id){const m=g.textContent||"";g.id=this.slugify(m)}});const o=e.innerHTML,r=bt(o);r.length>0&&!this.hasExtractedHeadings&&(this.headings=r,this.hasExtractedHeadings=!0)}initObserver(){this.isBrowser&&this.contentRef?.nativeElement&&(this.mutationObserver||(this.mutationObserver=new MutationObserver(()=>{this.updateContentHeadings(),this.setupFootnoteNavigation()}),this.mutationObserver.observe(this.contentRef.nativeElement,{childList:!0,subtree:!0,characterData:!0})))}setupFootnoteNavigation(){if(!this.isBrowser)return;const e=document.querySelector("article.blog-post");if(!e)return;const t=o=>{const g=o.target.getAttribute("data-fn");if(g){o.preventDefault(),o.stopPropagation();const m=g,I=document.getElementById(m);if(I){I.scrollIntoView({behavior:"smooth",block:"center"});const b=document.querySelector("base")?.getAttribute("href")||"/",u=`${b.endsWith("/")?b:`${b}/`}blog/${this.currentSlug}#${m}`;window.history.replaceState(null,"",u)}}};e.addEventListener("click",o=>{const r=o.target;(r.classList.contains("footnote-ref")||r.classList.contains("footnote-backref"))&&t(o)})}slugify(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}updateNavigation(){const e=this.allPosts.findIndex(t=>t.attributes.slug===this.currentSlug);e>0?this.previousPost=this.allPosts[e-1]:this.previousPost=null,e<this.allPosts.length-1?this.nextPost=this.allPosts[e+1]:this.nextPost=null}updateRelatedPosts(e){if(this.relatedPosts=[],!e||e.length===0)return;e.slice(0,5).forEach(o=>{const r=this.allPosts.find(g=>g.attributes.slug===o);r&&this.relatedPosts.push(r)})}};w.ɵfac=function(t){return new(t||w)(F(ct),F(lt))},w.ɵcmp=H({type:w,selectors:[["app-blog-post"]],viewQuery:function(t,o){if(t&1&&_t(Ot,5),t&2){let r;ut(r=mt())&&(o.contentRef=r.first)}},decls:2,vars:3,consts:[["contentRef",""],[1,"blog-post"],[1,"blog-post__header"],[1,"blog-post__title"],[1,"blog-post__date"],[1,"blog-post__meta"],[1,"post-meta-tag","draft-tag"],[1,"post-meta-tag","pinned-tag"],[1,"post-meta-tag","category-tag"],[1,"blog-post__article-meta"],[1,"blog-post__description"],[1,"blog-post__image",3,"src","alt"],[1,"blog-post__container"],[1,"blog-post__toc",3,"headings"],[1,"blog-post__content"],[3,"content"],[1,"blog-post__disclaimer"],[1,"blog-post__related"],[1,"related-posts"],[1,"recent-posts"],[3,"previousPost","nextPost"],[1,"post-meta-tag","tag-tag"],[1,"article-meta-item"],[1,"disclaimer-header"],["viewBox","0 0 24 24","fill","currentColor",1,"disclaimer-icon"],["cx","12","cy","12","r","10","fill","none","stroke","currentColor","stroke-width","2"],["x1","12","y1","8","x2","12","y2","12","stroke","currentColor","stroke-width","2","stroke-linecap","round"],["cx","12","cy","16","r","0.5","fill","currentColor"],[1,"posts-list"],[1,"post-item"],[1,"post-thumbnail",3,"src","alt"],[1,"post-info"],[1,"post-link",3,"routerLink"],[1,"post-date"]],template:function(t,o){if(t&1&&(d(0,en,25,18,"article",1),z(1,"async")),t&2){let r;_((r=k(1,1,o.post$))?0:-1,r)}},dependencies:[R,G,gt,A,E,dt,B,Z],styles:[`.blog-post[_ngcontent-%COMP%] {
      max-width: 900px;
      margin: 0 auto;
    }

    .blog-post__header[_ngcontent-%COMP%] {
      margin-bottom: 2rem;
      text-align: center;
    }

    .blog-post__title[_ngcontent-%COMP%] {
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
      line-height: 1.2;
      color: #212529;
    }

    .blog-post__date[_ngcontent-%COMP%] {
      font-size: 0.95rem;
      color: #6c757d;
      margin: 0 0 0.5rem 0;
    }

    .blog-post__description[_ngcontent-%COMP%] {
      font-size: 1.125rem;
      color: #495057;
      margin: 0;
      line-height: 1.6;
    }

    .blog-post__meta[_ngcontent-%COMP%] {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0.75rem 0;
    }

    .post-meta-tag[_ngcontent-%COMP%] {
      display: inline-block;
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-weight: 500;
    }

    .category-tag[_ngcontent-%COMP%] {
      background: #e3f2fd;
      color: #1976d2;
      border: 1px solid #1976d2;
    }

    .tag-tag[_ngcontent-%COMP%] {
      background: #f3e5f5;
      color: #7b1fa2;
      border: 1px solid #7b1fa2;
    }

    .pinned-tag[_ngcontent-%COMP%] {
      background: #fff3cd;
      color: #664d03;
      border: 1px solid #ffecb5;
      font-weight: 600;
    }

    .draft-tag[_ngcontent-%COMP%] {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
      font-weight: 600;
    }

    .blog-post__image[_ngcontent-%COMP%] {
      width: 100%;
      height: auto;
      max-height: 500px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 3rem;
      display: block;
    }

    .blog-post__container[_ngcontent-%COMP%] {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      margin-bottom: 1.5rem;
    }

    .blog-post__container--no-toc[_ngcontent-%COMP%] {
      grid-template-columns: 1fr;
    }

    .blog-post__toc[_ngcontent-%COMP%] {
      order: -1;
    }

    .blog-post__content[_ngcontent-%COMP%] {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #333;
    }

    .blog-post__container--no-toc[_ngcontent-%COMP%]   .blog-post__content[_ngcontent-%COMP%] {
      grid-column: 1;
    }

    .blog-post__sidebar[_ngcontent-%COMP%] {
      margin-top: 2rem;
    }

    .blog-post__disclaimer[_ngcontent-%COMP%] {
      margin: 2rem 0;
      padding: 1.25rem;
      background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
      border-left: 4px solid #9e9e9e;
      border-radius: 6px;
      color: #424242;
      position: relative;
      transform: translateX(-8px);
      box-shadow: -4px 4px 12px rgba(158, 158, 158, 0.1);
    }

    .disclaimer-header[_ngcontent-%COMP%] {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .disclaimer-icon[_ngcontent-%COMP%] {
      width: 20px;
      height: 20px;
      color: #9e9e9e;
      flex-shrink: 0;
    }

    .blog-post__disclaimer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      color: #9e9e9e;
    }

    .blog-post__disclaimer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.6;
      color: #616161;
    }

    .blog-post__related[_ngcontent-%COMP%] {
      margin: 3rem 0 2rem 0;
    }

    .related-posts[_ngcontent-%COMP%], 
   .recent-posts[_ngcontent-%COMP%] {
      padding: 1.5rem 0;
    }

    .related-posts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
   .recent-posts[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
      font-size: 1.25rem;
      margin: 0 0 1.5rem 0;
      color: #212529;
      border-bottom: 2px solid #0d6efd;
      padding-bottom: 0.75rem;
    }

    .posts-list[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .post-item[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem;
      background: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .post-item[_ngcontent-%COMP%]:hover {
      border-color: #0d6efd;
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.1);
    }

    .post-thumbnail[_ngcontent-%COMP%] {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 6px;
      border: 1px solid #dee2e6;
    }

    .post-info[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
    }

    .post-link[_ngcontent-%COMP%] {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.4;
      transition: color 0.2s ease;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .post-link[_ngcontent-%COMP%]:hover {
      color: #0b5ed7;
      text-decoration: underline;
    }

    .post-date[_ngcontent-%COMP%] {
      font-size: 0.85rem;
      color: #6c757d;
    }

    @media (max-width: 768px) {
      .posts-list[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
      }

      .post-item[_ngcontent-%COMP%] {
        flex-direction: row;
      }

      .post-thumbnail[_ngcontent-%COMP%] {
        width: 120px;
        height: 120px;
        flex-shrink: 0;
      }

      .post-info[_ngcontent-%COMP%] {
        justify-content: center;
      }
    }

    @media (max-width: 1024px) {
      .blog-post__container[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
      }

      .blog-post__toc[_ngcontent-%COMP%] {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .blog-post__title[_ngcontent-%COMP%] {
        font-size: 2rem;
      }

      .blog-post__container[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .blog-post__sidebar[_ngcontent-%COMP%] {
        grid-column: 1;
      }

      .recent-posts-widget[_ngcontent-%COMP%] {
        position: static;
        max-height: none;
      }
    }

    [_nghost-%COMP%]     analog-markdown {
      font-size: 1.05rem;
      line-height: 1.8;
      color: #333;
    }

    [_nghost-%COMP%]     analog-markdown h2 {
      margin: 2rem 0 1rem 0;
      padding-top: 1rem;
      border-top: 1px solid #dee2e6;
    }

    [_nghost-%COMP%]     analog-markdown h3 {
      margin: 1.5rem 0 0.75rem 0;
    }

    [_nghost-%COMP%]     analog-markdown p {
      margin: 1rem 0;
    }

    [_nghost-%COMP%]     analog-markdown code {
      background-color: #f4f4f4;
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      font-size: 0.9em;
      font-family: 'Courier New', monospace;
    }

    [_nghost-%COMP%]     analog-markdown pre {
      background-color: #f4f4f4;
      padding: 1rem;
      border-radius: 5px;
      overflow-x: auto;
      margin: 1rem 0;
    }

    [_nghost-%COMP%]     analog-markdown pre code {
      background-color: transparent;
      padding: 0;
    }

    [_nghost-%COMP%]     analog-markdown blockquote {
      border-left: 4px solid #0d6efd;
      margin: 1rem 0;
      padding: 0 0 0 1rem;
      color: #6c757d;
    }

    [_nghost-%COMP%]     analog-markdown ul, 
   [_nghost-%COMP%]     analog-markdown ol {
      margin: 1rem 0;
      padding-left: 2rem;
    }

    [_nghost-%COMP%]     analog-markdown li {
      margin: 0.5rem 0;
    }

    [_nghost-%COMP%]     analog-markdown img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      margin: 1rem 0;
    }

    [_nghost-%COMP%]     analog-markdown a {
      color: #0d6efd;
      text-decoration: none;
    }

    [_nghost-%COMP%]     analog-markdown a:hover {
      text-decoration: underline;
    }

    .blog-post__article-meta[_ngcontent-%COMP%] {
      background: #f8f9fa;
      border-left: 4px solid #0d6efd;
      padding: 1rem;
      border-radius: 6px;
      margin: 1.5rem 0;
    }

    .article-meta-item[_ngcontent-%COMP%] {
      font-size: 0.95rem;
      color: #495057;
      margin: 0.5rem 0;
      line-height: 1.5;
    }

    .article-meta-item[_ngcontent-%COMP%]:first-child {
      margin-top: 0;
    }

    .article-meta-item[_ngcontent-%COMP%]:last-child {
      margin-bottom: 0;
    }

    .article-meta-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
      color: #212529;
      font-weight: 600;
      margin-right: 0.5rem;
    }`]});let V=w;export{V as default};
