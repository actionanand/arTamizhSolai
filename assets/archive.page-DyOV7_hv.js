import{i as g,ɵ as y,R as f,C as v,a as s,b as c,c as a,h as m,j as C,k as r,m as h,n as d,t as b,g as x,q as P,v as M,w as u,l as F,x as O,y as k}from"./index-D24pChJS.js";import{F as T}from"./format-date.pipe-BigjaHl4.js";const w=n=>["/blog",n],B=(n,e)=>e.attributes.slug;function Y(n,e){if(n&1&&(s(0,"span",7),c(1),O(2,"formatDate"),a()),n&2){const t=d().$implicit;r(),u("— ",k(2,1,t.attributes.date))}}function $(n,e){if(n&1&&(s(0,"li")(1,"a",6),c(2),a(),x(3,Y,3,3,"span",7),a()),n&2){const t=e.$implicit;r(),P("routerLink",M(3,w,t.attributes.slug)),r(),u(" ",t.attributes.title," "),r(),F(t.attributes.date?3:-1)}}function j(n,e){if(n&1&&(s(0,"section",3)(1,"h2",4),c(2),a(),s(3,"ul",5),m(4,$,4,5,"li",null,B),a()()),n&2){const t=e.$implicit,i=d();r(2),b(t),r(2),h(i.grouped[t])}}const o=class o{constructor(){this.posts=g(),this.grouped={},this.years=[],this.maxPerYear=25;const e={};for(const t of this.posts){const l=(t.attributes.date||"").match(/(\d{4})/),_=l?l[1]:"Unknown";e[_]||(e[_]=[]),e[_].length<this.maxPerYear&&e[_].push(t)}this.grouped=e,this.years=Object.keys(e).sort((t,i)=>t<i?1:-1)}};o.ɵfac=function(t){return new(t||o)},o.ɵcmp=y({type:o,selectors:[["app-blog-archive"]],decls:8,vars:0,consts:[[1,"year-archive"],[1,"archive-header"],[1,"archive-subtitle"],[1,"archive-year"],[1,"archive-year__title"],[1,"archive-year__list"],[3,"routerLink"],[1,"archive-year__date"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"header",1)(2,"h1"),c(3,"Archive"),a(),s(4,"p",2),c(5,"Browse by year"),a()(),m(6,j,6,1,"section",3,C),a()),t&2&&(r(6),h(i.years))},dependencies:[f,v,T],styles:[`.year-archive[_ngcontent-%COMP%] {
      max-width: 900px;
      margin: 0 auto;
    }

    .archive-header[_ngcontent-%COMP%] {
      text-align: center;
      margin-bottom: 2rem;
    }

    .archive-subtitle[_ngcontent-%COMP%] {
      color: #6c757d;
    }

    .archive-year[_ngcontent-%COMP%] {
      margin: 2rem 0;
    }

    .archive-year__title[_ngcontent-%COMP%] {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }

    .archive-year__list[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .archive-year__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
      margin: 0.5rem 0;
    }

    .archive-year__date[_ngcontent-%COMP%] {
      color: #6c757d;
      margin-left: 0.5rem;
      font-size: 0.9rem;
    }`]});let p=o;export{p as default};
