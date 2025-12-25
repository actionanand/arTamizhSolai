import{i as M,ɵ as O,R as w,a as n,e as m,b as e,c as t,h as v,k as s,m as k,g as p,n as b,t as f,D as y,l as _,r as h,u as z,w as F,x as T}from"./index-CtZgTCvA.js";import{p as j}from"./pagination-config-BIRU8DJ8.js";import{F as D}from"./format-date.pipe-C9uwqIbC.js";const R=r=>["/blog",r],L=(r,i)=>i.attributes.slug;function Y(r,i){r&1&&(n(0,"div",25),e(1,"📝 Draft"),t())}function I(r,i){r&1&&(n(0,"div",25),e(1,"📌 Pinned"),t())}function S(r,i){if(r&1&&(n(0,"p",27),e(1),F(2,"formatDate"),t()),r&2){const o=b().$implicit;s(),h(T(2,1,o.attributes.date))}}function A(r,i){if(r&1&&(n(0,"article",20),m(1,"img",23),n(2,"div",24),p(3,Y,2,0,"div",25),p(4,I,2,0,"div",25),n(5,"h3",26),e(6),t(),p(7,S,3,3,"p",27),n(8,"p",28),e(9),t(),n(10,"a",29),e(11," Read More → "),t()()()),r&2){const o=i.$implicit,c=b();s(),f("src",o.attributes.coverImage||c.defaultCoverImage,y)("alt",o.attributes.title),s(2),_(o.attributes.isDraft?3:-1),s(),_(o.attributes.isPinned?4:-1),s(2),h(o.attributes.title),s(),_(o.attributes.date?7:-1),s(2),h(o.attributes.description),s(),f("routerLink",z(8,R,o.attributes.slug))}}const E="tamil-literature-default.svg",l=class l{constructor(){this.posts=M(),this.defaultCoverImage=E,this.recentPosts=[]}ngOnInit(){this.loadRecentPosts()}loadRecentPosts(){const o=[...this.posts.filter(a=>!a.attributes.isDraft)].sort((a,d)=>a.attributes.isPinned&&!d.attributes.isPinned?-1:!a.attributes.isPinned&&d.attributes.isPinned?1:new Date(d.attributes.date||"").getTime()-new Date(a.attributes.date||"").getTime()),c=o.filter(a=>a.attributes.isPinned),P=o.filter(a=>!a.attributes.isPinned),x=j.homeRecentPostsCount,u=Math.min(c.length,x),C=Math.max(0,x-u);this.recentPosts=[...c.slice(0,u),...P.slice(0,C)]}};l.ɵfac=function(o){return new(o||l)},l.ɵcmp=O({type:l,selectors:[["app-home"]],decls:38,vars:0,consts:[[1,"hero"],[1,"hero__container"],[1,"murugan-showcase"],[1,"murugan-circle-bg"],[1,"tamil-letters-circle"],[1,"letter",2,"--angle","0deg"],[1,"letter",2,"--angle","45deg"],[1,"letter",2,"--angle","90deg"],[1,"letter",2,"--angle","135deg"],[1,"letter",2,"--angle","180deg"],[1,"letter",2,"--angle","225deg"],[1,"letter",2,"--angle","270deg"],[1,"letter",2,"--angle","315deg"],["src","baby-murugan.webp","alt","Lord Murugan",1,"murugan-image"],[1,"hero__content"],[1,"hero__title"],[1,"hero__subtitle"],["routerLink","/blog",1,"hero__cta"],[1,"recent-posts"],[1,"posts-grid"],[1,"post-card"],[1,"all-posts-link"],["routerLink","/blog",1,"btn-link"],[1,"post-card__image",3,"src","alt"],[1,"post-card__content"],[1,"post-card__badge"],[1,"post-card__title"],[1,"post-card__date"],[1,"post-card__description"],[1,"post-card__link",3,"routerLink"]],template:function(o,c){o&1&&(n(0,"section",0)(1,"div",1)(2,"div",2),m(3,"div",3),n(4,"div",4)(5,"span",5),e(6,"ஓ"),t(),n(7,"span",6),e(8,"ம்"),t(),n(9,"span",7),e(10,"ச"),t(),n(11,"span",8),e(12,"ர"),t(),n(13,"span",9),e(14,"வ"),t(),n(15,"span",10),e(16,"ண"),t(),n(17,"span",11),e(18,"ப"),t(),n(19,"span",12),e(20,"வ"),t()(),m(21,"img",13),t(),n(22,"div",14)(23,"h1",15),e(24,"ஆனந்த் ராஜாவின் தமிழ் சோலை"),t(),n(25,"p",16),e(26,"Explore articles, stories, and insights on Tamil culture and technology"),t(),n(27,"a",17),e(28,"Read Blog"),t()()()(),n(29,"section",18)(30,"h2"),e(31,"Recent Posts"),t(),n(32,"div",19),v(33,A,12,10,"article",20,L),t(),n(35,"div",21)(36,"a",22),e(37,"View All Posts →"),t()()()),o&2&&(s(33),k(c.recentPosts))},dependencies:[w,D],styles:[`@keyframes _ngcontent-%COMP%_rotate-circle {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes _ngcontent-%COMP%_bounce-murugan {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes _ngcontent-%COMP%_pulse-glow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(76, 175, 80, 0.3), 0 0 40px rgba(76, 175, 80, 0.15);
      }
      50% {
        box-shadow: 0 0 40px rgba(76, 175, 80, 0.5), 0 0 60px rgba(76, 175, 80, 0.3);
      }
    }

    .hero[_ngcontent-%COMP%] {
      background: linear-gradient(135deg, #0a3d62 0%, #1a5c7a 20%, #2a7f9e 40%, #16a085 70%, #138d75 100%);
      padding: 4rem 2rem;
      border-radius: 15px;
      margin-bottom: 4rem;
      position: relative;
      overflow: hidden;
    }

    .hero[_ngcontent-%COMP%]::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 80% 20%, rgba(76, 175, 80, 0.15) 0%, transparent 50%);
      pointer-events: none;
      z-index: 0;
    }

    .hero[_ngcontent-%COMP%]::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 20% 80%, rgba(76, 175, 80, 0.08) 0%, transparent 50%);
      pointer-events: none;
      z-index: 0;
    }

    .hero__container[_ngcontent-%COMP%] {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
    }

    .murugan-showcase[_ngcontent-%COMP%] {
      flex: 0 0 300px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 350px;
    }

    .murugan-circle-bg[_ngcontent-%COMP%] {
      position: absolute;
      width: 280px;
      height: 280px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(76, 175, 80, 0.08) 100%);
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.1);
    }

    .tamil-letters-circle[_ngcontent-%COMP%] {
      position: absolute;
      width: 320px;
      height: 320px;
      animation: _ngcontent-%COMP%_rotate-circle 20s linear infinite;
      left: 50%;
      top: 50%;
      margin-left: -160px;
      margin-top: -160px;
    }

    .letter[_ngcontent-%COMP%] {
      position: absolute;
      width: 40px;
      height: 40px;
      left: 50%;
      top: 50%;
      margin-left: -20px;
      margin-top: -20px;
      transform: rotate(var(--angle)) translateY(-160px) rotateZ(calc(var(--angle) * -1));
      font-size: 1.8rem;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .murugan-image[_ngcontent-%COMP%] {
      width: 220px;
      height: 220px;
      object-fit: contain;
      filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3)) brightness(1.05);
      animation: _ngcontent-%COMP%_bounce-murugan 2.5s ease-in-out infinite;
      position: relative;
      z-index: 2;
    }

    .hero__content[_ngcontent-%COMP%] {
      flex: 1;
      color: white;
      text-align: left;
    }

    .hero__title[_ngcontent-%COMP%] {
      font-size: 2.8rem;
      font-weight: 800;
      margin: 0 0 1rem 0;
      line-height: 1.3;
      text-shadow: 0 3px 15px rgba(0, 0, 0, 0.5);
      letter-spacing: 0.5px;
      background: linear-gradient(135deg, #ffffff 0%, #e8f5e9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero__subtitle[_ngcontent-%COMP%] {
      font-size: 1.15rem;
      margin: 0 0 2rem 0;
      opacity: 0.95;
      line-height: 1.6;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .hero__cta[_ngcontent-%COMP%] {
      display: inline-block;
      padding: 0.85rem 2.5rem;
      background-color: #4CAF50;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 700;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
      border: 2px solid #4CAF50;
    }

    .hero__cta[_ngcontent-%COMP%]:hover {
      background-color: #45a049;
      border-color: white;
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(76, 175, 80, 0.6);
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

      .hero__container[_ngcontent-%COMP%] {
        flex-direction: column;
        gap: 1.5rem;
      }

      .murugan-showcase[_ngcontent-%COMP%] {
        flex: 0 0 auto;
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
        min-height: 280px;
      }

      .murugan-circle-bg[_ngcontent-%COMP%] {
        width: 200px;
        height: 200px;
      }

      .tamil-letters-circle[_ngcontent-%COMP%] {
        width: 240px;
        height: 240px;
        margin-left: -120px;
        margin-top: -120px;
        animation: _ngcontent-%COMP%_rotate-circle 25s linear infinite;
      }

      .letter[_ngcontent-%COMP%] {
        font-size: 1.4rem;
        width: 32px;
        height: 32px;
        margin-left: -16px;
        margin-top: -16px;
        transform: rotate(var(--angle)) translateY(-120px) rotateZ(calc(var(--angle) * -1));
      }

      .murugan-image[_ngcontent-%COMP%] {
        width: 160px;
        height: 160px;
        animation: _ngcontent-%COMP%_bounce-murugan 2.5s ease-in-out infinite;
      }

      .hero__content[_ngcontent-%COMP%] {
        text-align: center;
        width: 100%;
      }

      .hero__title[_ngcontent-%COMP%] {
        font-size: 1.8rem;
        letter-spacing: 0.3px;
      }

      .hero__subtitle[_ngcontent-%COMP%] {
        font-size: 0.95rem;
      }

      .posts-grid[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .hero[_ngcontent-%COMP%] {
        padding: 1.5rem 1rem;
        margin-bottom: 2rem;
      }

      .murugan-showcase[_ngcontent-%COMP%] {
        min-height: 250px;
        max-width: 250px;
      }

      .murugan-circle-bg[_ngcontent-%COMP%] {
        width: 180px;
        height: 180px;
      }

      .tamil-letters-circle[_ngcontent-%COMP%] {
        width: 220px;
        height: 220px;
        margin-left: -110px;
        margin-top: -110px;
        animation: _ngcontent-%COMP%_rotate-circle 28s linear infinite;
      }

      .letter[_ngcontent-%COMP%] {
        font-size: 1.2rem;
        width: 28px;
        height: 28px;
        margin-left: -14px;
        margin-top: -14px;
        transform: rotate(var(--angle)) translateY(-110px) rotateZ(calc(var(--angle) * -1));
      }

      .murugan-image[_ngcontent-%COMP%] {
        width: 140px;
        height: 140px;
      }

      .hero__title[_ngcontent-%COMP%] {
        font-size: 1.4rem;
      }

      .hero__subtitle[_ngcontent-%COMP%] {
        font-size: 0.85rem;
      }

      .hero__cta[_ngcontent-%COMP%] {
        padding: 0.7rem 1.8rem;
        font-size: 0.9rem;
      }
    }`]});let g=l;const B=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),U=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}));export{B as h,U as i};
