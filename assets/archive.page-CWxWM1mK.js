import{i as g,ɵ as y,R as f,a as o,b as c,c as a,d as p,e as r,f as m,g as d,h as v,j as b,k as C,l as x,m as u,n as P,o as M}from"./index-D1cQraU-.js";const O=n=>["/blog",n],k=(n,e)=>e.attributes.slug;function F(n,e){if(n&1&&(o(0,"span",7),c(1),a()),n&2){const t=d().$implicit;r(),u("— ",t.attributes.date)}}function T(n,e){if(n&1&&(o(0,"li")(1,"a",6),c(2),a(),b(3,F,2,1,"span",7),a()),n&2){const t=e.$implicit;r(),C("routerLink",x(3,O,t.attributes.slug)),r(),u(" ",t.attributes.title," "),r(),P(t.attributes.date?3:-1)}}function Y(n,e){if(n&1&&(o(0,"section",3)(1,"h2",4),c(2),a(),o(3,"ul",5),p(4,T,4,5,"li",null,k),a()()),n&2){const t=e.$implicit,i=d();r(2),v(t),r(2),m(i.grouped[t])}}const s=class s{constructor(){this.posts=g(),this.grouped={},this.years=[],this.maxPerYear=25;const e={};for(const t of this.posts){const l=(t.attributes.date||"").match(/(\d{4})/),_=l?l[1]:"Unknown";e[_]||(e[_]=[]),e[_].length<this.maxPerYear&&e[_].push(t)}this.grouped=e,this.years=Object.keys(e).sort((t,i)=>t<i?1:-1)}};s.ɵfac=function(t){return new(t||s)},s.ɵcmp=y({type:s,selectors:[["app-archive"]],decls:8,vars:0,consts:[[1,"year-archive"],[1,"archive-header"],[1,"archive-subtitle"],[1,"archive-year"],[1,"archive-year__title"],[1,"archive-year__list"],[3,"routerLink"],[1,"archive-year__date"]],template:function(t,i){t&1&&(o(0,"div",0)(1,"header",1)(2,"h1"),c(3,"Archive"),a(),o(4,"p",2),c(5,"Browse by year"),a()(),p(6,Y,6,1,"section",3,M),a()),t&2&&(r(6),m(i.years))},dependencies:[f],styles:[`.year-archive[_ngcontent-%COMP%] {
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
    }`]});let h=s;export{h as default};
