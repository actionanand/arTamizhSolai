import{ɵ as H,C as Y,N as un,R as q,g,l as _,a as r,b as c,c as s,h as G,n as l,k as a,m as U,o as rn,p as v,t as m,B as mn,v as D,w,x as I,u as V,r as C,e as P,D as cn,E,F as Mn,G as fn,H as A,I as hn,J as bn,K as Cn,L as xn,M as Pn,O as F,P as wn,q as ln,Q as In,S as yn,T as vn,U as Ln,V as Tn,i as On,f as B,W as jn,X as Nn,Y as Sn,Z as kn,_ as Dn,$ as W,a0 as $,a1 as zn,a2 as en,a3 as on,z as nn,j as An,d as En,a4 as Bn}from"./index-BD8V2xkJ.js";import{p as Zn}from"./pagination-config-BIRU8DJ8.js";function Rn(e){const t=[],n=/<h([1-4])[^>]*?(?:id=\"([^\"]*)\")?[^>]*>([\s\S]*?)<\/h\1>/gi;let o;for(;(o=n.exec(e))!==null;){const i=parseInt(o[1],10),d=o[2]||Hn(sn(o[3])),M=Yn(sn(o[3]).trim());t.push({level:i,text:M,id:d})}return t}function sn(e){return e.replace(/<[^>]*>/g,"")}function Hn(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function Yn(e){return e.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'")}const Gn=()=>[],Un=(e,t)=>t.id;function Vn(e,t){if(e&1){const n=rn();r(0,"li",4)(1,"a",5),v("click",function(){const i=w(n).$implicit,d=l(2);return I(d.scrollToElement(i.id))}),c(2),s()()}if(e&2){const n=t.$implicit;m("ngClass","toc__item--level-"+n.level),a(),m("routerLink",mn(4,Gn))("fragment",n.id),a(),D(" ",n.text," ")}}function Fn(e,t){if(e&1&&(r(0,"aside",0)(1,"nav",1)(2,"h3",2),c(3,"Table of Contents"),s(),r(4,"ul",3),G(5,Vn,3,5,"li",4,Un),s()()()),e&2){const n=l();a(5),U(n.headings)}}const T=class T{constructor(){this.headings=[]}scrollToElement(t){setTimeout(()=>{const n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})},0)}};T.ɵfac=function(n){return new(n||T)},T.ɵcmp=H({type:T,selectors:[["app-table-of-contents"]],inputs:{headings:"headings"},decls:1,vars:1,consts:[[1,"toc"],[1,"toc__nav"],[1,"toc__title"],[1,"toc__list"],[1,"toc__item",3,"ngClass"],[1,"toc__link",3,"click","routerLink","fragment"]],template:function(n,o){n&1&&g(0,Fn,7,0,"aside",0),n&2&&_(o.headings.length>0?0:-1)},dependencies:[Y,un,q],styles:[`.toc[_ngcontent-%COMP%] {
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
    }`]});let Q=T;const dn=e=>["/blog",e];function Wn(e,t){if(e&1&&(r(0,"a",1)(1,"span",4),c(2,"← Previous"),s(),r(3,"span",5),c(4),s()()),e&2){const n=l();m("routerLink",V(2,dn,n.previousPost.attributes.slug)),a(4),C(n.previousPost.attributes.title)}}function $n(e,t){e&1&&P(0,"div",2)}function Qn(e,t){if(e&1&&(r(0,"a",3)(1,"span",4),c(2,"Next →"),s(),r(3,"span",5),c(4),s()()),e&2){const n=l();m("routerLink",V(2,dn,n.nextPost.attributes.slug)),a(4),C(n.nextPost.attributes.title)}}function Jn(e,t){e&1&&P(0,"div",2)}const O=class O{constructor(){this.previousPost=null,this.nextPost=null}};O.ɵfac=function(n){return new(n||O)},O.ɵcmp=H({type:O,selectors:[["app-post-navigation"]],inputs:{previousPost:"previousPost",nextPost:"nextPost"},decls:5,vars:2,consts:[[1,"post-nav"],[1,"post-nav__link","post-nav__link--prev",3,"routerLink"],[1,"post-nav__placeholder"],[1,"post-nav__link","post-nav__link--next",3,"routerLink"],[1,"post-nav__label"],[1,"post-nav__title"]],template:function(n,o){n&1&&(r(0,"nav",0),g(1,Wn,5,4,"a",1)(2,$n,1,0,"div",2),g(3,Qn,5,4,"a",3)(4,Jn,1,0,"div",2),s()),n&2&&(a(),_(o.previousPost?1:2),a(2),_(o.nextPost?3:4))},dependencies:[q,Y],styles:[`.post-nav[_ngcontent-%COMP%] {
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
    }`]});let J=O;const Xn={tip:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbDpub25lO3N0cm9rZTojMDgzMmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LmNscy0xe3N0cm9rZS13aWR0aDoycHg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT48L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LDEzLjFhOCw4LDAsMSwwLTEzLjYsNS43QTUuMDcsNS4wNywwLDAsMSwxMiwyMi40VjIzaDh2LS41M2E1LjIzLDUuMjMsMCwwLDEsMS42My0zLjY5QTgsOCwwLDAsMCwyNCwxMy4xWiI+PC9wYXRoPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjEyIiB4Mj0iMjAiIHkxPSIyNiIgeTI9IjI2Ij48L2xpbmU+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTMiIHgyPSIxOSIgeTE9IjI3IiB5Mj0iMjciPjwvbGluZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxNiIgeDI9IjE2IiB5MT0iMjgiIHkyPSIyNyI+PC9saW5lPjxwb2x5bGluZSBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTYgMTIuNDIgMTUgMTUuMjUgMTcgMTUuMjUgMTYgMTguMTciPjwvcG9seWxpbmU+PC9zdmc+",warning:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBzdHJva2U9IiM1MzUzNTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuMTIgNC42MjNhMSAxIDAgMDExLjc2IDBsMTEuMzIgMjAuOUExIDEgMCAwMTI3LjMyMSAyN0g0LjY3OWExIDEgMCAwMS0uODgtMS40NzZsMTEuMzIyLTIwLjl6TTE2IDE4di02Ii8+DQogIDxwYXRoIGZpbGw9IiM1MzUzNTgiIGQ9Ik0xNy41IDIyLjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6Ii8+DQo8L3N2Zz4=",danger:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE3LjY2IDExLjJjLS4yMy0uMy0uNTEtLjU2LS43Ny0uODItLjY3LS42LTEuNDMtMS4wMy0yLjA3LTEuNjZDMTMuMzMgNy4yNiAxMyA0Ljg1IDEzLjk1IDNjLS45NS4yMy0xLjc4Ljc1LTIuNDkgMS4zMi0yLjU5IDIuMDgtMy42MSA1Ljc1LTIuMzkgOC45LjA0LjEuMDguMi4wOC4zMyAwIC4yMi0uMTUuNDItLjM1LjUtLjIzLjEtLjQ3LjA0LS42Ni0uMTJhLjU4LjU4IDAgMCAxLS4xNC0uMTdjLTEuMTMtMS40My0xLjMxLTMuNDgtLjU1LTUuMTJDNS43OCAxMCA0Ljg3IDEyLjMgNSAxNC40N2MuMDYuNS4xMiAxIC4yOSAxLjUuMTQuNi40MSAxLjIuNzEgMS43MyAxLjA4IDEuNzMgMi45NSAyLjk3IDQuOTYgMy4yMiAyLjE0LjI3IDQuNDMtLjEyIDYuMDctMS42IDEuODMtMS42NiAyLjQ3LTQuMzIgMS41My02LjZsLS4xMy0uMjZjLS4yMS0uNDYtLjc3LTEuMjYtLjc3LTEuMjZtLTMuMTYgNi4zYy0uMjguMjQtLjc0LjUtMS4xLjYtMS4xMi40LTIuMjQtLjE2LTIuOS0uODIgMS4xOS0uMjggMS45LTEuMTYgMi4xMS0yLjA1LjE3LS44LS4xNS0xLjQ2LS4yOC0yLjIzLS4xMi0uNzQtLjEtMS4zNy4xNy0yLjA2LjE5LjM4LjM5Ljc2LjYzIDEuMDYuNzcgMSAxLjk4IDEuNDQgMi4yNCAyLjguMDQuMTQuMDYuMjguMDYuNDMuMDMuODItLjMzIDEuNzItLjkzIDIuMjd6Ii8+PC9zdmc+",info:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE2MCIgd2lkdGg9IjE2MCIgdmVyc2lvbj0iMS4wIj4KIDxnIGZpbGw9IiM0YjRiNGIiPgogIDxwYXRoIGQ9Im04MCAxNWMtMzUuODggMC02NSAyOS4xMi02NSA2NXMyOS4xMiA2NSA2NSA2NSA2NS0yOS4xMiA2NS02NS0yOS4xMi02NS02NS02NXptMCAxMGMzMC4zNiAwIDU1IDI0LjY0IDU1IDU1cy0yNC42NCA1NS01NSA1NS01NS0yNC42NC01NS01NSAyNC42NC01NSA1NS01NXoiLz4KICA8cGF0aCBkPSJtNTcuMzczIDE4LjIzMWE5LjM4MzQgOS4xMTUzIDAgMSAxIC0xOC43NjcgMCA5LjM4MzQgOS4xMTUzIDAgMSAxIDE4Ljc2NyAweiIgdHJhbnNmb3JtPSJtYXRyaXgoMS4xOTg5IDAgMCAxLjIzNDIgMjEuMjE0IDI4Ljc1KSIvPgogIDxwYXRoIGQ9Im05MC42NjUgMTEwLjk2Yy0wLjA2OSAyLjczIDEuMjExIDMuNSA0LjMyNyAzLjgybDUuMDA4IDAuMXY1LjEyaC0zOS4wNzN2LTUuMTJsNS41MDMtMC4xYzMuMjkxLTAuMSA0LjA4Mi0xLjM4IDQuMzI3LTMuODJ2LTMwLjgxM2MwLjAzNS00Ljg3OS02LjI5Ni00LjExMy0xMC43NTctMy45Njh2LTUuMDc0bDMwLjY2NS0xLjEwNSIvPgogPC9nPgo8L3N2Zz4K",note:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzM4M2Q0MSIgZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMy4wMiAxNy4yNXptMTcuNzEtMTAuMjFjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6Ii8+PC9zdmc+",success:"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzBmNTEzMiIgZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxTDkgMTYuMTd6Ii8+PC9zdmc+",caution:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiPg0KICA8cGF0aCBzdHJva2U9IiM1MzUzNTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTUuMTIgNC42MjNhMSAxIDAgMDExLjc2IDBsMTEuMzIgMjAuOUExIDEgMCAwMTI3LjMyMSAyN0g0LjY3OWExIDEgMCAwMS0uODgtMS40NzZsMTEuMzIyLTIwLjl6TTE2IDE4di02Ii8+DQogIDxwYXRoIGZpbGw9IiM1MzUzNTgiIGQ9Ik0xNy41IDIyLjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6Ii8+DQo8L3N2Zz4="};function Kn(e){const t=/:::(\w+)(?:\[(.*?)\])?\s*\n([\s\S]*?)\n:::/g;return e.replace(t,(n,o,i,d)=>{if(o=o.toLowerCase(),!["tip","warning","danger","info","note","collapse","success","caution"].includes(o))return n;const h=i||{tip:"Tip",warning:"Warning",danger:"Danger",info:"Info",note:"Note",success:"Success",caution:"Caution",collapse:"Details"}[o],y=o==="collapse",u=d.trim(),p=Xn[o]||"";return y?`<details class="admonition admonition--collapse">
<summary class="admonition__title">
<span class="admonition__icon"></span>
${h}
</summary>
<div class="admonition__content">

${u}

</div>
</details>`:`<div class="admonition admonition--${o}">
<div class="admonition__title">
<img class="admonition__icon" src="${p}" alt="${o}" />
${h}
</div>
<div class="admonition__content">

${u}

</div>
</div>`})}const j=class j{transform(t){return t&&typeof t=="string"?Kn(t):""}};j.ɵfac=function(n){return new(n||j)},j.ɵpipe=cn({name:"admonitionTransform",type:j,pure:!0});let X=j;const N=class N{transform(t){if(!t)return"";const n=new Map;let o=t;const i=/:::footnotes\s*\n([\s\S]*?)\n:::/g,d=i.exec(t);if(d){const u=d[1],p=/^\[\^([^\]]+)\]:\s*(.+)$/gm;let f;for(;(f=p.exec(u))!==null;){const b=f[1].trim(),z=f[2].trim();b&&n.set(b,z)}o=t.replace(i,"").trim()}else{const p=/\n\n(\[\^[^\]]+\]:.+\n?)+$/.exec(t);if(p){const f=p[0],b=/^\[\^([^\]]+)\]:\s*(.+)$/gm;let z;for(;(z=b.exec(f))!==null;){const tn=z[1].trim(),pn=z[2].trim();tn&&n.set(tn,pn)}o=t.substring(0,t.length-f.length).trim()}}const M=new Map,x=new Map;let h=0;const y=/\[\^([^\]]+)\]/g;if(o.replace(y,(u,p)=>{const f=String(p).trim();return M.has(f)||(h+=1,M.set(f,h),x.set(h,f)),""}),o=o.replace(y,(u,p)=>{const f=String(p).trim(),b=M.get(f);return b?`<sup><a data-fn="fn-${b}" id="fnref-${b}" class="footnote-ref" role="button" tabindex="0">[${b}]</a></sup>`:u}),M.size>0){let u=`

<section class="blog-post__footnotes">
`;u+=`<div class="footnotes-header">
`,u+=`<span class="footnotes-icon">📝</span>
`,u+=`<span class="footnotes-title">Footnotes</span>
`,u+=`</div>
`,u+=`<ol>
`;for(let p=1;p<=M.size;p++){const f=x.get(p);let b=n.get(f)||"";b=this.parseMarkdownLinks(b),u+=`<li id="fn-${p}"><p>${b} <a data-fn="fnref-${p}" class="footnote-backref" role="button" tabindex="0" title="Back to reference">↩</a></p></li>
`}u+=`</ol>
</section>
`,o+=u}return o}parseMarkdownLinks(t){return t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(n,o,i)=>{let d=i;return!i.startsWith("http://")&&!i.startsWith("https://")&&!i.startsWith("/")&&(d=`https://${i}`),`<a href="${d}" target="_blank" rel="noopener noreferrer">${o}</a>`})}};N.ɵfac=function(n){return new(n||N)},N.ɵpipe=cn({name:"processFootnotes",type:N,pure:!0});let K=N;const L=class L{constructor(){this.STORAGE_KEY="blog_auth_cache",this.EXPIRY_TIME=E.expiryTime}async sha1(t){const n=new TextEncoder().encode(t),o=await crypto.subtle.digest("SHA-1",n);return Array.from(new Uint8Array(o)).map(M=>M.toString(16).padStart(2,"0")).join("")}async validatePassword(t){return await this.sha1(t)===E.passwordHash}isAuthenticated(){const t=this.getCachedAuth();return t?Date.now()-t.timestamp>this.EXPIRY_TIME?(this.clearCache(),!1):t.hash===E.passwordHash:!1}saveAuth(){const t={hash:E.passwordHash,timestamp:Date.now()};localStorage.setItem(this.STORAGE_KEY,JSON.stringify(t))}getCachedAuth(){try{const t=localStorage.getItem(this.STORAGE_KEY);return t?JSON.parse(t):null}catch{return null}}clearCache(){localStorage.removeItem(this.STORAGE_KEY)}getRemainingTime(){const t=this.getCachedAuth();if(!t)return 0;const n=Date.now()-t.timestamp;return Math.max(0,this.EXPIRY_TIME-n)}};L.ɵfac=function(n){return new(n||L)},L.ɵprov=Mn({token:L,factory:L.ɵfac,providedIn:"root"});let Z=L;function qn(e,t){e&1&&(r(0,"span"),c(1,"👁️"),s())}function nt(e,t){e&1&&(r(0,"span"),c(1,"🙈"),s())}function tt(e,t){if(e&1&&(r(0,"p",16),c(1),s()),e&2){const n=l(2);a(),C(n.errorMessage())}}function et(e,t){if(e&1){const n=rn();r(0,"div",2),v("click",function(i){w(n);const d=l();return I(d.onOverlayClick(i))}),r(1,"div",3),v("click",function(i){return w(n),I(i.stopPropagation())}),r(2,"div",4)(3,"h2"),c(4,"🔒 Protected Content"),s(),r(5,"button",5),v("click",function(){w(n);const i=l();return I(i.cancel())}),c(6,"×"),s()(),r(7,"div",6)(8,"p",7),c(9,"This article is password protected. Please enter the password to continue."),s(),r(10,"div",8)(11,"input",9,0),wn("ngModelChange",function(i){w(n);const d=l();return vn(d.password,i)||(d.password=i),I(i)}),v("keyup.enter",function(){w(n);const i=l();return I(i.submit())}),s(),r(13,"button",10),v("click",function(){w(n);const i=l();return I(i.togglePasswordVisibility())}),F(14,qn,2,0,"span",11)(15,nt,2,0,"span",11),s()(),F(16,tt,2,1,"p",12),s(),r(17,"div",13)(18,"button",14),v("click",function(){w(n);const i=l();return I(i.cancel())}),c(19,"Cancel"),s(),r(20,"button",15),v("click",function(){w(n);const i=l();return I(i.submit())}),c(21),s()()()()}if(e&2){const n=l();a(11),ln("error",n.errorMessage()),m("type",n.showPassword()?"text":"password"),In("ngModel",n.password),a(2),yn("aria-label",n.showPassword()?"Hide password":"Show password"),a(),m("ngIf",!n.showPassword()),a(),m("ngIf",n.showPassword()),a(),m("ngIf",n.errorMessage()),a(4),m("disabled",n.isValidating()),a(),D(" ",n.isValidating()?"Validating...":"Unlock"," ")}}const S=class S{constructor(){this.authService=fn(Z),this.isVisible=A(!1),this.password="",this.showPassword=A(!1),this.errorMessage=A(""),this.isValidating=A(!1)}show(){return this.isVisible.set(!0),this.password="",this.showPassword.set(!1),this.errorMessage.set(""),this.isValidating.set(!1),new Promise(t=>{this.resolvePromise=t})}hide(){this.isVisible.set(!1),this.password="",this.errorMessage.set("")}togglePasswordVisibility(){this.showPassword.set(!this.showPassword())}onOverlayClick(t){this.cancel()}async submit(){if(!this.password.trim()){this.errorMessage.set("Please enter a password");return}this.isValidating.set(!0),this.errorMessage.set("");try{await this.authService.validatePassword(this.password)?(this.authService.saveAuth(),this.hide(),this.resolvePromise?.(!0)):(this.errorMessage.set("Incorrect password. Please try again."),this.password="")}catch(t){this.errorMessage.set("An error occurred. Please try again."),console.error("Password validation error:",t)}finally{this.isValidating.set(!1)}}cancel(){this.hide(),this.resolvePromise?.(!1)}};S.ɵfac=function(n){return new(n||S)},S.ɵcmp=H({type:S,selectors:[["app-password-modal"]],decls:1,vars:1,consts:[["passwordInput",""],["class","modal-overlay",3,"click",4,"ngIf"],[1,"modal-overlay",3,"click"],[1,"modal-content",3,"click"],[1,"modal-header"],["aria-label","Close",1,"close-btn",3,"click"],[1,"modal-body"],[1,"modal-message"],[1,"password-input-group"],["placeholder","Enter password","autofocus","",1,"password-input",3,"ngModelChange","keyup.enter","type","ngModel"],["type","button",1,"toggle-password-btn",3,"click"],[4,"ngIf"],["class","error-message",4,"ngIf"],[1,"modal-footer"],[1,"btn","btn-cancel",3,"click"],[1,"btn","btn-submit",3,"click","disabled"],[1,"error-message"]],template:function(n,o){n&1&&F(0,et,22,10,"div",1),n&2&&m("ngIf",o.isVisible())},dependencies:[Y,hn,bn,Cn,xn,Pn],styles:[`.modal-overlay[_ngcontent-%COMP%] {
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
    }`]});let R=S;const ot=["contentRef"],gn=e=>["/blog",e],_n=(e,t)=>t.attributes.slug;function it(e,t){if(e&1&&(r(0,"p",5),c(1),s()),e&2){const n=l(2);a(),C(n.attributes.date)}}function st(e,t){e&1&&(r(0,"span",7),c(1,"📝 Draft"),s())}function at(e,t){e&1&&(r(0,"span",8),c(1,"📌 Pinned"),s())}function rt(e,t){if(e&1&&(r(0,"span",22),c(1),s()),e&2){const n=t.$implicit;a(),C(n)}}function ct(e,t){if(e&1&&G(0,rt,2,1,"span",22,An),e&2){const n=l(2);U(n.attributes.tags)}}function lt(e,t){if(e&1&&(r(0,"div",23)(1,"strong"),c(2,"Author:"),s(),c(3),s()),e&2){const n=l(3);a(3),D(" ",n.attributes.author," ")}}function dt(e,t){if(e&1&&(r(0,"div",23)(1,"strong"),c(2,"Epic:"),s(),c(3),s()),e&2){const n=l(3);a(3),D(" ",n.attributes.epicName," ")}}function gt(e,t){if(e&1&&(r(0,"div",23)(1,"strong"),c(2,"Verse Number:"),s(),c(3),s()),e&2){const n=l(3);a(3),D(" ",n.attributes.verseNumber," ")}}function _t(e,t){if(e&1&&(r(0,"div",23)(1,"strong"),c(2,"Info:"),s(),c(3),s()),e&2){const n=l(3);a(3),D(" ",n.attributes.articleMetadata," ")}}function pt(e,t){if(e&1&&(r(0,"div",10),g(1,lt,4,1,"div",23),g(2,dt,4,1,"div",23),g(3,gt,4,1,"div",23),g(4,_t,4,1,"div",23),s()),e&2){const n=l(2);a(),_(n.attributes.author?1:-1),a(),_(n.attributes.epicName?2:-1),a(),_(n.attributes.verseNumber?3:-1),a(),_(n.attributes.articleMetadata?4:-1)}}function ut(e,t){if(e&1&&P(0,"app-table-of-contents",14),e&2){const n=l(3);m("headings",n.headings)}}function mt(e,t){if(e&1&&(P(0,"analog-markdown",16),W(1,"processFootnotes"),W(2,"admonitionTransform")),e&2){const n=l(2);m("content",$(2,3,$(1,1,typeof n.content=="string"?n.content:"")))}}function Mt(e,t){if(e&1&&(r(0,"section",17)(1,"div",24),En(),r(2,"svg",25),P(3,"circle",26)(4,"line",27)(5,"circle",28),s(),Bn(),r(6,"h4"),c(7,"Disclaimer"),s()(),r(8,"p"),c(9),s()()),e&2){const n=l(3);a(9),C(n.disclaimerText)}}function ft(e,t){if(e&1&&P(0,"img",31),e&2){const n=l().$implicit,o=l(4);m("src",n.attributes.coverImage||o.defaultCoverImage,nn)("alt",n.attributes.title)}}function ht(e,t){if(e&1&&(r(0,"span",34),c(1),s()),e&2){const n=l().$implicit;a(),C(n.attributes.date)}}function bt(e,t){if(e&1&&(r(0,"li",30),g(1,ft,1,2,"img",31),r(2,"div",32)(3,"a",33),c(4),s(),g(5,ht,2,1,"span",34),s()()),e&2){const n=t.$implicit,o=l(4);a(),_(n.attributes.coverImage||o.defaultCoverImage?1:-1),a(2),m("routerLink",V(4,gn,n.attributes.slug)),a(),C(n.attributes.title),a(),_(n.attributes.date?5:-1)}}function Ct(e,t){if(e&1&&(r(0,"div",19)(1,"h3"),c(2,"Related Posts"),s(),r(3,"ul",29),G(4,bt,6,6,"li",30,_n),s()()),e&2){const n=l(3);a(4),U(n.relatedPosts)}}function xt(e,t){if(e&1&&P(0,"img",31),e&2){const n=l(2).$implicit,o=l(4);m("src",n.attributes.coverImage||o.defaultCoverImage,nn)("alt",n.attributes.title)}}function Pt(e,t){if(e&1&&(r(0,"span",34),c(1),s()),e&2){const n=l(2).$implicit;a(),C(n.attributes.date)}}function wt(e,t){if(e&1&&(r(0,"li",30),g(1,xt,1,2,"img",31),r(2,"div",32)(3,"a",33),c(4),s(),g(5,Pt,2,1,"span",34),s()()),e&2){const n=l().$implicit,o=l(4);a(),_(n.attributes.coverImage||o.defaultCoverImage?1:-1),a(2),m("routerLink",V(4,gn,n.attributes.slug)),a(),C(n.attributes.title),a(),_(n.attributes.date?5:-1)}}function It(e,t){if(e&1&&g(0,wt,6,6,"li",30),e&2){const n=t.$implicit,o=l(4);_(n.attributes.slug!==o.currentSlug?0:-1)}}function yt(e,t){if(e&1&&(r(0,"div",20)(1,"h3"),c(2,"Recent Posts"),s(),r(3,"ul",29),G(4,It,1,1,null,null,_n),s()()),e&2){const n=l(3);a(4),U(n.recentPosts)}}function vt(e,t){if(e&1&&(r(0,"article",1)(1,"header",3)(2,"h1",4),c(3),s(),g(4,it,2,1,"p",5),r(5,"div",6),g(6,st,2,0,"span",7),g(7,at,2,0,"span",8),r(8,"span",9),c(9),s(),g(10,ct,2,0),s(),g(11,pt,5,4,"div",10),r(12,"p",11),c(13),s()(),P(14,"img",12),r(15,"div",13),g(16,ut,1,1,"app-table-of-contents",14),r(17,"div",15,0),g(19,mt,3,5,"analog-markdown",16),s()(),g(20,Mt,10,1,"section",17),r(21,"section",18),g(22,Ct,6,0,"div",19)(23,yt,6,0,"div",20),s(),P(24,"app-post-navigation",21),s()),e&2){const n=l(),o=l();a(3),C(n.attributes.title),a(),_(n.attributes.date?4:-1),a(2),_(n.attributes.isDraft?6:-1),a(),_(n.attributes.isPinned?7:-1),a(2),C(n.attributes.category||"uncategorized"),a(),_(n.attributes.tags&&n.attributes.tags.length>0?10:-1),a(),_(n.attributes.author||n.attributes.epicName||n.attributes.verseNumber||n.attributes.articleMetadata?11:-1),a(2),C(n.attributes.description),a(),m("src",n.attributes.coverImage||o.defaultCoverImage,nn)("alt",n.attributes.title),a(),ln("blog-post__container--no-toc",!o.showToc),a(),_(o.showToc&&o.headings.length>0?16:-1),a(3),_(n.content?19:-1),a(),_(o.showDisclaimer?20:-1),a(2),_(o.relatedPosts.length>0?22:23),a(2),m("previousPost",o.previousPost)("nextPost",o.nextPost)}}function Lt(e,t){e&1&&(r(0,"div",2)(1,"div",35),c(2,"🔒"),s(),r(3,"h2"),c(4,"Protected Content"),s(),r(5,"p"),c(6,"This article is password protected. Please unlock to view."),s()())}function Tt(e,t){if(e&1&&g(0,vt,25,18,"article",1)(1,Lt,7,0,"div",2),e&2){const n=l();_(n.isContentAccessible()?0:1)}}const k=class k{constructor(t,n,o,i){this.cdr=n,this.authService=o,this.router=i,this.post$=Ln("slug"),this.defaultCoverImage="tamil-literature-default.svg",this.isContentAccessible=A(!0),this.allPosts=[],this.headings=[],this.relatedPosts=[],this.recentPosts=[],this.previousPost=null,this.nextPost=null,this.currentSlug="",this.showToc=!0,this.showDisclaimer=!0,this.disclaimerText="The views expressed are personal and for informational purposes only.",this.hasExtractedHeadings=!1,this.isBrowser=Tn(t);const M=On().filter(x=>!x.attributes.isDraft);this.allPosts=M.sort((x,h)=>x.attributes.isPinned&&!h.attributes.isPinned?-1:!x.attributes.isPinned&&h.attributes.isPinned?1:new Date(h.attributes.date||"").getTime()-new Date(x.attributes.date||"").getTime())}async ngOnInit(){this.post$.subscribe(async t=>{t&&(this.currentSlug=t.attributes.slug,t.attributes.enableLock?await this.handleAuthentication():this.isContentAccessible.set(!0),this.showToc=t.attributes.toc!==!1,this.showDisclaimer=t.attributes.disclaimerEnabled!==!1,this.disclaimerText=t.attributes.disclaimerText||this.disclaimerText,this.updateNavigation(),this.updateRelatedPosts(t.attributes.relatedPosts),this.recentPosts=this.allPosts.slice(0,Zn.articleRecentPostsCount+1),this.headings=[],this.hasExtractedHeadings=!1,this.isBrowser&&setTimeout(()=>{this.setupFootnoteNavigation()},100))})}ngAfterViewInit(){this.updateContentHeadings(),this.isBrowser&&(this.initObserver(),this.setupFootnoteNavigation())}ngAfterViewChecked(){!this.hasExtractedHeadings&&this.contentRef?.nativeElement&&this.isBrowser&&this.contentRef.nativeElement.querySelectorAll("h1, h2, h3, h4").length>0&&this.headings.length===0&&setTimeout(()=>{this.updateContentHeadings(),this.cdr.detectChanges()},0)}ngOnDestroy(){this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}updateContentHeadings(){if(!this.isBrowser||!this.contentRef?.nativeElement)return;const t=this.contentRef.nativeElement,n=t.querySelectorAll("h1, h2, h3, h4");if(n.length===0)return;n.forEach(d=>{if(!d.id){const M=d.textContent||"";d.id=this.slugify(M)}});const o=t.innerHTML,i=Rn(o);i.length>0&&!this.hasExtractedHeadings&&(this.headings=i,this.hasExtractedHeadings=!0)}initObserver(){this.isBrowser&&this.contentRef?.nativeElement&&(this.mutationObserver||(this.mutationObserver=new MutationObserver(()=>{this.updateContentHeadings(),this.setupFootnoteNavigation()}),this.mutationObserver.observe(this.contentRef.nativeElement,{childList:!0,subtree:!0,characterData:!0})))}setupFootnoteNavigation(){if(!this.isBrowser)return;const t=document.querySelector("article.blog-post");if(!t)return;const n=t.cloneNode(!0);t.parentNode&&t.parentNode.replaceChild(n,t);const o=i=>{const M=i.target.getAttribute("data-fn");if(M){i.preventDefault(),i.stopPropagation();const x=M,h=document.getElementById(x);if(h){h.scrollIntoView({behavior:"smooth",block:"start"});const y=document.querySelector("base")?.getAttribute("href")||"/",p=`${y.endsWith("/")?y:`${y}/`}blog/${this.currentSlug}#${x}`;console.log("Updating URL to:",p),window.history.replaceState(null,"",p)}}};n.addEventListener("click",i=>{const d=i.target;(d.classList.contains("footnote-ref")||d.classList.contains("footnote-backref"))&&o(i)})}slugify(t){return t.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}updateNavigation(){const t=this.allPosts.findIndex(n=>n.attributes.slug===this.currentSlug);t>0?this.previousPost=this.allPosts[t-1]:this.previousPost=null,t<this.allPosts.length-1?this.nextPost=this.allPosts[t+1]:this.nextPost=null}updateRelatedPosts(t){if(this.relatedPosts=[],!t||t.length===0)return;t.slice(0,5).forEach(o=>{const i=this.allPosts.find(d=>d.attributes.slug===o);i&&this.relatedPosts.push(i)})}async handleAuthentication(){if(this.authService.isAuthenticated()){this.isContentAccessible.set(!0);return}this.isContentAccessible.set(!1),setTimeout(async()=>{this.passwordModal&&(await this.passwordModal.show()?(this.isContentAccessible.set(!0),this.cdr.detectChanges()):this.router.navigate(["/blog"]))},100)}};k.ɵfac=function(n){return new(n||k)(B(jn),B(Nn),B(Z),B(Sn))},k.ɵcmp=H({type:k,selectors:[["app-blog-post"]],viewQuery:function(n,o){if(n&1&&zn(ot,5)(R,5),n&2){let i;en(i=on())&&(o.contentRef=i.first),en(i=on())&&(o.passwordModal=i.first)}},decls:3,vars:3,consts:[["contentRef",""],[1,"blog-post"],[1,"locked-content"],[1,"blog-post__header"],[1,"blog-post__title"],[1,"blog-post__date"],[1,"blog-post__meta"],[1,"post-meta-tag","draft-tag"],[1,"post-meta-tag","pinned-tag"],[1,"post-meta-tag","category-tag"],[1,"blog-post__article-meta"],[1,"blog-post__description"],[1,"blog-post__image",3,"src","alt"],[1,"blog-post__container"],[1,"blog-post__toc",3,"headings"],[1,"blog-post__content"],[3,"content"],[1,"blog-post__disclaimer"],[1,"blog-post__related"],[1,"related-posts"],[1,"recent-posts"],[3,"previousPost","nextPost"],[1,"post-meta-tag","tag-tag"],[1,"article-meta-item"],[1,"disclaimer-header"],["viewBox","0 0 24 24","fill","currentColor",1,"disclaimer-icon"],["cx","12","cy","12","r","10","fill","none","stroke","currentColor","stroke-width","2"],["x1","12","y1","8","x2","12","y2","12","stroke","currentColor","stroke-width","2","stroke-linecap","round"],["cx","12","cy","16","r","0.5","fill","currentColor"],[1,"posts-list"],[1,"post-item"],[1,"post-thumbnail",3,"src","alt"],[1,"post-info"],[1,"post-link",3,"routerLink"],[1,"post-date"],[1,"locked-icon"]],template:function(n,o){if(n&1&&(P(0,"app-password-modal"),g(1,Tt,2,1),W(2,"async")),n&2){let i;a(),_((i=$(2,1,o.post$))?1:-1,i)}},dependencies:[Y,q,kn,Q,J,R,Dn,X,K],styles:[`.blog-post[_ngcontent-%COMP%] {
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
    }`]});let an=k;export{an as default};
