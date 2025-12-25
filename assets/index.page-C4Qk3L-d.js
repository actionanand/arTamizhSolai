import{i as B,f as F,A as z,ɵ as A,R as $,C as I,a,b as s,c as o,g,k as r,l as _,n as l,h as C,j as v,m as P,o as f,p as d,q as b,r as S,s as y,w as T,e as E,D,v as w,t as x,u as k,x as j,y as L,z as p,B as u}from"./index-DkhoaWva.js";import{p as R}from"./pagination-config-BIRU8DJ8.js";import{F as V}from"./format-date.pipe-DWGCaC9x.js";const M=n=>["/blog/",n],q=(n,e)=>e.attributes.slug;function N(n,e){if(n&1){const t=f();a(0,"button",11),d("click",function(){const c=p(t).$implicit,m=l(3);return u(m.setCategory(c))}),s(1),o()}if(n&2){const t=e.$implicit,i=l(3);y("active",i.selectedCategory===t),r(),k(" ",t," (",i.getPostsCountByCategory(t),") ")}}function Q(n,e){if(n&1){const t=f();a(0,"div",8)(1,"h3",9),s(2,"Categories"),o(),a(3,"div",10)(4,"button",11),d("click",function(){p(t);const c=l(2);return u(c.setCategory(null))}),s(5," All "),o(),C(6,N,2,4,"button",12,v),o()()}if(n&2){const t=l(2);r(4),y("active",!t.selectedCategory),r(2),P(t.availableCategories)}}function U(n,e){if(n&1){const t=f();a(0,"button",11),d("click",function(){p(t);const c=l().$implicit,m=l(3);return u(m.toggleTag(c))}),s(1),o()}if(n&2){const t=l().$implicit,i=l(3);y("active",i.selectedTags.includes(t)),r(),k(" ",t," (",i.getPostsCountByTag(t),") ")}}function G(n,e){if(n&1&&g(0,U,2,4,"button",12),n&2){const t=e.$implicit,i=l(3);_(i.getPostsCountByTag(t)>0?0:-1)}}function Y(n,e){if(n&1){const t=f();a(0,"div",8)(1,"h3",9),s(2,"Tags"),o(),a(3,"div",10)(4,"button",11),d("click",function(){p(t);const c=l(2);return u(c.clearTags())}),s(5," All "),o(),C(6,G,1,1,null,null,v),o()()}if(n&2){const t=l(2);r(4),y("active",t.selectedTags.length===0),r(2),P(t.getFilteredTags())}}function H(n,e){if(n&1&&(a(0,"div",3),g(1,Q,8,2,"div",8),g(2,Y,8,2,"div",8),o()),n&2){const t=l();r(),_(t.availableCategories.length>0?1:-1),r(),_(t.availableTags.length>0?2:-1)}}function J(n,e){if(n&1){const t=f();a(0,"span",14),s(1),a(2,"button",15),d("click",function(){p(t);const c=l(2);return u(c.setCategory(null))}),s(3,"×"),o()()}if(n&2){const t=l(2);r(),T(" Category: ",t.selectedCategory," ")}}function K(n,e){if(n&1){const t=f();a(0,"span",14),s(1),a(2,"button",15),d("click",function(){const c=p(t).$implicit,m=l(2);return u(m.removeTag(c))}),s(3,"×"),o()()}if(n&2){const t=e.$implicit;r(),T(" Tag: ",t," ")}}function W(n,e){if(n&1&&(a(0,"div",4)(1,"span",13),s(2,"Filtering by:"),o(),g(3,J,4,1,"span",14),C(4,K,4,1,"span",14,v),o()),n&2){const t=l();r(3),_(t.selectedCategory?3:-1),r(),P(t.selectedTags)}}function X(n,e){if(n&1){const t=f();a(0,"div",6)(1,"p"),s(2,"No blog posts found for the selected filters."),o(),a(3,"button",16),d("click",function(){p(t);const c=l();return u(c.resetFilters())}),s(4,"Reset Filters"),o()()}}function Z(n,e){if(n&1&&(a(0,"p",23),s(1),j(2,"formatDate"),o()),n&2){const t=l().$implicit;r(),x(L(2,1,t.attributes.date))}}function tt(n,e){n&1&&(a(0,"span",25),s(1,"📝 Draft"),o())}function et(n,e){n&1&&(a(0,"span",26),s(1,"📌 Pinned"),o())}function nt(n,e){if(n&1&&(a(0,"span",30),s(1),o()),n&2){const t=e.$implicit;r(),x(t)}}function it(n,e){if(n&1&&C(0,nt,2,1,"span",30,v),n&2){const t=l().$implicit;P(t.attributes.tags)}}function ot(n,e){if(n&1&&(a(0,"article",17)(1,"div",18),E(2,"img",19),o(),a(3,"div",20)(4,"h2",21)(5,"a",22),s(6),o()(),g(7,Z,3,3,"p",23),a(8,"div",24),g(9,tt,2,0,"span",25),g(10,et,2,0,"span",26),a(11,"span",27),s(12),o(),g(13,it,2,0),o(),a(14,"p",28),s(15),o(),a(16,"a",29),s(17," Read More → "),o()()()),n&2){const t=e.$implicit,i=l(2);r(2),b("src",t.attributes.coverImage||i.defaultCoverImage,D)("alt",t.attributes.title),r(3),b("routerLink",w(11,M,t.attributes.slug)),r(),T(" ",t.attributes.title," "),r(),_(t.attributes.date?7:-1),r(2),_(t.attributes.isDraft?9:-1),r(),_(t.attributes.isPinned?10:-1),r(2),x(t.attributes.category||"uncategorized"),r(),_(t.attributes.tags&&t.attributes.tags.length>0?13:-1),r(2),x(t.attributes.description),r(),b("routerLink",w(13,M,t.attributes.slug))}}function rt(n,e){if(n&1&&C(0,ot,18,15,"article",17,q),n&2){const t=l();P(t.pagedPosts)}}function at(n,e){if(n&1){const t=f();a(0,"nav",7)(1,"button",31),d("click",function(){p(t);const c=l();return u(c.goToPage(c.currentPage-1))}),s(2," ← Prev "),o(),a(3,"span",32),s(4),o(),a(5,"button",31),d("click",function(){p(t);const c=l();return u(c.goToPage(c.currentPage+1))}),s(6," Next → "),o()()}if(n&2){const t=l();r(),b("disabled",t.currentPage===1),r(3),S("Page ",t.currentPage," of ",t.totalPages," (",t.filteredPosts.length," posts)"),r(),b("disabled",t.currentPage===t.totalPages)}}const st="tamil-literature-default.svg",h=class h{constructor(e){this.route=e,this.posts=B(),this.pageSize=R.blogPageSize,this.defaultCoverImage=st,this.availableCategories=[],this.availableTags=[],this.selectedCategory=null,this.selectedTags=[],this.filteredPosts=[],this.pagedPosts=[],this.currentPage=1,this.totalPages=1,this.extractAndSortPosts()}ngOnInit(){this.applyFilters(),this.subscribeToQueryParams()}extractAndSortPosts(){const e=this.posts.filter(t=>!t.attributes.isDraft);e.sort((t,i)=>t.attributes.isPinned&&!i.attributes.isPinned?-1:!t.attributes.isPinned&&i.attributes.isPinned?1:new Date(i.attributes.date||"").getTime()-new Date(t.attributes.date||"").getTime()),Object.assign(this,{posts:e}),this.extractCategories(),this.extractTags()}extractCategories(){const e=new Set;this.posts.forEach(t=>{e.add(t.attributes.category||"uncategorized")}),this.availableCategories=Array.from(e).sort()}extractTags(){const e=new Set;this.posts.forEach(t=>{t.attributes.tags&&Array.isArray(t.attributes.tags)&&t.attributes.tags.forEach(i=>e.add(i))}),this.availableTags=Array.from(e).sort()}subscribeToQueryParams(){this.route.queryParams.subscribe(e=>{this.selectedCategory=e.category||null,this.selectedTags=e.tags?e.tags.split(","):[],this.currentPage=1,this.applyFilters()})}applyFilters(){this.filteredPosts=this.posts.filter(e=>{const t=e.attributes.category||"uncategorized",i=!this.selectedCategory||t===this.selectedCategory,c=this.selectedTags.length===0||e.attributes.tags&&this.selectedTags.some(m=>e.attributes.tags?.includes(m));return i&&c}),this.totalPages=Math.max(1,Math.ceil(this.filteredPosts.length/this.pageSize)),this.currentPage=1,this.updatePagedPosts()}setCategory(e){this.selectedCategory=e,this.currentPage=1,this.applyFilters()}toggleTag(e){this.selectedTags.includes(e)?this.selectedTags=this.selectedTags.filter(t=>t!==e):this.selectedTags=[...this.selectedTags,e],this.currentPage=1,this.applyFilters()}removeTag(e){this.selectedTags=this.selectedTags.filter(t=>t!==e),this.currentPage=1,this.applyFilters()}clearTags(){this.selectedTags=[],this.currentPage=1,this.applyFilters()}resetFilters(){this.selectedCategory=null,this.selectedTags=[],this.currentPage=1,this.applyFilters()}goToPage(e){e<1||e>this.totalPages||(this.currentPage=e,this.updatePagedPosts(),window.scrollTo({top:0,behavior:"smooth"}))}updatePagedPosts(){const e=(this.currentPage-1)*this.pageSize,t=e+this.pageSize;this.pagedPosts=this.filteredPosts.slice(e,t)}getPostsCountByCategory(e){return e==="uncategorized"?this.posts.filter(t=>!t.attributes.category).length:this.posts.filter(t=>t.attributes.category===e).length}getFilteredTags(){if(!this.selectedCategory)return this.availableTags;const e=new Set;return this.posts.forEach(t=>{(t.attributes.category||"uncategorized")===this.selectedCategory&&t.attributes.tags&&t.attributes.tags.forEach(c=>e.add(c))}),Array.from(e).sort()}getPostsCountByTag(e){return this.selectedCategory?this.posts.filter(t=>(t.attributes.category||"uncategorized")===this.selectedCategory&&t.attributes.tags&&t.attributes.tags.includes(e)).length:this.posts.filter(t=>t.attributes.tags&&t.attributes.tags.includes(e)).length}};h.ɵfac=function(t){return new(t||h)(F(z))},h.ɵcmp=A({type:h,selectors:[["app-blog"]],decls:12,vars:4,consts:[[1,"blog-archive"],[1,"archive-header"],[1,"archive-subtitle"],[1,"filters-section"],[1,"applied-filters"],[1,"posts-list"],[1,"no-posts"],[1,"pagination"],[1,"filter-group"],[1,"filter-title"],[1,"filter-tags"],[1,"filter-tag",3,"click"],[1,"filter-tag",3,"active"],[1,"applied-filters-label"],[1,"filter-badge"],[1,"remove-filter",3,"click"],[1,"reset-btn",3,"click"],[1,"post-preview"],[1,"post-preview__image-container"],[1,"post-preview__image",3,"src","alt"],[1,"post-preview__content"],[1,"post-preview__title"],[3,"routerLink"],[1,"post-preview__date"],[1,"post-preview__meta"],[1,"post-meta-tag","draft-tag"],[1,"post-meta-tag","pinned-tag"],[1,"post-meta-tag","category-tag"],[1,"post-preview__description"],[1,"post-preview__link",3,"routerLink"],[1,"post-meta-tag","tag-tag"],[1,"page-btn",3,"click","disabled"],[1,"page-info"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"header",1)(2,"h1"),s(3,"Blog Archive"),o(),a(4,"p",2),s(5,"Explore all articles and stories"),o()(),g(6,H,3,2,"div",3),g(7,W,6,1,"div",4),a(8,"div",5),g(9,X,5,0,"div",6)(10,rt,2,0),o(),g(11,at,7,5,"nav",7),o()),t&2&&(r(6),_(i.availableCategories.length>0||i.availableTags.length>0?6:-1),r(),_(i.selectedCategory||i.selectedTags.length>0?7:-1),r(2),_(i.filteredPosts.length===0?9:10),r(2),_(i.filteredPosts.length>0?11:-1))},dependencies:[$,I,V],styles:[`.blog-archive[_ngcontent-%COMP%] {
      max-width: 900px;
      margin: 0 auto;
    }

    .archive-header[_ngcontent-%COMP%] {
      text-align: center;
      margin-bottom: 3rem;
    }

    .archive-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      color: #212529;
    }

    .archive-subtitle[_ngcontent-%COMP%] {
      font-size: 1.125rem;
      color: #6c757d;
      margin: 0;
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

    

    .applied-filters[_ngcontent-%COMP%] {
      background: #e7f0ff;
      border-left: 4px solid #0d6efd;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
    }

    .applied-filters-label[_ngcontent-%COMP%] {
      font-weight: 600;
      color: #0d6efd;
    }

    .filter-badge[_ngcontent-%COMP%] {
      background: white;
      padding: 0.4rem 0.75rem;
      border-radius: 4px;
      border: 1px solid #0d6efd;
      color: #0d6efd;
      font-size: 0.875rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .remove-filter[_ngcontent-%COMP%] {
      background: none;
      border: none;
      color: #0d6efd;
      cursor: pointer;
      font-weight: bold;
      font-size: 1rem;
      padding: 0;
      line-height: 1;
    }

    .remove-filter[_ngcontent-%COMP%]:hover {
      color: #0b5ed7;
    }

    .posts-list[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .post-preview[_ngcontent-%COMP%] {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 2rem;
      padding: 1.5rem;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .post-preview[_ngcontent-%COMP%]:hover {
      border-color: #0d6efd;
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.1);
    }

    .post-preview__image-container[_ngcontent-%COMP%] {
      overflow: hidden;
      border-radius: 5px;
    }

    .post-preview__image[_ngcontent-%COMP%] {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .post-preview[_ngcontent-%COMP%]:hover   .post-preview__image[_ngcontent-%COMP%] {
      transform: scale(1.05);
    }

    .post-preview__content[_ngcontent-%COMP%] {
      display: flex;
      flex-direction: column;
    }

    .post-preview__title[_ngcontent-%COMP%] {
      font-size: 1.5rem;
      margin: 0 0 0.5rem 0;
      line-height: 1.3;
    }

    .post-preview__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
      color: #212529;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .post-preview__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
      color: #0d6efd;
    }

    .post-preview__date[_ngcontent-%COMP%] {
      font-size: 0.875rem;
      color: #6c757d;
      margin: 0 0 0.5rem 0;
    }

    .post-preview__meta[_ngcontent-%COMP%] {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
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

    .post-preview__description[_ngcontent-%COMP%] {
      color: #495057;
      margin: 0 0 1rem 0;
      line-height: 1.6;
      flex: 1;
    }

    .post-preview__link[_ngcontent-%COMP%] {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
      width: fit-content;
    }

    .post-preview__link[_ngcontent-%COMP%]:hover {
      color: #0b5ed7;
    }

    .no-posts[_ngcontent-%COMP%] {
      text-align: center;
      padding: 3rem;
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

    .pagination[_ngcontent-%COMP%] {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 2rem 0;
    }

    .page-btn[_ngcontent-%COMP%] {
      padding: 0.75rem 1.5rem;
      border: 1px solid #0d6efd;
      background: linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%);
      color: white;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(13, 110, 253, 0.3);
    }

    .page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
      background: linear-gradient(135deg, #0b5ed7 0%, #0a58ca 100%);
      border-color: #0a58ca;
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.4);
      transform: translateY(-1px);
    }

    .page-btn[_ngcontent-%COMP%]:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    .page-info[_ngcontent-%COMP%] {
      color: #495057;
    }

    @media (max-width: 768px) {
      .archive-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
        font-size: 1.75rem;
      }

      .filter-tags[_ngcontent-%COMP%] {
        gap: 0.25rem;
      }

      .filter-tag[_ngcontent-%COMP%] {
        padding: 0.4rem 0.75rem;
        font-size: 0.8rem;
      }

      .post-preview[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
      }

      .post-preview__image-container[_ngcontent-%COMP%] {
        min-height: 200px;
      }

      .post-preview__title[_ngcontent-%COMP%] {
        font-size: 1.25rem;
      }

      .applied-filters[_ngcontent-%COMP%] {
        flex-direction: column;
        align-items: flex-start;
      }
    }`]});let O=h;export{O as default};
