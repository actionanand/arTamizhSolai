import{ɵ as U,C as V,N as At,R as mt,g as m,l as h,a as l,b as d,c,h as W,n as g,k as s,m as Q,o as ht,p as T,q as b,L as Dt,w as Y,z as w,B as y,v as it,t as C,e as v,E as J,M as Nt,O as Ot,F as j,P as Tt,Q as Et,S as $t,T as Ht,U as Bt,V as nt,W as Rt,s as kt,X as Gt,Y as Zt,Z as Ut,_ as ft,$ as bt,a0 as xt,G as L,H as k,K as Mt,J as Vt,D as X,f as F,I as Yt,a1 as qt,i as Ft,a2 as Wt,a3 as Qt,a4 as Jt,a5 as Xt,x as I,y as O,a6 as Kt,a7 as Pt,a8 as vt,j as tn,d as nn,a9 as en}from"./index-Dc8YRknw.js";import{p as on}from"./pagination-config-BIRU8DJ8.js";import{F as an}from"./format-date.pipe-8fnvPLnq.js";function rn(o){const n=[],t=/<h([1-4])[^>]*?(?:id=\"([^\"]*)\")?[^>]*>([\s\S]*?)<\/h\1>/gi;let e;for(;(e=t.exec(o))!==null;){const i=parseInt(e[1],10),r=e[2]||sn(wt(e[3])),a=cn(wt(e[3]).trim());n.push({level:i,text:a,id:r})}return n}function wt(o){return o.replace(/<[^>]*>/g,"")}function sn(o){return o.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function cn(o){return o.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'")}const ln=()=>[],dn=(o,n)=>n.id;function pn(o,n){if(o&1){const t=ht();l(0,"li",4)(1,"a",5),T("click",function(){const i=w(t).$implicit,r=g(2);return y(r.scrollToElement(i.id))}),d(2),c()()}if(o&2){const t=n.$implicit;b("ngClass","toc__item--level-"+t.level),s(),b("routerLink",Dt(4,ln))("fragment",t.id),s(),Y(" ",t.text," ")}}function gn(o,n){if(o&1&&(l(0,"aside",0)(1,"nav",1)(2,"h3",2),d(3,"Table of Contents"),c(),l(4,"ul",3),W(5,pn,3,5,"li",4,dn),c()()()),o&2){const t=g();s(5),Q(t.headings)}}const z=class z{constructor(){this.headings=[]}scrollToElement(n){setTimeout(()=>{const t=document.getElementById(n);t&&t.scrollIntoView({behavior:"smooth",block:"start"})},0)}};z.ɵfac=function(t){return new(t||z)},z.ɵcmp=U({type:z,selectors:[["app-table-of-contents"]],inputs:{headings:"headings"},decls:1,vars:1,consts:[[1,"toc"],[1,"toc__nav"],[1,"toc__title"],[1,"toc__list"],[1,"toc__item",3,"ngClass"],[1,"toc__link",3,"click","routerLink","fragment"]],template:function(t,e){t&1&&m(0,gn,7,0,"aside",0),t&2&&h(e.headings.length>0?0:-1)},dependencies:[V,At,mt],styles:[`.toc[_ngcontent-%COMP%] {
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
    }`]});let rt=z;const St=o=>["/blog",o];function _n(o,n){if(o&1&&(l(0,"a",1)(1,"span",4),d(2,"← Previous"),c(),l(3,"span",5),d(4),c()()),o&2){const t=g();b("routerLink",it(2,St,t.previousPost.attributes.slug)),s(4),C(t.previousPost.attributes.title)}}function un(o,n){o&1&&v(0,"div",2)}function mn(o,n){if(o&1&&(l(0,"a",3)(1,"span",4),d(2,"Next →"),c(),l(3,"span",5),d(4),c()()),o&2){const t=g();b("routerLink",it(2,St,t.nextPost.attributes.slug)),s(4),C(t.nextPost.attributes.title)}}function hn(o,n){o&1&&v(0,"div",2)}const A=class A{constructor(){this.previousPost=null,this.nextPost=null}};A.ɵfac=function(t){return new(t||A)},A.ɵcmp=U({type:A,selectors:[["app-post-navigation"]],inputs:{previousPost:"previousPost",nextPost:"nextPost"},decls:5,vars:2,consts:[[1,"post-nav"],[1,"post-nav__link","post-nav__link--prev",3,"routerLink"],[1,"post-nav__placeholder"],[1,"post-nav__link","post-nav__link--next",3,"routerLink"],[1,"post-nav__label"],[1,"post-nav__title"]],template:function(t,e){t&1&&(l(0,"nav",0),m(1,_n,5,4,"a",1)(2,un,1,0,"div",2),m(3,mn,5,4,"a",3)(4,hn,1,0,"div",2),c()),t&2&&(s(),h(e.previousPost?1:2),s(2),h(e.nextPost?3:4))},dependencies:[mt,V],styles:[`.post-nav[_ngcontent-%COMP%] {
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
    }`]});let st=A;const fn={tip:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbDpub25lO3N0cm9rZTojMDgzMmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LmNscy0xe3N0cm9rZS13aWR0aDoycHg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT48L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LDEzLjFhOCw4LDAsMSwwLTEzLjYsNS43QTUuMDcsNS4wNywwLDAsMSwxMiwyMi40VjIzaDh2LS41M2E1LjIzLDUuMjMsMCwwLDEsMS42My0zLjY5QTgsOCwwLDAsMCwyNCwxMy4xWiI+PC9wYXRoPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjEyIiB4Mj0iMjAiIHkxPSIyNiIgeTI9IjI2Ij48L2xpbmU+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTMiIHgyPSIxOSIgeTE9IjI3IiB5Mj0iMjciPjwvbGluZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxNiIgeDI9IjE2IiB5MT0iMjgiIHkyPSIyNyI+PC9saW5lPjxwb2x5bGluZSBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTYgMTIuNDIgMTUgMTUuMjUgMTcgMTUuMjUgMTYgMTguMTciPjwvcG9seWxpbmU+PC9zdmc+",warning:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBzdHJva2U9IiM1MzUzNTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuMTIgNC42MjNhMSAxIDAgMDExLjc2IDBsMTEuMzIgMjAuOUExIDEgMCAwMTI3LjMyMSAyN0g0LjY3OWExIDEgMCAwMS0uODgtMS40NzZsMTEuMzIyLTIwLjl6TTE2IDE4di02Ii8+DQogIDxwYXRoIGZpbGw9IiM1MzUzNTgiIGQ9Ik0xNy41IDIyLjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6Ii8+DQo8L3N2Zz4=",danger:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE3LjY2IDExLjJjLS4yMy0uMy0uNTEtLjU2LS43Ny0uODItLjY3LS42LTEuNDMtMS4wMy0yLjA3LTEuNjZDMTMuMzMgNy4yNiAxMyA0Ljg1IDEzLjk1IDNjLS45NS4yMy0xLjc4Ljc1LTIuNDkgMS4zMi0yLjU5IDIuMDgtMy42MSA1Ljc1LTIuMzkgOC45LjA0LjEuMDguMi4wOC4zMyAwIC4yMi0uMTUuNDItLjM1LjUtLjIzLjEtLjQ3LjA0LS42Ni0uMTJhLjU4LjU4IDAgMCAxLS4xNC0uMTdjLTEuMTMtMS40My0xLjMxLTMuNDgtLjU1LTUuMTJDNS43OCAxMCA0Ljg3IDEyLjMgNSAxNC40N2MuMDYuNS4xMiAxIC4yOSAxLjUuMTQuNi40MSAxLjIuNzEgMS43MyAxLjA4IDEuNzMgMi45NSAyLjk3IDQuOTYgMy4yMiAyLjE0LjI3IDQuNDMtLjEyIDYuMDctMS42IDEuODMtMS42NiAyLjQ3LTQuMzIgMS41My02LjZsLS4xMy0uMjZjLS4yMS0uNDYtLjc3LTEuMjYtLjc3LTEuMjZtLTMuMTYgNi4zYy0uMjguMjQtLjc0LjUtMS4xLjYtMS4xMi40LTIuMjQtLjE2LTIuOS0uODIgMS4xOS0uMjggMS45LTEuMTYgMi4xMS0yLjA1LjE3LS44LS4xNS0xLjQ2LS4yOC0yLjIzLS4xMi0uNzQtLjEtMS4zNy4xNy0yLjA2LjE5LjM4LjM5Ljc2LjYzIDEuMDYuNzcgMSAxLjk4IDEuNDQgMi4yNCAyLjguMDQuMTQuMDYuMjguMDYuNDMuMDMuODItLjMzIDEuNzItLjkzIDIuMjd6Ii8+PC9zdmc+",info:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE2MCIgd2lkdGg9IjE2MCIgdmVyc2lvbj0iMS4wIj4KIDxnIGZpbGw9IiM0YjRiNGIiPgogIDxwYXRoIGQ9Im04MCAxNWMtMzUuODggMC02NSAyOS4xMi02NSA2NXMyOS4xMiA2NSA2NSA2NSA2NS0yOS4xMiA2NS02NS0yOS4xMi02NS02NS02NXptMCAxMGMzMC4zNiAwIDU1IDI0LjY0IDU1IDU1cy0yNC42NCA1NS01NSA1NS01NS0yNC42NC01NS01NSAyNC42NC01NSA1NS01NXoiLz4KICA8cGF0aCBkPSJtNTcuMzczIDE4LjIzMWE5LjM4MzQgOS4xMTUzIDAgMSAxIC0xOC43NjcgMCA5LjM4MzQgOS4xMTUzIDAgMSAxIDE4Ljc2NyAweiIgdHJhbnNmb3JtPSJtYXRyaXgoMS4xOTg5IDAgMCAxLjIzNDIgMjEuMjE0IDI4Ljc1KSIvPgogIDxwYXRoIGQ9Im05MC42NjUgMTEwLjk2Yy0wLjA2OSAyLjczIDEuMjExIDMuNSA0LjMyNyAzLjgybDUuMDA4IDAuMXY1LjEyaC0zOS4wNzN2LTUuMTJsNS41MDMtMC4xYzMuMjkxLTAuMSA0LjA4Mi0xLjM4IDQuMzI3LTMuODJ2LTMwLjgxM2MwLjAzNS00Ljg3OS02LjI5Ni00LjExMy0xMC43NTctMy45Njh2LTUuMDc0bDMwLjY2NS0xLjEwNSIvPgogPC9nPgo8L3N2Zz4K",note:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM4M2Q0MSIgZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMy4wMiAxNy4yNXptMTcuNzEtMTAuMjFjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6Ii8+PC9zdmc+",success:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzBmNTEzMiIgZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxTDkgMTYuMTd6Ii8+PC9zdmc+",caution:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBzdHJva2U9IiM1MzUzNTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuMTIgNC42MjNhMSAxIDAgMDExLjc2IDBsMTEuMzIgMjAuOUExIDEgMCAwMTI3LjMyMSAyN0g0LjY3OWExIDEgMCAwMS0uODgtMS40NzZsMTEuMzIyLTIwLjl6TTE2IDE4di02Ii8+DQogIDxwYXRoIGZpbGw9IiM1MzUzNTgiIGQ9Ik0xNy41IDIyLjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6Ii8+DQo8L3N2Zz4="};function bn(o){const n=/:::(\w+)(?:\[(.*?)\])?\s*\n([\s\S]*?)\n:::/g;return o.replace(n,(t,e,i,r)=>{if(e=e.toLowerCase(),!["tip","warning","danger","info","note","collapse","success","caution"].includes(e))return t;const p=i||{tip:"Tip",warning:"Warning",danger:"Danger",info:"Info",note:"Note",success:"Success",caution:"Caution",collapse:"Details"}[e],M=e==="collapse",u=r.trim(),f=fn[e]||"";return M?`<details class="admonition admonition--collapse">
<summary class="admonition__title">
<span class="admonition__icon"></span>
${p}
</summary>
<div class="admonition__content">

${u}

</div>
</details>`:`<div class="admonition admonition--${e}">
<div class="admonition__title">
<img class="admonition__icon" src="${f}" alt="${e}" />
${p}
</div>
<div class="admonition__content">

${u}

</div>
</div>`})}const D=class D{transform(n){return n&&typeof n=="string"?bn(n):""}};D.ɵfac=function(t){return new(t||D)},D.ɵpipe=J({name:"admonitionTransform",type:D,pure:!0});let ct=D;const N=class N{transform(n){if(!n)return"";const t=new Map;let e=n;const i=/:::footnotes\s*\n([\s\S]*?)\n:::/g,r=i.exec(n);if(r){const u=r[1],f=/^\[\^([^\]]+)\]:\s*(.+)$/gm;let x;for(;(x=f.exec(u))!==null;){const P=x[1].trim(),q=x[2].trim();P&&t.set(P,q)}e=n.replace(i,"").trim()}else{const f=/\n\n(\[\^[^\]]+\]:.+\n?)+$/.exec(n);if(f){const x=f[0],P=/^\[\^([^\]]+)\]:\s*(.+)$/gm;let q;for(;(q=P.exec(x))!==null;){const Ct=q[1].trim(),zt=q[2].trim();Ct&&t.set(Ct,zt)}e=n.substring(0,n.length-x.length).trim()}}const a=new Map,_=new Map;let p=0;const M=/\[\^([^\]]+)\]/g;if(e.replace(M,(u,f)=>{const x=String(f).trim();return a.has(x)||(p+=1,a.set(x,p),_.set(p,x)),""}),e=e.replace(M,(u,f)=>{const x=String(f).trim(),P=a.get(x);return P?`<sup><a data-fn="fn-${P}" id="fnref-${P}" class="footnote-ref" role="button" tabindex="0">[${P}]</a></sup>`:u}),a.size>0){let u=`

<section class="blog-post__footnotes">
`;u+=`<div class="footnotes-header">
`,u+=`<span class="footnotes-icon">📝</span>
`,u+=`<span class="footnotes-title">Footnotes</span>
`,u+=`</div>
`,u+=`<ol>
`;for(let f=1;f<=a.size;f++){const x=_.get(f);let P=t.get(x)||"";P=this.parseMarkdownLinks(P),u+=`<li id="fn-${f}"><p>${P} <a data-fn="fnref-${f}" class="footnote-backref" role="button" tabindex="0" title="Back to reference">↩</a></p></li>
`}u+=`</ol>
</section>
`,e+=u}return e}parseMarkdownLinks(n){return n.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(t,e,i)=>{let r=i;return!i.startsWith("http://")&&!i.startsWith("https://")&&!i.startsWith("/")&&(r=`https://${i}`),`<a href="${r}" target="_blank" rel="noopener noreferrer">${e}</a>`})}};N.ɵfac=function(t){return new(t||N)},N.ɵpipe=J({name:"processFootnotes",type:N,pure:!0});let lt=N;const E=class E{transform(n){if(!n)return"";let t=n;return t=this.processComboFormat(t),t=this.processBackgroundColor(t),t=this.processTextColor(t),t=this.processFontWeight(t),t=this.processAlignment(t),t=this.processBold(t),t=this.processItalic(t),t=this.processStrikethrough(t),t}processComboFormat(n){const t=/::combo\[([^\]]+)\]\{([^}]+)\}/g;return n.replace(t,(e,i,r)=>{const a=this.parseComboAttributes(i),_=[],p=[];a.bg&&p.push(`background-color: ${this.sanitizeColor(a.bg)}`),a.color&&p.push(`color: ${this.sanitizeColor(a.color)}`),a.weight&&p.push(`font-weight: ${this.sanitizeWeight(a.weight)}`),a.align&&_.push(`text-align-${this.sanitizeAlign(a.align)}`),a.bold==="true"&&p.push("font-weight: bold"),a.italic==="true"&&p.push("font-style: italic"),a.strike==="true"&&p.push("text-decoration: line-through");const M=_.length>0?` class="${_.join(" ")}"`:"",u=p.length>0?` style="${p.join("; ")}"`:"";return`<span${M}${u}>${r}</span>`})}parseComboAttributes(n){const t={},e=n.split(";");for(const i of e){const[r,a]=i.split(":").map(_=>_.trim());r&&a&&(t[r]=a)}return t}processBackgroundColor(n){const t=/::bg\[([^\]]+)\]\{([^}]+)\}/g;return n.replace(t,(e,i,r)=>`<span style="background-color: ${this.sanitizeColor(i)}">${r}</span>`)}processTextColor(n){const t=/::color\[([^\]]+)\]\{([^}]+)\}/g;return n.replace(t,(e,i,r)=>`<span style="color: ${this.sanitizeColor(i)}">${r}</span>`)}processFontWeight(n){const t=/::weight\[([^\]]+)\]\{([^}]+)\}/g;return n.replace(t,(e,i,r)=>`<span style="font-weight: ${this.sanitizeWeight(i)}">${r}</span>`)}processAlignment(n){const t=/::align\[([^\]]+)\]\{([^}]+)\}/g;return n.replace(t,(e,i,r)=>`<span class="text-align-${this.sanitizeAlign(i)}">${r}</span>`)}processBold(n){const t=/::bold\{([^}]+)\}/g;return n.replace(t,'<span style="font-weight: bold">$1</span>')}processItalic(n){const t=/::italic\{([^}]+)\}/g;return n.replace(t,'<span style="font-style: italic">$1</span>')}processStrikethrough(n){const t=/::strike\{([^}]+)\}/g;return n.replace(t,'<span style="text-decoration: line-through">$1</span>')}sanitizeColor(n){const t=n.trim().toLowerCase();return["black","white","red","green","blue","yellow","orange","purple","pink","brown","gray","grey","cyan","magenta","lime","navy","teal","olive","maroon","aqua","fuchsia","silver","darkred","darkgreen","darkblue","lightgray","lightblue","lightgreen","lightyellow","transparent"].includes(t)||/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(t)||/^rgba?\([^)]+\)$/i.test(t)?t:"inherit"}sanitizeWeight(n){const t=n.trim().toLowerCase();if(["normal","bold","bolder","lighter"].includes(t))return t;const e=parseInt(t,10);return!isNaN(e)&&e>=100&&e<=900&&e%100===0?e.toString():"normal"}sanitizeAlign(n){const t=n.trim().toLowerCase();return["left","center","right","justify"].includes(t)?t:"left"}};E.ɵfac=function(t){return new(t||E)},E.ɵpipe=J({name:"textFormat",type:E,pure:!0});let dt=E;const $=class ${transform(n){if(!n)return"";let t=n;return t=this.processQuoteCards(t),t=this.processVerseCards(t),t=this.processEpicCards(t),t=this.processHighlightCards(t),t=this.processGenericCards(t),t=this.processOlaiCards(t),t=this.processNewspaperCards(t),t}processQuoteCards(n){const t=/::quote\[([^\]]+)\]\{([^}]+)\}/g;let e=n.replace(t,(r,a,_)=>{const p=a.trim();return`<div class="card card--quote">
  <div class="card__quote-mark">"</div>
  <div class="card__content">
    <p class="card__quote-text">${_}</p>
    <p class="card__quote-author">— ${p}</p>
  </div>
</div>`});const i=/::quote\{([^}]+)\}/g;return e=e.replace(i,(r,a)=>`<div class="card card--quote">
  <div class="card__quote-mark">"</div>
  <div class="card__content">
    <p class="card__quote-text">${a}</p>
  </div>
</div>`),e}processVerseCards(n){const t=/::verse\[([^\]]+)\]\{([^}]+)\}/g;let e=n.replace(t,(r,a,_)=>`<div class="card card--verse">
  <div class="card__header">
    <span class="card__icon">📖</span>
    <span class="card__source">${a.trim()}</span>
  </div>
  <div class="card__content">
    <p class="card__verse-text">${_}</p>
  </div>
</div>`);const i=/::verse\{([^}]+)\}/g;return e=e.replace(i,(r,a)=>`<div class="card card--verse">
  <div class="card__header">
    <span class="card__icon">📖</span>
  </div>
  <div class="card__content">
    <p class="card__verse-text">${a}</p>
  </div>
</div>`),e}processEpicCards(n){const t=/::epic\[([^\]]+)\]\{([^}]+)\}/g;let e=n.replace(t,(r,a,_)=>`<div class="card card--epic">
  <div class="card__header">
    <span class="card__icon">⚔️</span>
    <span class="card__title">${a.trim()}</span>
  </div>
  <div class="card__content">
    <p class="card__epic-text">${_}</p>
  </div>
  <div class="card__footer">
    <span class="card__marker">✦</span>
  </div>
</div>`);const i=/::epic\{([^}]+)\}/g;return e=e.replace(i,(r,a)=>`<div class="card card--epic">
  <div class="card__header">
    <span class="card__icon">⚔️</span>
  </div>
  <div class="card__content">
    <p class="card__epic-text">${a}</p>
  </div>
  <div class="card__footer">
    <span class="card__marker">✦</span>
  </div>
</div>`),e}processHighlightCards(n){const t=/::highlight\[([^\]]+)\]\{([^}]+)\}/g;return n.replace(t,(e,i,r)=>{const a=this.sanitizeColor(i);return`<div class="card card--highlight ${this.getColorClass(i.toLowerCase())}" style="border-left-color: ${a}">
  <div class="card__content">
    <p class="card__highlight-text">${r}</p>
  </div>
</div>`})}processGenericCards(n){const t=/::card\[([^\]]+)\]\{([^}]+)\}/g;return n.replace(t,(e,i,r)=>{const a=i.split("|").map(x=>x.trim()),_=a[0],p=a[1],M=this.sanitizeType(_),u=p?this.sanitizeColor(p):"#0066cc",f=p?this.getColorClass(p.toLowerCase()):"default";switch(M){case"info":return`<div class="card card--info ${f}">
  <div class="card__header">
    <span class="card__icon">ℹ️</span>
    <span class="card__type">Information</span>
  </div>
  <div class="card__content">
    <p>${r}</p>
  </div>
</div>`;case"warning":return`<div class="card card--warning ${f}">
  <div class="card__header">
    <span class="card__icon">⚠️</span>
    <span class="card__type">Warning</span>
  </div>
  <div class="card__content">
    <p>${r}</p>
  </div>
</div>`;case"success":return`<div class="card card--success ${f}">
  <div class="card__header">
    <span class="card__icon">✓</span>
    <span class="card__type">Success</span>
  </div>
  <div class="card__content">
    <p>${r}</p>
  </div>
</div>`;case"error":return`<div class="card card--error ${f}">
  <div class="card__header">
    <span class="card__icon">✕</span>
    <span class="card__type">Error</span>
  </div>
  <div class="card__content">
    <p>${r}</p>
  </div>
</div>`;case"note":return`<div class="card card--note ${f}">
  <div class="card__header">
    <span class="card__icon">📝</span>
    <span class="card__type">Note</span>
  </div>
  <div class="card__content">
    <p>${r}</p>
  </div>
</div>`;case"tip":return`<div class="card card--tip ${f}">
  <div class="card__header">
    <span class="card__icon">💡</span>
    <span class="card__type">Tip</span>
  </div>
  <div class="card__content">
    <p>${r}</p>
  </div>
</div>`;default:return`<div class="card card--generic ${f}" style="border-top-color: ${u}">
  <div class="card__content">
    <p>${r}</p>
  </div>
</div>`}})}sanitizeColor(n){const t=n.trim().toLowerCase();return["black","white","red","green","blue","yellow","orange","purple","pink","brown","gray","grey","cyan","magenta","lime","navy","teal","olive","maroon","aqua","fuchsia","silver","darkred","darkgreen","darkblue","lightgray","lightblue","lightgreen","lightyellow","transparent"].includes(t)||/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(t)||/^rgba?\([^)]+\)$/i.test(t)?t:"#0066cc"}getColorClass(n){return{red:"card--red",green:"card--green",blue:"card--blue",yellow:"card--yellow",orange:"card--orange",purple:"card--purple",pink:"card--pink",cyan:"card--cyan",teal:"card--teal",gray:"card--gray",grey:"card--gray"}[n]||"card--default"}sanitizeType(n){const t=["info","warning","success","error","note","tip","default"],e=n.toLowerCase().trim();return t.includes(e)?e:"default"}processOlaiCards(n){const t=/::olai\[([^\]]+)\]\{([^}]+)\}/g;let e=n.replace(t,(r,a,_)=>`<div class="card card--olai">
  <div class="card__olai-header">
    <div class="card__olai-border-top"></div>
    <h3 class="card__olai-title">${a.trim()}</h3>
    <div class="card__olai-border"></div>
  </div>
  <div class="card__olai-content">
    <p class="card__olai-text">${_}</p>
  </div>
  <div class="card__olai-border-bottom"></div>
</div>`);const i=/::olai\{([^}]+)\}/g;return e=e.replace(i,(r,a)=>`<div class="card card--olai">
  <div class="card__olai-header">
    <div class="card__olai-border-top"></div>
  </div>
  <div class="card__olai-content">
    <p class="card__olai-text">${a}</p>
  </div>
  <div class="card__olai-border-bottom"></div>
</div>`),e}processNewspaperCards(n){const t=/::newspaper\[([^\]]+)\]\{([^}]+)\}/g;let e=n.replace(t,(r,a,_)=>`<div class="card card--newspaper">
  <div class="card__newspaper-header">
    <h2 class="card__newspaper-headline">${a.trim()}</h2>
    <div class="card__newspaper-line"></div>
  </div>
  <div class="card__newspaper-content">
    <p class="card__newspaper-text">${_}</p>
  </div>
</div>`);const i=/::newspaper\{([^}]+)\}/g;return e=e.replace(i,(r,a)=>`<div class="card card--newspaper">
  <div class="card__newspaper-header">
    <div class="card__newspaper-line"></div>
  </div>
  <div class="card__newspaper-content">
    <p class="card__newspaper-text">${a}</p>
  </div>
</div>`),e}};$.ɵfac=function(t){return new(t||$)},$.ɵpipe=J({name:"cardFormat",type:$,pure:!0});let pt=$;const H=class H{constructor(){this.tabGroupCounter=0}transform(n){if(!n)return"";let t=n;return t=this.processTabGroups(t),t}processTabGroups(n){const t=/:::tabs\s*([\s\S]*?):::/g;return n.replace(t,(e,i)=>{const r=`tab-group-${++this.tabGroupCounter}`,a=this.extractTabs(i);return a.length===0?e:this.renderTabGroup(r,a)})}extractTabs(n){const t=[],e=/::tab\[([^\]]+)\]/g;let i;for(;(i=e.exec(n))!==null;){const r=i[1].trim(),a=i.index+i[0].length;let _=0,p=-1,M=-1;for(let u=a;u<n.length;u++)if(n[u]==="{")p===-1&&(p=u+1),_++;else if(n[u]==="}"&&(_--,_===0&&p!==-1)){M=u;break}p!==-1&&M!==-1&&t.push({title:r,content:n.substring(p,M).trim()})}return t}renderTabGroup(n,t){const e=t.map((r,a)=>{const _=`${n}-tab-${a}`,p=`${n}-panel-${a}`;return`<button 
        class="tabs__tab ${a===0?"tabs__tab--active":""}" 
        id="${_}" 
        role="tab" 
        aria-selected="${a===0}" 
        aria-controls="${p}"
        onclick="window.switchTab(event, '${n}', ${a})">
        ${this.escapeHtml(r.title)}
      </button>`}).join(`
        `),i=t.map((r,a)=>{const _=`${n}-panel-${a}`,p=`${n}-tab-${a}`;return`<div 
        class="tabs__panel ${a===0?"tabs__panel--active":""}" 
        id="${_}" 
        role="tabpanel" 
        aria-labelledby="${p}">
        ${r.content}
      </div>`}).join(`
      `);return`<div class="tabs" id="${n}" role="tablist">
      <div class="tabs__header">
        ${e}
      </div>
      <div class="tabs__content">
      ${i}
      </div>
    </div>`}escapeHtml(n){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return n.replace(/[&<>"']/g,e=>t[e]||e)}};H.ɵfac=function(t){return new(t||H)},H.ɵpipe=J({name:"tabs",type:H,pure:!0});let gt=H;const Mn={passwordHash:"ace3ec3d2bca9a0c0e280b3f654b9254965d7696",expiryTime:1440*60*1e3},K={},at=Mn,S=class S{constructor(){this.STORAGE_KEY="blog_auth_cache",this.EXPIRY_TIME=at.expiryTime}async sha1(n){const t=new TextEncoder().encode(n),e=await crypto.subtle.digest("SHA-1",t);return Array.from(new Uint8Array(e)).map(a=>a.toString(16).padStart(2,"0")).join("")}async validatePassword(n){const t=await this.sha1(n),e=globalThis.__PASSWORD_HASH__,i=K.VITE_PASSWORD_HASH,r=K.VITE_USER_PASS_HASH,a=at.passwordHash;return t===e&&e?e:t===i&&i?i:t===r&&r?r:t===a&&a&&a!=="PASSWORD_HASH_PLACEHOLDER"?a:null}isAuthenticated(){const n=this.getCachedAuth();if(!n)return!1;if(Date.now()-n.timestamp>this.EXPIRY_TIME)return this.clearCache(),!1;const e=globalThis.__PASSWORD_HASH__,i=K.VITE_PASSWORD_HASH,r=K.VITE_USER_PASS_HASH,a=at.passwordHash,_=n.hash===a;return n.hash===e||n.hash===i||n.hash===r||_}saveAuth(n){const t={hash:n,timestamp:Date.now()};localStorage.setItem(this.STORAGE_KEY,JSON.stringify(t))}getCachedAuth(){try{const n=localStorage.getItem(this.STORAGE_KEY);return n?JSON.parse(n):null}catch{return null}}clearCache(){localStorage.removeItem(this.STORAGE_KEY)}getRemainingTime(){const n=this.getCachedAuth();if(!n)return 0;const t=Date.now()-n.timestamp;return Math.max(0,this.EXPIRY_TIME-t)}};S.ɵfac=function(t){return new(t||S)},S.ɵprov=Nt({token:S,factory:S.ɵfac,providedIn:"root"});let et=S;function Cn(o,n){o&1&&(l(0,"span"),d(1,"👁️"),c())}function xn(o,n){o&1&&(l(0,"span"),d(1,"🙈"),c())}function Pn(o,n){if(o&1&&(l(0,"p",16),d(1),c()),o&2){const t=g(2);s(),C(t.errorMessage())}}function vn(o,n){if(o&1){const t=ht();l(0,"div",2),T("click",function(i){w(t);const r=g();return y(r.onOverlayClick(i))}),l(1,"div",3),T("click",function(i){return w(t),y(i.stopPropagation())}),l(2,"div",4)(3,"h2"),d(4,"🔒 Protected Content"),c(),l(5,"button",5),T("click",function(){w(t);const i=g();return y(i.cancel())}),d(6,"×"),c()(),l(7,"div",6)(8,"p",7),d(9,"This article is password protected. Please enter the password to continue."),c(),l(10,"div",8)(11,"input",9,0),Rt("ngModelChange",function(i){w(t);const r=g();return Ut(r.password,i)||(r.password=i),y(i)}),T("keyup.enter",function(){w(t);const i=g();return y(i.submit())}),c(),l(13,"button",10),T("click",function(){w(t);const i=g();return y(i.togglePasswordVisibility())}),nt(14,Cn,2,0,"span",11)(15,xn,2,0,"span",11),c()(),nt(16,Pn,2,1,"p",12),c(),l(17,"div",13)(18,"button",14),T("click",function(){w(t);const i=g();return y(i.cancel())}),d(19,"Cancel"),c(),l(20,"button",15),T("click",function(){w(t);const i=g();return y(i.submit())}),d(21),c()()()()}if(o&2){const t=g();s(11),kt("error",t.errorMessage()),b("type",t.showPassword()?"text":"password"),Gt("ngModel",t.password),s(2),Zt("aria-label",t.showPassword()?"Hide password":"Show password"),s(),b("ngIf",!t.showPassword()),s(),b("ngIf",t.showPassword()),s(),b("ngIf",t.errorMessage()),s(4),b("disabled",t.isValidating()),s(),Y(" ",t.isValidating()?"Validating...":"Unlock"," ")}}const B=class B{constructor(){this.authService=Ot(et),this.isVisible=j(!1),this.password="",this.showPassword=j(!1),this.errorMessage=j(""),this.isValidating=j(!1)}show(){return this.isVisible.set(!0),this.password="",this.showPassword.set(!1),this.errorMessage.set(""),this.isValidating.set(!1),new Promise(n=>{this.resolvePromise=n})}hide(){this.isVisible.set(!1),this.password="",this.errorMessage.set("")}togglePasswordVisibility(){this.showPassword.set(!this.showPassword())}onOverlayClick(n){this.cancel()}async submit(){if(!this.password.trim()){this.errorMessage.set("Please enter a password");return}this.isValidating.set(!0),this.errorMessage.set("");try{const n=await this.authService.validatePassword(this.password);n?(this.authService.saveAuth(n),this.hide(),this.resolvePromise?.(!0)):(this.errorMessage.set("Incorrect password. Please try again."),this.password="")}catch(n){this.errorMessage.set("An error occurred. Please try again."),console.error("Password validation error:",n)}finally{this.isValidating.set(!1)}}cancel(){this.hide(),this.resolvePromise?.(!1)}};B.ɵfac=function(t){return new(t||B)},B.ɵcmp=U({type:B,selectors:[["app-password-modal"]],decls:1,vars:1,consts:[["passwordInput",""],["class","modal-overlay",3,"click",4,"ngIf"],[1,"modal-overlay",3,"click"],[1,"modal-content",3,"click"],[1,"modal-header"],["aria-label","Close",1,"close-btn",3,"click"],[1,"modal-body"],[1,"modal-message"],[1,"password-input-group"],["placeholder","Enter password","autofocus","",1,"password-input",3,"ngModelChange","keyup.enter","type","ngModel"],["type","button",1,"toggle-password-btn",3,"click"],[4,"ngIf"],["class","error-message",4,"ngIf"],[1,"modal-footer"],[1,"btn","btn-cancel",3,"click"],[1,"btn","btn-submit",3,"click","disabled"],[1,"error-message"]],template:function(t,e){t&1&&nt(0,vn,22,10,"div",1),t&2&&b("ngIf",e.isVisible())},dependencies:[V,Tt,Et,$t,Ht,Bt],styles:[`.modal-overlay[_ngcontent-%COMP%] {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      animation: _ngcontent-%COMP%_fadeIn 0.2s ease-in-out;
    }

    @keyframes _ngcontent-%COMP%_fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal-content[_ngcontent-%COMP%] {
      background: white;
      border-radius: 12px;
      width: 90%;
      max-width: 480px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;
      overflow: hidden;
    }

    @keyframes _ngcontent-%COMP%_slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .modal-header[_ngcontent-%COMP%] {
      padding: 24px 24px 16px;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
      margin: 0;
      font-size: 1.5rem;
      color: #111827;
      font-weight: 600;
    }

    .close-btn[_ngcontent-%COMP%] {
      background: none;
      border: none;
      font-size: 2rem;
      color: #6b7280;
      cursor: pointer;
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      transition: all 0.2s;
    }

    .close-btn[_ngcontent-%COMP%]:hover {
      background-color: #f3f4f6;
      color: #111827;
    }

    .modal-body[_ngcontent-%COMP%] {
      padding: 24px;
    }

    .modal-message[_ngcontent-%COMP%] {
      margin: 0 0 20px;
      color: #4b5563;
      font-size: 1rem;
      line-height: 1.5;
    }

    .password-input-group[_ngcontent-%COMP%] {
      position: relative;
      display: flex;
      align-items: center;
    }

    .password-input[_ngcontent-%COMP%] {
      width: 100%;
      padding: 12px 48px 12px 16px;
      font-size: 1rem;
      border: 2px solid #d1d5db;
      border-radius: 8px;
      transition: all 0.2s;
      font-family: inherit;
    }

    .password-input[_ngcontent-%COMP%]:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .password-input.error[_ngcontent-%COMP%] {
      border-color: #ef4444;
    }

    .password-input.error[_ngcontent-%COMP%]:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    .toggle-password-btn[_ngcontent-%COMP%] {
      position: absolute;
      right: 8px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      transition: background-color 0.2s;
      outline: none;
    }

    .toggle-password-btn[_ngcontent-%COMP%]:hover {
      background-color: #f3f4f6;
    }

    .toggle-password-btn[_ngcontent-%COMP%]:focus {
      outline: none;
    }

    .toggle-password-btn[_ngcontent-%COMP%]:active {
      outline: none;
    }

    .error-message[_ngcontent-%COMP%] {
      margin: 12px 0 0;
      color: #ef4444;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .modal-footer[_ngcontent-%COMP%] {
      padding: 16px 24px 24px;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }

    .btn[_ngcontent-%COMP%] {
      padding: 10px 24px;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }

    .btn[_ngcontent-%COMP%]:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-cancel[_ngcontent-%COMP%] {
      background-color: #f3f4f6;
      color: #374151;
    }

    .btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {
      background-color: #e5e7eb;
    }

    .btn-submit[_ngcontent-%COMP%] {
      background-color: #3b82f6;
      color: white;
    }

    .btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {
      background-color: #2563eb;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }

    @media (max-width: 640px) {
      .modal-content[_ngcontent-%COMP%] {
        width: 95%;
        margin: 16px;
      }

      .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
        font-size: 1.25rem;
      }

      .modal-body[_ngcontent-%COMP%] {
        padding: 20px;
      }

      .modal-footer[_ngcontent-%COMP%] {
        padding: 12px 20px 20px;
      }
    }`]});let ot=B;const tt={enabled:!0,showOnAllPosts:!0,sectionTitle:"Support This Content",message:"If you found this content helpful, consider supporting the author.",showAfterDisclaimer:!0},yt=[{name:"GPay",url:"",icon:"gpay",enabled:!0,type:"qr",upiId:"anand@oksbi",qrImage:"gpay-anand.png",description:"Pay via UPI using Google Pay or any UPI app"},{name:"PayPal",url:"https://paypal.me/actionanand",icon:"paypal",enabled:!0,type:"redirect",description:"Support via PayPal"},{name:"Buy Me A Coffee",url:"https://buymeacoffee.com/actionanand",icon:"buymeacoffee",enabled:!0,type:"redirect",description:"Buy me a coffee to support my work"},{name:"GitHub Sponsors",url:"https://github.com/sponsors/actionanand",icon:"github-sponsors",enabled:!0,type:"redirect",description:"Become a GitHub sponsor"},{name:"Patreon",url:"https://patreon.com/yourusername",icon:"patreon",enabled:!1,type:"redirect",description:"Support via Patreon"},{name:"Ko-fi",url:"https://ko-fi.com/actionanand",icon:"kofi",enabled:!0,type:"redirect",description:"Support via Ko-fi"}],wn=(o,n)=>n.name;function yn(o,n){if(o&1&&(L(0,"p",4),d(1),k()),o&2){const t=g(2);s(),C(t.getDonationMessage())}}function In(o,n){if(o&1&&(L(0,"a",7)(1,"span",9),d(2),k()()),o&2){const t=n.$implicit;Mt("href",t.url,X)("title",t.description),s(2),C(t.name)}}function On(o,n){if(o&1&&Vt(0,"img",11),o&2){let t;const e=g(3);Mt("src",e.getAssetPath((t=e.gpay())==null?null:t.qrImage),X)("alt","GPay QR for UPI "+(e.getUpiId(e.gpay())||""))}}function Tn(o,n){if(o&1&&(L(0,"div",8)(1,"div",10),m(2,On,1,2,"img",11),L(3,"div",12)(4,"p",13),d(5),k()()()()),o&2){let t,e;const i=g(2);s(),Mt("title",((t=i.gpay())==null?null:t.description)??"UPI via GPay"),s(),h((e=i.gpay())!=null&&e.qrImage?2:-1),s(3),C(i.getUpiId(i.gpay()))}}function kn(o,n){if(o&1&&(L(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),d(4),k(),m(5,yn,2,1,"p",4),k(),L(6,"div",5)(7,"div",6),W(8,In,3,3,"a",7,wn),k(),m(10,Tn,6,3,"div",8),k()()()),o&2){const t=g();s(4),C(t.donationConfig.sectionTitle),s(),h(t.getDonationMessage()?5:-1),s(3),Q(t.redirectPlatforms()),s(2),h(t.gpay()?10:-1)}}const R=class R{constructor(){this.platformId=Ot(ft),this.isBrowser=bt(this.platformId),this.donationConfig=tt,this.redirectPlatforms=xt(()=>yt.filter(n=>n.enabled&&n.type==="redirect")),this.gpay=xt(()=>yt.find(n=>n.enabled&&n.name==="GPay")??null)}shouldShowDonation(){return tt.enabled?this.getPostAttribute("enableDonation")===!1?!1:tt.showOnAllPosts?!0:this.getPostAttribute("enableDonation")===!0:this.getPostAttribute("enableDonation")===!0}getPostAttribute(n){if(!(!this.postAttributes||Object.keys(this.postAttributes).length===0))return this.postAttributes[n]}getDonationMessage(){return this.getPostAttribute("donationMessage")||tt.message||""}getUpiId(n){return n?n.upiId??"":""}getAssetPath(n){if(!n)return"";if(!this.isBrowser)return`/${n}`;const t=document.querySelector("base")?.getAttribute("href")||"/";return`${t.endsWith("/")?t:`${t}/`}${n}`}};R.ɵfac=function(t){return new(t||R)},R.ɵcmp=U({type:R,selectors:[["app-donation"]],inputs:{postAttributes:"postAttributes"},decls:1,vars:1,consts:[[1,"donation-section"],[1,"donation-container"],[1,"donation-header"],[1,"donation-title"],[1,"donation-message"],[1,"donation-platforms"],[1,"donation-row","donation-row-links"],["target","_blank","rel","noopener noreferrer",1,"donation-platform","redirect-platform",3,"href","title"],[1,"donation-row","donation-row-gpay"],[1,"platform-name"],[1,"gpay-card",3,"title"],[1,"gpay-qr",3,"src","alt"],[1,"gpay-upi"],[1,"gpay-upi-id"]],template:function(t,e){t&1&&m(0,kn,11,3,"div",0),t&2&&h(e.shouldShowDonation()?0:-1)},dependencies:[V],styles:[`

.donation-section[_ngcontent-%COMP%] {
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  border: 2px solid #dee2e6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: visible;
}

.donation-container[_ngcontent-%COMP%] {
  max-width: 100%;
}

.donation-header[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 1.5rem;
}

.donation-title[_ngcontent-%COMP%] {
  color: #495057;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.donation-title[_ngcontent-%COMP%]::before, 
.donation-title[_ngcontent-%COMP%]::after {
  content: '';
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, transparent, #6c757d, transparent);
  max-width: 50px;
}

.donation-message[_ngcontent-%COMP%] {
  color: #6c757d;
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.5;
}

.donation-platforms[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}



.donation-row[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.donation-row-gpay[_ngcontent-%COMP%] {
  justify-content: center;
}



.gpay-card[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: white;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  max-width: 260px;
}

.gpay-qr[_ngcontent-%COMP%] {
  max-width: 250px;
  max-height: 250px;
  width: auto;
  height: auto;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  background: white;
}

.gpay-upi-id[_ngcontent-%COMP%] {
  margin: 0 0 0.25rem 0;
  font-size: .8rem;
  color: #495057;
  font-family: monospace;
  background: #f8f9fa;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  font-weight: 600;
}

.gpay-upi-label[_ngcontent-%COMP%] {
  color: #6c757d;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.donation-platform[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.75rem;
  background: white;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
  min-height: 30px;
  text-decoration: none;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: visible;
}



.donation-platform.redirect-platform[_ngcontent-%COMP%] {
  color: inherit;
}

.donation-platform.qr-platform[_ngcontent-%COMP%] {
  background: white;
  border: 2px solid #e9ecef;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  padding: 1rem 0.75rem;
}

.donation-platform.qr-platform[_ngcontent-%COMP%]:active, 
.donation-platform.qr-platform[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #0056b3;
  box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.25);
}

.donation-platform.qr-platform[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.donation-platform[_ngcontent-%COMP%]:hover {
  border-color: #007bff;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 123, 255, 0.15);
  text-decoration: none;
  color: inherit;
}

.platform-name[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 600;
  color: #495057;
  text-align: center;
  line-height: 1.2;
  margin: 0;
}

.donation-platform[_ngcontent-%COMP%]:hover   .platform-name[_ngcontent-%COMP%] {
  color: #007bff;
}



.donation-platform[title*="PayPal"][_ngcontent-%COMP%]:hover {
  border-color: #0070ba;
}

.donation-platform[title*="PayPal"][_ngcontent-%COMP%]:hover   .platform-icon[_ngcontent-%COMP%] {
  color: #0070ba;
}

.donation-platform[title*="Coffee"][_ngcontent-%COMP%]:hover {
  border-color: #ff813f;
}

.donation-platform[title*="Coffee"][_ngcontent-%COMP%]:hover   .platform-icon[_ngcontent-%COMP%] {
  color: #ff813f;
}

.donation-platform[title*="GitHub"][_ngcontent-%COMP%]:hover {
  border-color: #333;
}

.donation-platform[title*="GitHub"][_ngcontent-%COMP%]:hover   .platform-icon[_ngcontent-%COMP%] {
  color: #333;
}

.donation-platform[title*="GPay"][_ngcontent-%COMP%]:hover, 
.donation-platform[title*="UPI"][_ngcontent-%COMP%]:hover {
  border-color: #4285f4;
}

.donation-platform[title*="GPay"][_ngcontent-%COMP%]:hover   .platform-icon[_ngcontent-%COMP%], 
.donation-platform[title*="UPI"][_ngcontent-%COMP%]:hover   .platform-icon[_ngcontent-%COMP%] {
  color: #4285f4;
}

.donation-platform[title*="Patreon"][_ngcontent-%COMP%]:hover {
  border-color: #ff424d;
}

.donation-platform[title*="Patreon"][_ngcontent-%COMP%]:hover   .platform-icon[_ngcontent-%COMP%] {
  color: #ff424d;
}



.qr-modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease, z-index 0s ease 0.3s;
  pointer-events: none;
}

.qr-modal-overlay.show[_ngcontent-%COMP%] {
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.qr-modal[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.qr-modal-overlay.show[_ngcontent-%COMP%]   .qr-modal[_ngcontent-%COMP%] {
  transform: scale(1);
}

.qr-modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 0 1.5rem;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 1rem;
}

.qr-modal-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  margin: 0;
  color: #495057;
  font-size: 1.2rem;
  font-weight: 600;
}

.qr-close-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6c757d;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.qr-close-btn[_ngcontent-%COMP%]:hover {
  background: #f8f9fa;
  color: #495057;
}

.qr-modal-content[_ngcontent-%COMP%] {
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.qr-image-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.qr-image[_ngcontent-%COMP%] {
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  background: white;
  display: block;
  margin: 0 auto;
}

.qr-upi-id[_ngcontent-%COMP%] {
  text-align: center;
}

.qr-upi-id[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  color: #495057;
  font-family: monospace;
  background: #f8f9fa;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  font-weight: 600;
}

.qr-upi-id[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  color: #6c757d;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.qr-code-placeholder[_ngcontent-%COMP%] {
  background: #f8f9fa;
  border: 2px dashed #dee2e6;
  border-radius: 6px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.qr-code-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 2rem;
  color: #6c757d;
}

.qr-code-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 0.8rem;
  color: #495057;
  word-break: break-all;
  font-family: monospace;
  background: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
}



@media (max-width: 768px) {
  .donation-section[_ngcontent-%COMP%] {
    margin: 1.5rem 0;
    padding: 1rem;
  }

  .donation-row[_ngcontent-%COMP%] {
    gap: 0.75rem;
  }

  .donation-platform[_ngcontent-%COMP%] {
    min-width: 100px;
    min-height: 70px;
    padding: 0.75rem 0.5rem;
  }

  .platform-name[_ngcontent-%COMP%] {
    font-size: 0.85rem;
  }

  .qr-modal[_ngcontent-%COMP%] {
    margin: 10px;
    max-width: calc(100vw - 20px);
  }

  .qr-modal-header[_ngcontent-%COMP%] {
    padding: 1rem;
  }

  .qr-modal-content[_ngcontent-%COMP%] {
    padding: 0 1rem 1rem 1rem;
  }

  .qr-image[_ngcontent-%COMP%] {
    max-width: 160px;
    max-height: 160px;
  }
}

@media (max-width: 480px) {
  .donation-title[_ngcontent-%COMP%] {
    font-size: 1.25rem;
  }

  .donation-message[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }

  .donation-row[_ngcontent-%COMP%] {
    gap: 0.5rem;
  }

  .donation-platform[_ngcontent-%COMP%] {
    min-width: 85px;
    min-height: 60px;
    padding: 0.5rem 0.25rem;
  }

  .platform-name[_ngcontent-%COMP%] {
    font-size: 0.8rem;
  }
}



@media (prefers-color-scheme: dark) {
  .donation-section[_ngcontent-%COMP%] {
    background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
    border-color: #4a5568;
  }

  .donation-title[_ngcontent-%COMP%] {
    color: #e2e8f0;
  }

  .donation-message[_ngcontent-%COMP%] {
    color: #a0aec0;
  }

  .donation-platform[_ngcontent-%COMP%] {
    background: #2d3748;
    border-color: #4a5568;
  }

  .platform-name[_ngcontent-%COMP%] {
    color: #e2e8f0;
  }

  .donation-platform[_ngcontent-%COMP%]:hover   .platform-name[_ngcontent-%COMP%] {
    color: #63b3ed;
  }

  .qr-modal[_ngcontent-%COMP%] {
    background: #2d3748;
  }

  .qr-modal-header[_ngcontent-%COMP%] {
    border-color: #4a5568;
  }

  .qr-modal-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
    color: #e2e8f0;
  }

  .qr-close-btn[_ngcontent-%COMP%] {
    color: #a0aec0;
  }

  .qr-close-btn[_ngcontent-%COMP%]:hover {
    background: #4a5568;
    color: #e2e8f0;
  }

  .qr-image[_ngcontent-%COMP%] {
    border-color: #4a5568;
    background: white; 

  }

  .qr-upi-id[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    color: #e2e8f0;
    background: #1a202c;
    border-color: #4a5568;
  }

  .qr-upi-id[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
    color: #a0aec0;
  }
  .gpay-card[_ngcontent-%COMP%] {
    background: #2d3748;
    border-color: #4a5568;
  }

  .gpay-qr[_ngcontent-%COMP%] {
    border-color: #4a5568;
    background: white;
  }

  .gpay-upi-id[_ngcontent-%COMP%] {
    color: #e2e8f0;
    background: #1a202c;
    border-color: #4a5568;
  }

  .gpay-upi-label[_ngcontent-%COMP%] {
    color: #a0aec0;
  }
}`],changeDetection:0});let _t=R;function Sn(o,n){if(o&1){const t=ht();L(0,"button",1),Yt("click",function(){w(t);const i=g();return y(i.scrollToTop())}),d(1," ↑ "),k()}}const G=class G{constructor(n){this.platformId=n,this.isVisible=j(!1),this.scrollThreshold=300,this.onScroll=()=>{this.checkScrollPosition()},this.isBrowser=bt(this.platformId)}ngAfterViewInit(){this.isBrowser&&(window.addEventListener("scroll",this.onScroll,{passive:!0}),this.checkScrollPosition())}ngOnDestroy(){this.isBrowser&&window.removeEventListener("scroll",this.onScroll)}checkScrollPosition(){if(this.isBrowser){const n=window.pageYOffset||document.documentElement.scrollTop;this.isVisible.set(n>this.scrollThreshold)}}scrollToTop(){this.isBrowser&&window.scrollTo({top:0,behavior:"smooth"})}};G.ɵfac=function(t){return new(t||G)(F(ft))},G.ɵcmp=U({type:G,selectors:[["app-scroll-to-top"]],decls:1,vars:1,consts:[["aria-label","Scroll to top","title","Scroll to top",1,"scroll-to-top"],["aria-label","Scroll to top","title","Scroll to top",1,"scroll-to-top",3,"click"]],template:function(t,e){t&1&&m(0,Sn,2,0,"button",0),t&2&&h(e.isVisible()?0:-1)},dependencies:[V],styles:[`.scroll-to-top[_ngcontent-%COMP%] {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: var(--primary-color, #007bff);
      color: white;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
    }

    .scroll-to-top[_ngcontent-%COMP%]:hover {
      opacity: 1;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    .scroll-to-top[_ngcontent-%COMP%]:active {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      .scroll-to-top[_ngcontent-%COMP%] {
        bottom: 1rem;
        right: 1rem;
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.25rem;
      }
    }`]});let ut=G;const Ln=["contentRef"],Lt=o=>["/blog",o],jt=(o,n)=>n.attributes.slug;function jn(o,n){o&1&&v(0,"app-scroll-to-top")}function zn(o,n){if(o&1&&(l(0,"p",6),d(1),I(2,"formatDate"),c()),o&2){const t=g(2);s(),C(O(2,1,t.attributes.date))}}function An(o,n){o&1&&(l(0,"span",8),d(1,"📝 Draft"),c())}function Dn(o,n){o&1&&(l(0,"span",9),d(1,"📌 Pinned"),c())}function Nn(o,n){if(o&1&&(l(0,"span",24),d(1),c()),o&2){const t=n.$implicit;s(),C(t)}}function En(o,n){if(o&1&&W(0,Nn,2,1,"span",24,tn),o&2){const t=g(2);Q(t.attributes.tags)}}function $n(o,n){if(o&1&&(l(0,"div",25)(1,"strong"),d(2,"Author:"),c(),d(3),c()),o&2){const t=g(3);s(3),Y(" ",t.attributes.author," ")}}function Hn(o,n){if(o&1&&(l(0,"div",25)(1,"strong"),d(2,"Epic:"),c(),d(3),c()),o&2){const t=g(3);s(3),Y(" ",t.attributes.epicName," ")}}function Bn(o,n){if(o&1&&(l(0,"div",25)(1,"strong"),d(2,"Verse Number:"),c(),d(3),c()),o&2){const t=g(3);s(3),Y(" ",t.attributes.verseNumber," ")}}function Rn(o,n){if(o&1&&(l(0,"div",25)(1,"strong"),d(2,"Info:"),c(),d(3),c()),o&2){const t=g(3);s(3),Y(" ",t.attributes.articleMetadata," ")}}function Gn(o,n){if(o&1&&(l(0,"div",11),m(1,$n,4,1,"div",25),m(2,Hn,4,1,"div",25),m(3,Bn,4,1,"div",25),m(4,Rn,4,1,"div",25),c()),o&2){const t=g(2);s(),h(t.attributes.author?1:-1),s(),h(t.attributes.epicName?2:-1),s(),h(t.attributes.verseNumber?3:-1),s(),h(t.attributes.articleMetadata?4:-1)}}function Zn(o,n){if(o&1&&v(0,"app-table-of-contents",15),o&2){const t=g(3);b("headings",t.headings)}}function Un(o,n){if(o&1&&(v(0,"analog-markdown",17),I(1,"processFootnotes"),I(2,"admonitionTransform"),I(3,"textFormat"),I(4,"cardFormat"),I(5,"tabs")),o&2){const t=g(2);b("content",O(5,9,O(4,7,O(3,5,O(2,3,O(1,1,typeof t.content=="string"?t.content:""))))))}}function Vn(o,n){if(o&1&&(l(0,"section",18)(1,"div",26),nn(),l(2,"svg",27),v(3,"circle",28)(4,"line",29)(5,"circle",30),c(),en(),l(6,"h4"),d(7,"Disclaimer"),c()(),l(8,"p"),d(9),c()()),o&2){const t=g(3);s(9),C(t.disclaimerText)}}function Yn(o,n){if(o&1&&v(0,"img",33),o&2){const t=g().$implicit,e=g(4);b("src",t.attributes.coverImage||e.defaultCoverImage,X)("alt",t.attributes.title)}}function qn(o,n){if(o&1&&(l(0,"span",36),d(1),I(2,"formatDate"),c()),o&2){const t=g().$implicit;s(),C(O(2,1,t.attributes.date))}}function Fn(o,n){if(o&1&&(l(0,"li",32),m(1,Yn,1,2,"img",33),l(2,"div",34)(3,"a",35),d(4),c(),m(5,qn,3,3,"span",36),c()()),o&2){const t=n.$implicit,e=g(4);s(),h(t.attributes.coverImage||e.defaultCoverImage?1:-1),s(2),b("routerLink",it(4,Lt,t.attributes.slug)),s(),C(t.attributes.title),s(),h(t.attributes.date?5:-1)}}function Wn(o,n){if(o&1&&(l(0,"div",21)(1,"h3"),d(2,"Related Posts"),c(),l(3,"ul",31),W(4,Fn,6,6,"li",32,jt),c()()),o&2){const t=g(3);s(4),Q(t.relatedPosts)}}function Qn(o,n){if(o&1&&v(0,"img",33),o&2){const t=g(2).$implicit,e=g(4);b("src",t.attributes.coverImage||e.defaultCoverImage,X)("alt",t.attributes.title)}}function Jn(o,n){if(o&1&&(l(0,"span",36),d(1),I(2,"formatDate"),c()),o&2){const t=g(2).$implicit;s(),C(O(2,1,t.attributes.date))}}function Xn(o,n){if(o&1&&(l(0,"li",32),m(1,Qn,1,2,"img",33),l(2,"div",34)(3,"a",35),d(4),c(),m(5,Jn,3,3,"span",36),c()()),o&2){const t=g().$implicit,e=g(4);s(),h(t.attributes.coverImage||e.defaultCoverImage?1:-1),s(2),b("routerLink",it(4,Lt,t.attributes.slug)),s(),C(t.attributes.title),s(),h(t.attributes.date?5:-1)}}function Kn(o,n){if(o&1&&m(0,Xn,6,6,"li",32),o&2){const t=n.$implicit,e=g(4);h(t.attributes.slug!==e.currentSlug?0:-1)}}function te(o,n){if(o&1&&(l(0,"div",22)(1,"h3"),d(2,"Recent Posts"),c(),l(3,"ul",31),W(4,Kn,1,1,null,null,jt),c()()),o&2){const t=g(3);s(4),Q(t.recentPosts)}}function ne(o,n){if(o&1&&(l(0,"article",2)(1,"header",4)(2,"h1",5),d(3),c(),m(4,zn,3,3,"p",6),l(5,"div",7),m(6,An,2,0,"span",8),m(7,Dn,2,0,"span",9),l(8,"span",10),d(9),c(),m(10,En,2,0),c(),m(11,Gn,5,4,"div",11),l(12,"p",12),d(13),c()(),v(14,"img",13),l(15,"div",14),m(16,Zn,1,1,"app-table-of-contents",15),l(17,"div",16,0),m(19,Un,6,11,"analog-markdown",17),c()(),m(20,Vn,10,1,"section",18),v(21,"app-donation",19),l(22,"section",20),m(23,Wn,6,0,"div",21)(24,te,6,0,"div",22),c(),v(25,"app-post-navigation",23),c()),o&2){const t=g(),e=g();s(3),C(t.attributes.title),s(),h(t.attributes.date?4:-1),s(2),h(t.attributes.isDraft?6:-1),s(),h(t.attributes.isPinned?7:-1),s(2),C(t.attributes.category||"uncategorized"),s(),h(t.attributes.tags&&t.attributes.tags.length>0?10:-1),s(),h(t.attributes.author||t.attributes.epicName||t.attributes.verseNumber||t.attributes.articleMetadata?11:-1),s(2),C(t.attributes.description),s(),b("src",t.attributes.coverImage||e.defaultCoverImage,X)("alt",t.attributes.title),s(),kt("blog-post__container--no-toc",!e.showToc),s(),h(e.showToc&&e.headings.length>0?16:-1),s(3),h(t.content?19:-1),s(),h(e.showDisclaimer?20:-1),s(),b("postAttributes",t.attributes),s(2),h(e.relatedPosts.length>0?23:24),s(2),b("previousPost",e.previousPost)("nextPost",e.nextPost)}}function ee(o,n){o&1&&(l(0,"div",3)(1,"div",37),d(2,"🔒"),c(),l(3,"h2"),d(4,"Protected Content"),c(),l(5,"p"),d(6,"This article is password protected. Please unlock to view."),c()())}function oe(o,n){if(o&1&&(nt(0,jn,1,0,"app-scroll-to-top",1),m(1,ne,26,19,"article",2)(2,ee,7,0,"div",3)),o&2){const t=g();b("ngIf",n.attributes.scrollToTop),s(),h(t.isContentAccessible()?1:2)}}const Z=class Z{constructor(n,t,e,i){this.cdr=t,this.authService=e,this.router=i,this.post$=qt("slug"),this.defaultCoverImage="tamil-literature-default.svg",this.isContentAccessible=j(!0),this.allPosts=[],this.headings=[],this.relatedPosts=[],this.recentPosts=[],this.previousPost=null,this.nextPost=null,this.currentSlug="",this.showToc=!0,this.showDisclaimer=!0,this.disclaimerText="The views expressed are personal and for informational purposes only.",this.hasExtractedHeadings=!1,this.isBrowser=bt(n);const a=Ft().filter(_=>!_.attributes.isDraft);this.allPosts=a.sort((_,p)=>_.attributes.isPinned&&!p.attributes.isPinned?-1:!_.attributes.isPinned&&p.attributes.isPinned?1:new Date(p.attributes.date||"").getTime()-new Date(_.attributes.date||"").getTime())}async ngOnInit(){this.post$.subscribe(async n=>{n&&(this.currentSlug=n.attributes.slug,n.attributes.enableLock?await this.handleAuthentication():this.isContentAccessible.set(!0),this.showToc=n.attributes.toc!==!1,this.showDisclaimer=n.attributes.disclaimerEnabled!==!1,this.disclaimerText=n.attributes.disclaimerText||this.disclaimerText,this.updateNavigation(),this.updateRelatedPosts(n.attributes.relatedPosts),this.recentPosts=this.allPosts.slice(0,on.articleRecentPostsCount+1),this.headings=[],this.hasExtractedHeadings=!1,this.isBrowser&&setTimeout(()=>{this.setupFootnoteNavigation()},100))})}ngAfterViewInit(){this.updateContentHeadings(),this.isBrowser&&(this.initObserver(),this.setupFootnoteNavigation())}ngAfterViewChecked(){!this.hasExtractedHeadings&&this.contentRef?.nativeElement&&this.isBrowser&&this.contentRef.nativeElement.querySelectorAll("h1, h2, h3, h4").length>0&&this.headings.length===0&&setTimeout(()=>{this.updateContentHeadings(),this.cdr.detectChanges()},0)}ngOnDestroy(){this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}updateContentHeadings(){if(!this.isBrowser||!this.contentRef?.nativeElement)return;const n=this.contentRef.nativeElement,t=n.querySelectorAll("h1, h2, h3, h4");if(t.length===0)return;t.forEach(r=>{if(!r.id){const a=r.textContent||"";r.id=this.slugify(a)}});const e=n.innerHTML,i=rn(e);i.length>0&&!this.hasExtractedHeadings&&(this.headings=i,this.hasExtractedHeadings=!0)}initObserver(){this.isBrowser&&this.contentRef?.nativeElement&&(this.mutationObserver||(this.mutationObserver=new MutationObserver(()=>{this.updateContentHeadings(),this.setupFootnoteNavigation()}),this.mutationObserver.observe(this.contentRef.nativeElement,{childList:!0,subtree:!0,characterData:!0})))}setupFootnoteNavigation(){if(!this.isBrowser)return;const n=document.querySelector("article.blog-post");if(!n)return;const t=n.cloneNode(!0);n.parentNode&&n.parentNode.replaceChild(t,n);const e=i=>{const a=i.target.getAttribute("data-fn");if(a){i.preventDefault(),i.stopPropagation();const _=a,p=document.getElementById(_);if(p){p.scrollIntoView({behavior:"smooth",block:"start"});const M=document.querySelector("base")?.getAttribute("href")||"/",f=`${M.endsWith("/")?M:`${M}/`}blog/${this.currentSlug}#${_}`;console.log("Updating URL to:",f),window.history.replaceState(null,"",f)}}};t.addEventListener("click",i=>{const r=i.target;(r.classList.contains("footnote-ref")||r.classList.contains("footnote-backref"))&&e(i)})}slugify(n){return n.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}updateNavigation(){const n=this.allPosts.findIndex(t=>t.attributes.slug===this.currentSlug);n>0?this.previousPost=this.allPosts[n-1]:this.previousPost=null,n<this.allPosts.length-1?this.nextPost=this.allPosts[n+1]:this.nextPost=null}updateRelatedPosts(n){if(this.relatedPosts=[],!n||n.length===0)return;n.slice(0,5).forEach(e=>{const i=this.allPosts.find(r=>r.attributes.slug===e);i&&this.relatedPosts.push(i)})}async handleAuthentication(){if(this.authService.isAuthenticated()){this.isContentAccessible.set(!0);return}this.isContentAccessible.set(!1),setTimeout(async()=>{this.passwordModal&&(await this.passwordModal.show()?(this.isContentAccessible.set(!0),this.cdr.detectChanges()):this.router.navigate(["/blog"]))},100)}};Z.ɵfac=function(t){return new(t||Z)(F(ft),F(Wt),F(et),F(Qt))},Z.ɵcmp=U({type:Z,selectors:[["app-blog-post"]],viewQuery:function(t,e){if(t&1&&Kt(Ln,5)(ot,5),t&2){let i;Pt(i=vt())&&(e.contentRef=i.first),Pt(i=vt())&&(e.passwordModal=i.first)}},decls:3,vars:3,consts:[["contentRef",""],[4,"ngIf"],[1,"blog-post"],[1,"locked-content"],[1,"blog-post__header"],[1,"blog-post__title"],[1,"blog-post__date"],[1,"blog-post__meta"],[1,"post-meta-tag","draft-tag"],[1,"post-meta-tag","pinned-tag"],[1,"post-meta-tag","category-tag"],[1,"blog-post__article-meta"],[1,"blog-post__description"],[1,"blog-post__image",3,"src","alt"],[1,"blog-post__container"],[1,"blog-post__toc",3,"headings"],[1,"blog-post__content"],[3,"content"],[1,"blog-post__disclaimer"],[3,"postAttributes"],[1,"blog-post__related"],[1,"related-posts"],[1,"recent-posts"],[3,"previousPost","nextPost"],[1,"post-meta-tag","tag-tag"],[1,"article-meta-item"],[1,"disclaimer-header"],["viewBox","0 0 24 24","fill","currentColor",1,"disclaimer-icon"],["cx","12","cy","12","r","10","fill","none","stroke","currentColor","stroke-width","2"],["x1","12","y1","8","x2","12","y2","12","stroke","currentColor","stroke-width","2","stroke-linecap","round"],["cx","12","cy","16","r","0.5","fill","currentColor"],[1,"posts-list"],[1,"post-item"],[1,"post-thumbnail",3,"src","alt"],[1,"post-info"],[1,"post-link",3,"routerLink"],[1,"post-date"],[1,"locked-icon"]],template:function(t,e){if(t&1&&(v(0,"app-password-modal"),m(1,oe,3,2),I(2,"async")),t&2){let i;s(),h((i=O(2,1,e.post$))?1:-1,i)}},dependencies:[V,Tt,mt,Jt,rt,st,ot,_t,ut,Xt,ct,lt,dt,pt,gt,an],styles:[`.blog-post[_ngcontent-%COMP%] {
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
    }

    .locked-content[_ngcontent-%COMP%] {
      max-width: 600px;
      margin: 4rem auto;
      padding: 3rem 2rem;
      text-align: center;
      background: #f8f9fa;
      border: 2px dashed #dee2e6;
      border-radius: 12px;
    }

    .locked-icon[_ngcontent-%COMP%] {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      opacity: 0.6;
    }

    .locked-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
      margin: 0 0 1rem 0;
      color: #495057;
      font-size: 1.75rem;
    }

    .locked-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
      margin: 0;
      color: #6c757d;
      font-size: 1.125rem;
    }`]});let It=Z;export{It as default};
