import{S as D,i as N,s as k,k as S,e as y,w as q,t as F,ac as O,m as H,c as w,a as C,x as V,h as A,d,ad as J,b as j,f as M,g as E,J as u,y as T,j as U,q as z,a7 as G,o as K,a8 as L,B as P,a9 as Q}from"../../chunks/index-22cdd14c.js";import{f as x}from"../../chunks/index-0c289c09.js";/* empty css                                                       */import{B as R}from"../../chunks/Breadcrumbs-90e33b81.js";function W(l){let n,a,s,e,r,$,o,f=l[0].title+"",v,I,_,g=l[0].content+"",b,p,c;return r=new R({props:{pages:[["/","Home"],["/news","News"],["/news/"+l[0].slug,l[0].title]]}}),{c(){n=S(),a=y("main"),s=y("div"),e=y("div"),q(r.$$.fragment),$=S(),o=y("h1"),v=F(f),I=S(),_=new O(!1),this.h()},l(t){n=H(t),a=w(t,"MAIN",{class:!0});var i=C(a);s=w(i,"DIV",{class:!0});var h=C(s);e=w(h,"DIV",{style:!0});var m=C(e);V(r.$$.fragment,m),$=H(m),o=w(m,"H1",{class:!0});var B=C(o);v=A(B,f),B.forEach(d),I=H(m),_=J(m,!1),m.forEach(d),h.forEach(d),i.forEach(d),this.h()},h(){j(o,"class","cosi-title-1"),_.a=null,M(e,"max-width","766px"),j(s,"class","flex justify-center mt-40 mb-20"),j(a,"class","px-6")},m(t,i){E(t,n,i),E(t,a,i),u(a,s),u(s,e),T(r,e,null),u(e,$),u(e,o),u(o,v),u(e,I),_.m(g,e),c=!0},p(t,[i]){const h={};i&1&&(h.pages=[["/","Home"],["/news","News"],["/news/"+t[0].slug,t[0].title]]),r.$set(h),(!c||i&1)&&f!==(f=t[0].title+"")&&U(v,f),(!c||i&1)&&g!==(g=t[0].content+"")&&_.p(g)},i(t){c||(z(r.$$.fragment,t),G(()=>{p&&p.end(1),b=Q(a,x,{y:50,duration:500,delay:500}),b.start()}),c=!0)},o(t){K(r.$$.fragment,t),b&&b.invalidate(),p=L(a,x,{duration:500}),c=!1},d(t){t&&d(n),t&&d(a),P(r),t&&p&&p.end()}}}async function at({fetch:l,params:n}){console.log(n.id);const s=[{id:24,slug:"C4-Colourlab-COSI-Creativity-Camp-at-Sp\xE5tind Fjellstue",title:"C4 - Colourlab COSI Creativity Camp at Sp\xE5tind Fjellstue",content:`
                <h2 class="cosi-headline mb-4">
                    
                </h2>
                <p class="cosi-p">
                    
                </p>

                <h2 class="cosi-title-2 mt-12 mb-6">
                    
                </h2>
                <p class="cosi-p">
                    
                </p>
            `}].find(e=>e.id===parseInt(n.id));return{props:{article:s||{slug:"",title:"",content:""}}}}function X(l,n,a){let{article:s}=n;return l.$$set=e=>{"article"in e&&a(0,s=e.article)},[s]}class st extends D{constructor(n){super(),N(this,n,X,W,k,{article:0})}}export{st as default,at as load};
