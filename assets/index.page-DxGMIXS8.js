import{i as p,ɵ as g,R as m,a as t,b as o,c as e,d as b,e as i,f as h,p as f,j as u,k as l,h as _,n as x,l as P,g as C,v as O}from"./index-D1cQraU-.js";const M=r=>["/blog",r],k=(r,a)=>a.attributes.slug;function w(r,a){if(r&1&&(t(0,"p",12),o(1),e()),r&2){const n=C().$implicit;i(),_(n.attributes.date)}}function v(r,a){if(r&1&&(t(0,"article",6),f(1,"img",9),t(2,"div",10)(3,"h3",11),o(4),e(),u(5,w,2,1,"p",12),t(6,"p",13),o(7),e(),t(8,"a",14),o(9," Read More → "),e()()()),r&2){const n=a.$implicit;i(),l("src",n.attributes.coverImage,O)("alt",n.attributes.title),i(3),_(n.attributes.title),i(),x(n.attributes.date?5:-1),i(2),_(n.attributes.description),i(),l("routerLink",P(6,M,n.attributes.slug))}}const s=class s{constructor(){this.posts=p(),this.recentPosts=[]}ngOnInit(){this.recentPosts=this.posts.slice(0,3)}};s.ɵfac=function(n){return new(n||s)},s.ɵcmp=g({type:s,selectors:[["app-home"]],decls:16,vars:0,consts:[[1,"hero"],[1,"hero__title"],[1,"hero__subtitle"],["routerLink","/blog",1,"hero__cta"],[1,"recent-posts"],[1,"posts-grid"],[1,"post-card"],[1,"all-posts-link"],["routerLink","/blog",1,"btn-link"],[1,"post-card__image",3,"src","alt"],[1,"post-card__content"],[1,"post-card__title"],[1,"post-card__date"],[1,"post-card__description"],[1,"post-card__link",3,"routerLink"]],template:function(n,d){n&1&&(t(0,"section",0)(1,"h1",1),o(2,"Welcome to தமிழ் சோலை"),e(),t(3,"p",2),o(4,"Explore articles, stories, and insights"),e(),t(5,"a",3),o(6,"Read Blog"),e()(),t(7,"section",4)(8,"h2"),o(9,"Recent Posts"),e(),t(10,"div",5),b(11,v,10,8,"article",6,k),e(),t(13,"div",7)(14,"a",8),o(15,"View All Posts →"),e()()()),n&2&&(i(11),h(d.recentPosts))},dependencies:[m],styles:[`.hero[_ngcontent-%COMP%] {
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
    }`]});let c=s;const z=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"})),j=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"}));export{z as h,j as i};
