import{i as x,ɵ as C,R as O,a as t,b as r,c as o,h as M,k as a,m as k,e as v,g as p,n as u,t as b,z as w,l as g,r as m,u as y}from"./index-BD8V2xkJ.js";import{p as z}from"./pagination-config-BIRU8DJ8.js";const T=e=>["/blog",e],R=(e,i)=>i.attributes.slug;function F(e,i){e&1&&(t(0,"div",11),r(1,"📝 Draft"),o())}function j(e,i){e&1&&(t(0,"div",11),r(1,"📌 Pinned"),o())}function D(e,i){if(e&1&&(t(0,"p",13),r(1),o()),e&2){const n=u().$implicit;a(),m(n.attributes.date)}}function I(e,i){if(e&1&&(t(0,"article",6),v(1,"img",9),t(2,"div",10),p(3,F,2,0,"div",11),p(4,j,2,0,"div",11),t(5,"h3",12),r(6),o(),p(7,D,2,1,"p",13),t(8,"p",14),r(9),o(),t(10,"a",15),r(11," Read More → "),o()()()),e&2){const n=i.$implicit,c=u();a(),b("src",n.attributes.coverImage||c.defaultCoverImage,w)("alt",n.attributes.title),a(2),g(n.attributes.isDraft?3:-1),a(),g(n.attributes.isPinned?4:-1),a(2),m(n.attributes.title),a(),g(n.attributes.date?7:-1),a(2),m(n.attributes.description),a(),b("routerLink",y(8,T,n.attributes.slug))}}const L="tamil-literature-default.svg",d=class d{constructor(){this.posts=x(),this.defaultCoverImage=L,this.recentPosts=[]}ngOnInit(){this.loadRecentPosts()}loadRecentPosts(){const n=[...this.posts.filter(s=>!s.attributes.isDraft)].sort((s,_)=>s.attributes.isPinned&&!_.attributes.isPinned?-1:!s.attributes.isPinned&&_.attributes.isPinned?1:new Date(_.attributes.date||"").getTime()-new Date(s.attributes.date||"").getTime()),c=n.filter(s=>s.attributes.isPinned),f=n.filter(s=>!s.attributes.isPinned),h=z.homeRecentPostsCount,P=Math.max(0,h-c.length);this.recentPosts=[...c,...f.slice(0,P)]}};d.ɵfac=function(n){return new(n||d)},d.ɵcmp=C({type:d,selectors:[["app-home"]],decls:16,vars:0,consts:[[1,"hero"],[1,"hero__title"],[1,"hero__subtitle"],["routerLink","/blog",1,"hero__cta"],[1,"recent-posts"],[1,"posts-grid"],[1,"post-card"],[1,"all-posts-link"],["routerLink","/blog",1,"btn-link"],[1,"post-card__image",3,"src","alt"],[1,"post-card__content"],[1,"post-card__badge"],[1,"post-card__title"],[1,"post-card__date"],[1,"post-card__description"],[1,"post-card__link",3,"routerLink"]],template:function(n,c){n&1&&(t(0,"section",0)(1,"h1",1),r(2,"Welcome to AR தமிழ் சோலை"),o(),t(3,"p",2),r(4,"Explore articles, stories, and insights"),o(),t(5,"a",3),r(6,"Read Blog"),o()(),t(7,"section",4)(8,"h2"),r(9,"Recent Posts"),o(),t(10,"div",5),M(11,I,12,10,"article",6,R),o(),t(13,"div",7)(14,"a",8),r(15,"View All Posts →"),o()()()),n&2&&(a(11),k(c.recentPosts))},dependencies:[O],styles:[`.hero[_ngcontent-%COMP%] {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 10px;
      margin-bottom: 4rem;
    }

    .hero__title[_ngcontent-%COMP%] {
      font-size: 3rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
      line-height: 1.2;
    }

    .hero__subtitle[_ngcontent-%COMP%] {
      font-size: 1.25rem;
      margin: 0 0 2rem 0;
      opacity: 0.9;
    }

    .hero__cta[_ngcontent-%COMP%] {
      display: inline-block;
      padding: 0.75rem 2rem;
      background-color: white;
      color: #667eea;
      text-decoration: none;
      border-radius: 5px;
      font-weight: 600;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .hero__cta[_ngcontent-%COMP%]:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .recent-posts[_ngcontent-%COMP%] {
      margin-bottom: 4rem;
    }

    .recent-posts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .posts-grid[_ngcontent-%COMP%] {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .post-card[_ngcontent-%COMP%] {
      border: 1px solid #e9ecef;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background-color: #fff;
    }

    .post-card[_ngcontent-%COMP%]:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .post-card__image[_ngcontent-%COMP%] {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }

    .post-card__content[_ngcontent-%COMP%] {
      padding: 1.5rem;
    }

    .post-card__title[_ngcontent-%COMP%] {
      font-size: 1.25rem;
      margin: 0 0 0.5rem 0;
      color: #212529;
      line-height: 1.4;
    }

    .post-card__date[_ngcontent-%COMP%] {
      font-size: 0.875rem;
      color: #6c757d;
      margin: 0 0 0.75rem 0;
    }

    .post-card__badge[_ngcontent-%COMP%] {
      display: inline-block;
      background: #fff3cd;
      color: #664d03;
      border: 1px solid #ffecb5;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }

    .post-card__description[_ngcontent-%COMP%] {
      color: #495057;
      margin: 0 0 1rem 0;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .post-card__link[_ngcontent-%COMP%] {
      color: #0d6efd;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    .post-card__link[_ngcontent-%COMP%]:hover {
      color: #0b5ed7;
    }

    .all-posts-link[_ngcontent-%COMP%] {
      text-align: center;
    }

    .btn-link[_ngcontent-%COMP%] {
      display: inline-block;
      padding: 0.75rem 2rem;
      border: 2px solid #0d6efd;
      color: #0d6efd;
      text-decoration: none;
      border-radius: 5px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .btn-link[_ngcontent-%COMP%]:hover {
      background-color: #0d6efd;
      color: white;
    }

    @media (max-width: 768px) {
      .hero[_ngcontent-%COMP%] {
        padding: 2rem 1rem;
      }

      .hero__title[_ngcontent-%COMP%] {
        font-size: 2rem;
      }

      .hero__subtitle[_ngcontent-%COMP%] {
        font-size: 1rem;
      }

      .posts-grid[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
      }
    }`]});let l=d;const A=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"})),H=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}));export{A as h,H as i};
