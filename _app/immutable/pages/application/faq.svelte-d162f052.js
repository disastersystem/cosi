import{S as G,i as R,s as K,w as B,x as T,y as V,q as E,o as D,B as S,e as y,k as F,t as U,N as X,c as $,d as l,m as M,a as g,h as Z,b as r,f as ee,J as m,g as I,p as te,a7 as ae,a8 as se,aa as ne,n as ie,a9 as oe,E as re,F as H,G as O}from"../../chunks/index-22cdd14c.js";import{f as Q}from"../../chunks/index-0c289c09.js";import{D as le,a as ce,T as ue,b as pe}from"../../chunks/TransitionRoot-cb159723.js";import{B as de}from"../../chunks/Breadcrumbs-90e33b81.js";import"../../chunks/index-ab270473.js";function z(p,e,a){const t=p.slice();return t[1]=e[a].question,t[2]=e[a].answer,t}function he(p){let e,a;return{c(){e=H("svg"),a=H("path"),this.h()},l(t){e=O(t,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0,"aria-hidden":!0});var s=g(e);a=O(s,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),g(a).forEach(l),s.forEach(l),this.h()},h(){r(a,"fill-rule","evenodd"),r(a,"d","M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"),r(a,"clip-rule","evenodd"),r(e,"class","h-5 w-5"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"viewBox","0 0 20 20"),r(e,"fill","currentColor"),r(e,"aria-hidden","true")},m(t,s){I(t,e,s),m(e,a)},d(t){t&&l(e)}}}function fe(p){let e,a;return{c(){e=H("svg"),a=H("path"),this.h()},l(t){e=O(t,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0,"aria-hidden":!0});var s=g(e);a=O(s,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),g(a).forEach(l),s.forEach(l),this.h()},h(){r(a,"fill-rule","evenodd"),r(a,"d","M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"),r(a,"clip-rule","evenodd"),r(e,"class","h-5 w-5"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"viewBox","0 0 20 20"),r(e,"fill","currentColor"),r(e,"aria-hidden","true")},m(t,s){I(t,e,s),m(e,a)},d(t){t&&l(e)}}}function me(p){let e,a,t=p[1]+"",s,o,n;function d(v,_){return v[5]?fe:he}let b=d(p),h=b(p);return{c(){e=y("div"),a=y("div"),s=F(),o=y("div"),n=y("span"),h.c(),this.h()},l(v){e=$(v,"DIV",{class:!0});var _=g(e);a=$(_,"DIV",{class:!0});var w=g(a);w.forEach(l),s=M(_),o=$(_,"DIV",{});var k=g(o);n=$(k,"SPAN",{class:!0});var x=g(n);h.l(x),x.forEach(l),k.forEach(l),_.forEach(l),this.h()},h(){r(a,"class","font-bold text-gray-900 text-left"),r(n,"class","ml-6 flex items-center"),r(e,"class","flex justify-between p-4 border-t border-grey-700")},m(v,_){I(v,e,_),m(e,a),a.innerHTML=t,m(e,s),m(e,o),m(o,n),h.m(n,null)},p(v,_){b!==(b=d(v))&&(h.d(1),h=b(v),h&&(h.c(),h.m(n,null)))},d(v){v&&l(e),h.d()}}}function ge(p){let e,a=p[2]+"";return{c(){e=y("div"),this.h()},l(t){e=$(t,"DIV",{class:!0});var s=g(e);s.forEach(l),this.h()},h(){r(e,"class","px-4 pt-2 pb-10")},m(t,s){I(t,e,s),e.innerHTML=a},p:re,d(t){t&&l(e)}}}function ve(p){let e,a;return e=new pe({props:{$$slots:{default:[ge]},$$scope:{ctx:p}}}),{c(){B(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){V(e,t,s),a=!0},p(t,s){const o={};s&64&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){a||(E(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){S(e,t)}}}function _e(p){let e,a,t,s,o;return e=new ce({props:{class:"w-full",$$slots:{default:[me]},$$scope:{ctx:p}}}),t=new ue({props:{enter:"transition ease-in-out duration-300 transform",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",$$slots:{default:[ve]},$$scope:{ctx:p}}}),{c(){B(e.$$.fragment),a=F(),B(t.$$.fragment),s=F()},l(n){T(e.$$.fragment,n),a=M(n),T(t.$$.fragment,n),s=M(n)},m(n,d){V(e,n,d),I(n,a,d),V(t,n,d),I(n,s,d),o=!0},p(n,d){const b={};d&96&&(b.$$scope={dirty:d,ctx:n}),e.$set(b);const h={};d&64&&(h.$$scope={dirty:d,ctx:n}),t.$set(h)},i(n){o||(E(e.$$.fragment,n),E(t.$$.fragment,n),o=!0)},o(n){D(e.$$.fragment,n),D(t.$$.fragment,n),o=!1},d(n){S(e,n),n&&l(a),S(t,n),n&&l(s)}}}function L(p){let e,a;return e=new le({props:{$$slots:{default:[_e,({open:t})=>({5:t}),({open:t})=>t?32:0]},$$scope:{ctx:p}}}),{c(){B(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){V(e,t,s),a=!0},p(t,s){const o={};s&96&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){a||(E(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){S(e,t)}}}function ye(p){let e,a,t,s,o,n,d,b,h,v,_,w,k,x,W;d=new de({props:{pages:[["/","Home"],["/application/faq","FAQ"]]}});let C=p[0],c=[];for(let i=0;i<C.length;i+=1)c[i]=L(z(p,C,i));const Y=i=>D(c[i],1,1,()=>{c[i]=null});return{c(){e=y("meta"),a=F(),t=y("main"),s=y("div"),o=y("div"),n=y("div"),B(d.$$.fragment),b=F(),h=y("h1"),v=U("FAQ"),_=F(),w=y("div");for(let i=0;i<c.length;i+=1)c[i].c();this.h()},l(i){const f=X('[data-svelte="svelte-15j1wgt"]',document.head);e=$(f,"META",{name:!0,content:!0}),f.forEach(l),a=M(i),t=$(i,"MAIN",{class:!0});var u=g(t);s=$(u,"DIV",{class:!0});var A=g(s);o=$(A,"DIV",{class:!0,style:!0});var q=g(o);n=$(q,"DIV",{class:!0});var j=g(n);T(d.$$.fragment,j),j.forEach(l),b=M(q),h=$(q,"H1",{class:!0});var N=g(h);v=Z(N,"FAQ"),N.forEach(l),_=M(q),w=$(q,"DIV",{class:!0});var J=g(w);for(let P=0;P<c.length;P+=1)c[P].l(J);J.forEach(l),q.forEach(l),A.forEach(l),u.forEach(l),this.h()},h(){document.title="FAQ - COSI",r(e,"name","description"),r(e,"content",""),r(n,"class","ml-4"),r(h,"class","cosi-title-1 pl-4"),r(w,"class","mt-20"),r(o,"class","mt-40 mb-40"),ee(o,"max-width","750px"),r(s,"class","flex justify-center"),r(t,"class","svelte-25in92")},m(i,f){m(document.head,e),I(i,a,f),I(i,t,f),m(t,s),m(s,o),m(o,n),V(d,n,null),m(o,b),m(o,h),m(h,v),m(o,_),m(o,w);for(let u=0;u<c.length;u+=1)c[u].m(w,null);W=!0},p(i,[f]){if(f&33){C=i[0];let u;for(u=0;u<C.length;u+=1){const A=z(i,C,u);c[u]?(c[u].p(A,f),E(c[u],1)):(c[u]=L(A),c[u].c(),E(c[u],1),c[u].m(w,null))}for(ie(),u=C.length;u<c.length;u+=1)Y(u);te()}},i(i){if(!W){E(d.$$.fragment,i);for(let f=0;f<C.length;f+=1)E(c[f]);ae(()=>{x&&x.end(1),k=oe(t,Q,{y:50,duration:500,delay:500}),k.start()}),W=!0}},o(i){D(d.$$.fragment,i),c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)D(c[f]);k&&k.invalidate(),x=se(t,Q,{duration:500}),W=!1},d(i){l(e),i&&l(a),i&&l(t),S(d),ne(c,i),i&&x&&x.end()}}}function $e(p){return[[{question:"Do I need to submit a separate application to be considered for scholarships?",answer:`
                <p class="cosi-p">
                    No. Your online application to COSI degrees will be used to award scholarships managed by the Consortium as well
                    (Erasmus+ EMJMD scholarships, Consortium scholarships, Foundation Jean Monnet scholarships), and,
                    if you're selected, to national scholarships programmes during the period of study. Scholarships
                    attribution will be communicated at the same time as the outcome of the selection. Time will be given
                    to applicants to confirm / choose between degrees in the light of the scholarship award.
                </p>
                <p class="cosi-p">
                    However, there is a number of scholarships programmes (bilateral, multilateral) you may be eligible for. We encourage you to look for such opportunities, that can complement the financial support you'll may received from us. We'll provide any needed supporting documentation but application to such programmes are your own responsibility. Application process and supporting documentation differs between programmes.
                </p>
            `},{question:"I don't have the financial ability to finance this period of study. What are my options?",answer:`
                <p class="cosi-p">
                    Applying to COSI means applying to scholarships managed by the Consortium as well.
                    Erasmus+ EMJMD, is a very generous scholarship that can virtually finance any expenses (including
                    costs of living and travel expenses) during your 2-years Master's Degree enrollment. Consortium scholarships
                    reduce considerably the Participation Costs. Other programmes are available to scientific students with
                    outstanding academic background. Please do apply; you'll be informed of scholarship award at the same
                    time as the selection outcome and given time to decide if you wish to enroll given the level of financial
                    support we offer.
                </p>
            `},{question:'I cannot produce, at the time of the online application, results of an internationally recognized English test <span class="text-sm">(</span>TOEFL, TOEIC, ...<span class="text-sm">)</span>. Does that make me ineligible?',answer:`
                <p class="cosi-p">
                    You need to justify your English level at the application deadline. We cannot guarantee that without a
                    justification of English proficiency you can pass the administrative check.
                <p>
                <p class="cosi-p">
                    Please, see <a class="external" href="https://internacional.ugr.es/pages/politica-linguistica/tablasdecertificadosaceptadosporlaugr">this page</a>
                    for alternative tests.
                </p>
            `},{question:'Am I eligible with a BS in textile industry <span class="text-sm">/</span> Electronics Engineering <span class="text-sm">/</span> Chemistry...?',answer:`
                <p class="cosi-p">
                    Please check carefully <a class="external" href="/application/eligibility-criteria">this section</a> for academic background requirements.
                <p>
                <p class="cosi-p">
                    We don't specifically target a given major at bachelor level, but rather applicants with a solid academic
                    background in the general fields of physics and/or mathematics and/or computer science. It really
                    depends on bachelor's curriculum.
                </p>
            `},{question:"Is a background in colour science necessary to be eligible?",answer:`
                <p class="cosi-p">
                    No, we don't required a background in Colour science, as this is the aim of the Programme to educate student to this interdisciplinary field.
                <p>
            `},{question:'When I login to my account, my application appears as "pending". What should I do?',answer:`
                <p class="cosi-p">
                    Once you've succesfully submitted your application, a pop-up message indicate that your application has
                    been saved successfully (in green on the upper-right of the screen) and your application appears as
                    "pending" in the left menu. As long as you've received a automatic conformation email, this means your
                    application will be considered by the selection committee.
                <p>
            `},{question:"French visa: Do I need to apply to Campus France CEF in addition to the online application?",answer:`
                <p class="cosi-p">
                    You should first apply online to the Master's Degree. If you're selected, we'll guide you through the
                    Campus France application, if applicable. We're in direct contact with Campus France offices and
                    work toward simplifying as much as possible the CEF procedure for selected students.
                    For more info on the CEF process and countries concerned, please visit these pages <a class="external" href="/france">france</a>, <a class="external" href="/spain">spain</a>, <a class="external" href="/norway">norway</a>, <a class="external" href="/finland">finland</a>.
                <p>
            `}]]}class ke extends G{constructor(e){super(),R(this,e,$e,ye,K,{})}}export{ke as default};
