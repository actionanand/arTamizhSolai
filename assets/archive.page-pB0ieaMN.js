import{i as Y,f as A,A as z,ɵ as S,R as $,C as B,a as s,b as l,c as o,g as _,h as P,j as y,k as i,l as d,m as C,n as c,o as m,p as h,q as T,r as D,s as v,t as M,u as O,v as E,w as F,x as j,y as I,z as u,B as p}from"./index-CM7YZLCE.js";import{p as k}from"./pagination-config-BIRU8DJ8.js";import{F as R}from"./format-date.pipe-CoVcpdcj.js";const L=a=>["/blog",a],U=(a,e)=>e.attributes.slug;function V(a,e){if(a&1){const t=m();s(0,"button",9),h("click",function(){const r=u(t).$implicit,g=c(3);return p(g.setCategory(r))}),l(1),o()}if(a&2){const t=e.$implicit,n=c(3);v("active",n.selectedCategory===t),i(),O(" ",t," (",n.getPostsCountByCategory(t),") ")}}function q(a,e){if(a&1){const t=m();s(0,"div",6)(1,"h3",7),l(2,"Categories"),o(),s(3,"div",8)(4,"button",9),h("click",function(){u(t);const r=c(2);return p(r.setCategory(null))}),l(5," All "),o(),P(6,V,2,4,"button",10,y),o()()}if(a&2){const t=c(2);i(4),v("active",!t.selectedCategory),i(2),C(t.availableCategories)}}function N(a,e){if(a&1){const t=m();s(0,"button",9),h("click",function(){u(t);const r=c().$implicit,g=c(3);return p(g.toggleTag(r))}),l(1),o()}if(a&2){const t=c().$implicit,n=c(3);v("active",n.selectedTags.includes(t)),i(),O(" ",t," (",n.getPostsCountByTag(t),") ")}}function Q(a,e){if(a&1&&_(0,N,2,4,"button",10),a&2){const t=e.$implicit,n=c(3);d(n.getPostsCountByTag(t)>0?0:-1)}}function W(a,e){if(a&1){const t=m();s(0,"div",6)(1,"h3",7),l(2,"Tags"),o(),s(3,"div",8)(4,"button",9),h("click",function(){u(t);const r=c(2);return p(r.clearTags())}),l(5," All "),o(),P(6,Q,1,1,null,null,y),o()()}if(a&2){const t=c(2);i(4),v("active",t.selectedTags.length===0),i(2),C(t.getFilteredTags())}}function G(a,e){if(a&1&&(s(0,"div",3),_(1,q,8,2,"div",6),_(2,W,8,2,"div",6),o()),a&2){const t=c();i(),d(t.availableCategories.length>0?1:-1),i(),d(t.availableTags.length>0?2:-1)}}function H(a,e){if(a&1&&(s(0,"span",17),l(1),j(2,"formatDate"),o()),a&2){const t=c().$implicit;i(),F("— ",I(2,1,t.attributes.date))}}function J(a,e){a&1&&(s(0,"span",19),l(1,"📝 Draft"),o())}function K(a,e){a&1&&(s(0,"span",20),l(1,"📌 Pinned"),o())}function X(a,e){if(a&1&&(s(0,"span",22),l(1),o()),a&2){const t=e.$implicit;i(),M(t)}}function Z(a,e){if(a&1&&P(0,X,2,1,"span",22,y),a&2){const t=c().$implicit;C(t.attributes.tags)}}function tt(a,e){if(a&1&&(s(0,"li",14)(1,"div",15)(2,"a",16),l(3),o(),_(4,H,3,3,"span",17),s(5,"div",18),_(6,J,2,0,"span",19),_(7,K,2,0,"span",20),s(8,"span",21),l(9),o(),_(10,Z,2,0),o()()()),a&2){const t=e.$implicit;i(2),T("routerLink",E(7,L,t.attributes.slug)),i(),F(" ",t.attributes.title," "),i(),d(t.attributes.date?4:-1),i(2),d(t.attributes.isDraft?6:-1),i(),d(t.attributes.isPinned?7:-1),i(2),M(t.attributes.category||"uncategorized"),i(),d(t.attributes.tags&&t.attributes.tags.length>0?10:-1)}}function et(a,e){if(a&1&&(s(0,"section",11)(1,"h2",12),l(2),o(),s(3,"ul",13),P(4,tt,11,9,"li",14,U),o()()),a&2){const t=c().$implicit,n=c();i(2),M(t),i(2),C(n.getPagedPostsForYear(t))}}function nt(a,e){if(a&1&&_(0,et,6,1,"section",11),a&2){const t=e.$implicit,n=c();d(n.getPagedPostsForYear(t).length>0?0:-1)}}function at(a,e){if(a&1){const t=m();s(0,"div",4)(1,"p"),l(2,"No posts found for the selected filters."),o(),s(3,"button",23),h("click",function(){u(t);const r=c();return p(r.resetFilters())}),l(4,"Reset Filters"),o()()}}function rt(a,e){if(a&1){const t=m();s(0,"nav",5)(1,"button",24),h("click",function(){u(t);const r=c();return p(r.goToPage(r.currentPage-1))}),l(2," ← Prev "),o(),s(3,"span",25),l(4),o(),s(5,"button",24),h("click",function(){u(t);const r=c();return p(r.goToPage(r.currentPage+1))}),l(6," Next → "),o()()}if(a&2){const t=c();i(),T("disabled",t.currentPage===1),i(3),D("Page ",t.currentPage," of ",t.totalPages," (",t.filteredPosts.length," posts)"),i(),T("disabled",t.currentPage===t.totalPages)}}const f=class f{constructor(e){this.route=e,this.posts=Y(),this.pageSize=k.archivePageSize,this.grouped={},this.years=[],this.filteredYears=[],this.filteredPosts=[],this.pagedPosts=[],this.availableCategories=[],this.availableTags=[],this.selectedCategory=null,this.selectedTags=[],this.currentPage=1,this.totalPages=1,this.maxPerYear=k.archivePageSize,this.filterAndSortPosts(),this.groupByYear(),this.extractCategories(),this.extractTags(),this.subscribeToQueryParams()}filterAndSortPosts(){const e=this.posts.filter(t=>!t.attributes.isDraft);e.sort((t,n)=>t.attributes.isPinned&&!n.attributes.isPinned?-1:!t.attributes.isPinned&&n.attributes.isPinned?1:new Date(n.attributes.date||"").getTime()-new Date(t.attributes.date||"").getTime()),Object.assign(this,{posts:e})}groupByYear(){const e={};for(const t of this.posts){const r=(t.attributes.date||"").match(/(\d{4})/),g=r?r[1]:"Unknown";e[g]||(e[g]=[]),e[g].length<this.maxPerYear&&e[g].push(t)}this.grouped=e,this.years=Object.keys(e).sort((t,n)=>t<n?1:-1),this.filteredYears=[...this.years]}extractCategories(){const e=new Set;this.posts.forEach(t=>{e.add(t.attributes.category||"uncategorized")}),this.availableCategories=Array.from(e).sort()}extractTags(){const e=new Set;this.posts.forEach(t=>{t.attributes.tags&&Array.isArray(t.attributes.tags)&&t.attributes.tags.forEach(n=>e.add(n))}),this.availableTags=Array.from(e).sort()}subscribeToQueryParams(){this.route.queryParams.subscribe(e=>{this.selectedCategory=e.category||null,this.selectedTags=e.tags?e.tags.split(","):[],this.applyFilters()})}applyFilters(){const e=this.posts.filter(n=>{const r=n.attributes.category||"uncategorized",g=!this.selectedCategory||r===this.selectedCategory,b=this.selectedTags.length===0||n.attributes.tags&&this.selectedTags.some(x=>n.attributes.tags?.includes(x));return g&&b});this.filteredPosts=e;const t=new Set;e.forEach(n=>{const g=(n.attributes.date||"").match(/(\d{4})/),b=g?g[1]:"Unknown";t.add(b)}),this.filteredYears=this.years.filter(n=>t.has(n)),this.totalPages=Math.max(1,Math.ceil(this.filteredPosts.length/this.pageSize)),this.currentPage=1,this.updatePagedPosts()}setCategory(e){this.selectedCategory=e,this.currentPage=1,this.applyFilters()}toggleTag(e){this.selectedTags.includes(e)?this.selectedTags=this.selectedTags.filter(t=>t!==e):this.selectedTags=[...this.selectedTags,e],this.currentPage=1,this.applyFilters()}clearTags(){this.selectedTags=[],this.currentPage=1,this.applyFilters()}resetFilters(){this.selectedCategory=null,this.selectedTags=[],this.applyFilters()}updatePagedPosts(){const e=(this.currentPage-1)*this.pageSize,t=e+this.pageSize;this.pagedPosts=this.filteredPosts.slice(e,t)}goToPage(e){e<1||e>this.totalPages||(this.currentPage=e,this.updatePagedPosts(),window.scrollTo({top:0,behavior:"smooth"}))}getPagedPostsForYear(e){return this.pagedPosts.filter(t=>{const r=(t.attributes.date||"").match(/(\d{4})/);return(r?r[1]:"Unknown")===e})}getPostsForYear(e){let t=this.grouped[e]||[];return t=t.filter(n=>{const r=n.attributes.category||"uncategorized",g=!this.selectedCategory||r===this.selectedCategory,b=this.selectedTags.length===0||n.attributes.tags&&this.selectedTags.some(x=>n.attributes.tags?.includes(x));return g&&b}),t}getPostsCountByCategory(e){return e==="uncategorized"?this.posts.filter(t=>!t.attributes.category).length:this.posts.filter(t=>t.attributes.category===e).length}getFilteredTags(){if(!this.selectedCategory)return this.availableTags;const e=new Set;return this.posts.forEach(t=>{(t.attributes.category||"uncategorized")===this.selectedCategory&&t.attributes.tags&&t.attributes.tags.forEach(r=>e.add(r))}),Array.from(e).sort()}getPostsCountByTag(e){return this.selectedCategory?this.posts.filter(t=>(t.attributes.category||"uncategorized")===this.selectedCategory&&t.attributes.tags&&t.attributes.tags.includes(e)).length:this.posts.filter(t=>t.attributes.tags&&t.attributes.tags.includes(e)).length}};f.ɵfac=function(t){return new(t||f)(A(z))},f.ɵcmp=S({type:f,selectors:[["app-archive"]],decls:11,vars:3,consts:[[1,"year-archive"],[1,"archive-header"],[1,"archive-subtitle"],[1,"filters-section"],[1,"no-posts"],[1,"pagination"],[1,"filter-group"],[1,"filter-title"],[1,"filter-tags"],[1,"filter-tag",3,"click"],[1,"filter-tag",3,"active"],[1,"archive-year"],[1,"archive-year__title"],[1,"archive-year__list"],[1,"archive-year__item"],[1,"archive-year__post"],[1,"archive-year__link",3,"routerLink"],[1,"archive-year__date"],[1,"archive-year__meta"],[1,"archive-meta-tag","draft-tag"],[1,"archive-meta-tag","pinned-tag"],[1,"archive-meta-tag","category-tag"],[1,"archive-meta-tag","tag-tag"],[1,"reset-btn",3,"click"],[1,"page-btn",3,"click","disabled"],[1,"page-info"]],template:function(t,n){t&1&&(s(0,"div",0)(1,"header",1)(2,"h1"),l(3,"Archive"),o(),s(4,"p",2),l(5,"Browse by year, category, or tag"),o()(),_(6,G,3,2,"div",3),P(7,nt,1,1,null,null,y),_(9,at,5,0,"div",4),_(10,rt,7,5,"nav",5),o()),t&2&&(i(6),d(n.availableCategories.length>0||n.availableTags.length>0?6:-1),i(),C(n.filteredYears),i(2),d(n.filteredYears.length===0?9:-1),i(),d(n.filteredPosts.length>0&&n.totalPages>1?10:-1))},dependencies:[$,B,R],styles:[`.year-archive[_ngcontent-%COMP%] {
      max-width: 900px;
      margin: 0 auto;
    }

    .archive-header[_ngcontent-%COMP%] {
      text-align: center;
      margin-bottom: 2rem;
    }

    .archive-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      color: #212529;
    }

    .archive-subtitle[_ngcontent-%COMP%] {
      font-size: 1.125rem;
      color: #6c757d;
      margin: 0 0 2rem 0;
    }

    

    .filters-section[_ngcontent-%COMP%] {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .filter-group[_ngcontent-%COMP%] {
      margin-bottom: 1.5rem;
    }

    .filter-group[_ngcontent-%COMP%]:last-child {
      margin-bottom: 0;
    }

    .filter-title[_ngcontent-%COMP%] {
      font-size: 0.95rem;
      font-weight: 600;
      color: #495057;
      margin: 0 0 0.75rem 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .filter-tags[_ngcontent-%COMP%] {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .filter-tag[_ngcontent-%COMP%] {
      padding: 0.5rem 1rem;
      border: 1px solid #dee2e6;
      background: white;
      color: #495057;
      border-radius: 20px;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .filter-tag[_ngcontent-%COMP%]:hover {
      border-color: #0d6efd;
      color: #0d6efd;
    }

    .filter-tag.active[_ngcontent-%COMP%] {
      background: #0d6efd;
      color: white;
      border-color: #0d6efd;
    }

    .archive-year[_ngcontent-%COMP%] {
      margin: 2rem 0;
      padding: 1.5rem;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      background: #fafbfc;
    }

    .archive-year__title[_ngcontent-%COMP%] {
      font-size: 1.5rem;
      margin: 0 0 1rem 0;
      color: #212529;
    }

    .archive-year__list[_ngcontent-%COMP%] {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .archive-year__item[_ngcontent-%COMP%] {
      margin: 0.75rem 0;
    }

    .archive-year__post[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .archive-year__link[_ngcontent-%COMP%] {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
    }

    .archive-year__link[_ngcontent-%COMP%]:hover {
      color: #0b5ed7;
      text-decoration: underline;
    }

    .archive-year__date[_ngcontent-%COMP%] {
      color: #6c757d;
      font-size: 0.875rem;
    }

    .archive-year__meta[_ngcontent-%COMP%] {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .archive-meta-tag[_ngcontent-%COMP%] {
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

    

    .pagination[_ngcontent-%COMP%] {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 3rem 0 2rem;
      flex-wrap: wrap;
    }

    .page-btn[_ngcontent-%COMP%] {
      padding: 0.5rem 1rem;
      background: #0d6efd;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }

    .page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
      background: #0b5ed7;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
    }

    .page-btn[_ngcontent-%COMP%]:disabled {
      background: #dee2e6;
      color: #6c757d;
      cursor: not-allowed;
      opacity: 0.6;
    }

    .page-info[_ngcontent-%COMP%] {
      font-weight: 600;
      color: #495057;
      min-width: 200px;
      text-align: center;
    }

    .no-posts[_ngcontent-%COMP%] {
      text-align: center;
      padding: 2rem;
      color: #6c757d;
    }

    .reset-btn[_ngcontent-%COMP%] {
      margin-top: 1rem;
      padding: 0.5rem 1.5rem;
      background: #0d6efd;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.2s ease;
    }

    .reset-btn[_ngcontent-%COMP%]:hover {
      background: #0b5ed7;
    }

    @media (max-width: 768px) {
      .archive-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
        font-size: 1.75rem;
      }

      .archive-year__title[_ngcontent-%COMP%] {
        font-size: 1.25rem;
      }

      .filter-tags[_ngcontent-%COMP%] {
        gap: 0.25rem;
      }

      .filter-tag[_ngcontent-%COMP%] {
        padding: 0.4rem 0.75rem;
        font-size: 0.8rem;
      }
    }`]});let w=f;export{w as default};
