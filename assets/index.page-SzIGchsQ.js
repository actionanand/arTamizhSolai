import{i as b,ɵ as x,R as w,a as r,b as a,c as i,d as M,j as g,e as o,f as O,n as d,p as k,k as p,l as m,m as T,h as C,q as y,r as h,g as l,s as z,t as u,u as P,v as B}from"./index-D1cQraU-.js";const v=e=>["/blog/",e],F=(e,t)=>t.attributes.slug;function L(e,t){if(e&1&&(r(0,"p",12),a(1),i()),e&2){const n=l().$implicit;o(),C(n.attributes.date)}}function S(e,t){if(e&1&&(r(0,"article",4)(1,"div",7),k(2,"img",8),i(),r(3,"div",9)(4,"h2",10)(5,"a",11),a(6),i()(),g(7,L,2,1,"p",12),r(8,"p",13),a(9),i(),r(10,"a",14),a(11," Read More → "),i()()()),e&2){const n=t.$implicit;o(2),p("src",n.attributes.coverImage,B)("alt",n.attributes.title),o(3),p("routerLink",m(7,v,n.attributes.slug)),o(),T(" ",n.attributes.title," "),o(),d(n.attributes.date?7:-1),o(2),C(n.attributes.description),o(),p("routerLink",m(9,v,n.attributes.slug))}}function j(e,t){e&1&&(r(0,"div",5)(1,"p"),a(2,"No blog posts yet. Check back soon!"),i()())}function I(e,t){if(e&1){const n=y();r(0,"nav",6)(1,"button",15),h("click",function(){u(n);const _=l();return P(_.goToPage(_.currentPage-1))}),a(2," ← Prev "),i(),r(3,"span",16),a(4),i(),r(5,"button",15),h("click",function(){u(n);const _=l();return P(_.goToPage(_.currentPage+1))}),a(6," Next → "),i()()}if(e&2){const n=l();o(),p("disabled",n.currentPage===1),o(3),z("Page ",n.currentPage," of ",n.totalPages),o(),p("disabled",n.currentPage===n.totalPages)}}const s=class s{constructor(){this.posts=b(),this.pageSize=15,this.currentPage=1,this.totalPages=1,this.pagedPosts=[],this.totalPages=Math.max(1,Math.ceil(this.posts.length/this.pageSize)),this.currentPage=1,this.updatePagedPosts()}goToPage(t){t<1||t>this.totalPages||(this.currentPage=t,this.updatePagedPosts(),window.scrollTo({top:0,behavior:"smooth"}))}updatePagedPosts(){const t=(this.currentPage-1)*this.pageSize,n=t+this.pageSize;this.pagedPosts=this.posts.slice(t,n)}};s.ɵfac=function(n){return new(n||s)},s.ɵcmp=x({type:s,selectors:[["app-blog"]],decls:11,vars:2,consts:[[1,"blog-archive"],[1,"archive-header"],[1,"archive-subtitle"],[1,"posts-list"],[1,"post-preview"],[1,"no-posts"],[1,"pagination"],[1,"post-preview__image-container"],[1,"post-preview__image",3,"src","alt"],[1,"post-preview__content"],[1,"post-preview__title"],[3,"routerLink"],[1,"post-preview__date"],[1,"post-preview__description"],[1,"post-preview__link",3,"routerLink"],[1,"page-btn",3,"click","disabled"],[1,"page-info"]],template:function(n,c){n&1&&(r(0,"div",0)(1,"header",1)(2,"h1"),a(3,"Blog Archive"),i(),r(4,"p",2),a(5,"Explore all articles and stories"),i()(),r(6,"div",3),M(7,S,12,11,"article",4,F),i(),g(9,j,3,0,"div",5),g(10,I,7,4,"nav",6),i()),n&2&&(o(7),O(c.pagedPosts),o(2),d(c.posts.length===0?9:-1),o(),d(c.totalPages>1?10:-1))},dependencies:[w],styles:[`.blog-archive[_ngcontent-%COMP%] {
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
      margin: 0 0 0.75rem 0;
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

    .pagination[_ngcontent-%COMP%] {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 2rem 0;
    }

    .page-btn[_ngcontent-%COMP%] {
      padding: 0.5rem 1rem;
      border: 1px solid #dee2e6;
      background: #fff;
      border-radius: 6px;
      cursor: pointer;
    }

    .page-btn[_ngcontent-%COMP%]:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .page-info[_ngcontent-%COMP%] {
      color: #495057;
    }

    @media (max-width: 768px) {
      .archive-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
        font-size: 1.75rem;
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
    }`]});let f=s;export{f as default};
