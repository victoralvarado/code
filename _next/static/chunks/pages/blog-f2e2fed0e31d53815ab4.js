(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{6527:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var a=t(5893),i=t(1664),r=t(2895),o=function(){return(0,a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",style:{background:"#252E3C"},children:(0,a.jsxs)("div",{className:"container",children:[r.vC.map((function(e,n){var t=e.nav;return(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("img",{src:t,alt:"VA",height:"45px"})},n)})),(0,a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,a.jsx)("span",{className:"navbar-toggler-icon"})}),(0,a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:(0,a.jsxs)("ul",{className:"navbar-nav ms-auto",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(i.default,{href:"blog",children:(0,a.jsx)("a",{className:"nav-link",children:"Blog"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(i.default,{href:"github",children:(0,a.jsx)("a",{className:"nav-link",children:"Github"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(i.default,{href:"contact",children:(0,a.jsx)("a",{className:"nav-link",children:"Contactar"})})})]})})]})})},l=function(e){var n=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{}),(0,a.jsx)("main",{className:"p-0",children:n})]})}},2167:function(e,n,t){"use strict";var a=t(3038),i=t(862);n.default=void 0;var r=i(t(7294)),o=t(9414),l=t(4651),u=t(7426),s={};function c(e,n,t,a){if(e&&(0,o.isLocalURL)(n)){e.prefetch(n,t,a).catch((function(e){0}));var i=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;s[n+"%"+t+(i?"%"+i:"")]=!0}}var m=function(e){var n,t=!1!==e.prefetch,i=(0,l.useRouter)(),m=r.default.useMemo((function(){var n=(0,o.resolveHref)(i,e.href,!0),t=a(n,2),r=t[0],l=t[1];return{href:r,as:e.as?(0,o.resolveHref)(i,e.as):l||r}}),[i,e.href,e.as]),p=m.href,f=m.as,d=e.children,v=e.replace,g=e.shallow,h=e.scroll,b=e.locale;"string"===typeof d&&(d=r.default.createElement("a",null,d));var L=(n=r.Children.only(d))&&"object"===typeof n&&n.ref,j=(0,u.useIntersection)({rootMargin:"200px"}),q=a(j,2),x=q[0],k=q[1],N=r.default.useCallback((function(e){x(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[L,x]);(0,r.useEffect)((function(){var e=k&&t&&(0,o.isLocalURL)(p),n="undefined"!==typeof b?b:i&&i.locale,a=s[p+"%"+f+(n?"%"+n:"")];e&&!a&&c(i,p,f,{locale:n})}),[f,p,k,b,t,i]);var C={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,a,i,r,l,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==l&&a.indexOf("#")>=0&&(l=!1),n[i?"replace":"push"](t,a,{shallow:r,locale:u,scroll:l}))}(e,i,p,f,v,g,h,b)},onMouseEnter:function(e){(0,o.isLocalURL)(p)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c(i,p,f,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var y="undefined"!==typeof b?b:i&&i.locale,E=i&&i.isLocaleDomain&&(0,o.getDomainLocale)(f,y,i&&i.locales,i&&i.domainLocales);C.href=E||(0,o.addBasePath)((0,o.addLocale)(f,y,i&&i.defaultLocale))}return r.default.cloneElement(n,C)};n.default=m},7426:function(e,n,t){"use strict";var a=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,u=(0,i.useRef)(),s=(0,i.useState)(!1),c=a(s,2),m=c[0],p=c[1],f=(0,i.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||m||e&&e.tagName&&(u.current=function(e,n,t){var a=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:i,elements:a}),t}(t),i=a.id,r=a.observer,o=a.elements;return o.set(e,n),r.observe(e),function(){o.delete(e),r.unobserve(e),0===o.size&&(r.disconnect(),l.delete(i))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,m]);return(0,i.useEffect)((function(){if(!o&&!m){var e=(0,r.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[m]),[f,m]};var i=t(7294),r=t(3447),o="undefined"!==typeof IntersectionObserver;var l=new Map},2695:function(e,n,t){"use strict";t.r(n);var a=t(5893),i=t(6527);n.default=function(){return(0,a.jsx)(i.Z,{children:(0,a.jsx)("h1",{children:"Blog"})})}},2895:function(e,n,t){"use strict";t.d(n,{nb:function(){return a},q:function(){return i},vC:function(){return r}});var a=[{skill:"C#",percentage:85,img:"csharp.png"},{skill:"Java",percentage:85,img:"java.png"},{skill:"PHP",percentage:85,img:"php.png"},{skill:"JavaScript",percentage:85,img:"javascript.png"},{skill:"Vuejs",percentage:65,img:"vue.png"},{skill:"Reactjs",percentage:40,img:"react.png"},{skill:"HTML 5",percentage:100,img:"html.png"},{skill:"CSS 3",percentage:100,img:"css3.png"},{skill:"Laravel",percentage:100,img:"laravel.png"},{skill:"SQL Server",percentage:100,img:"sql.png"},{skill:"MySQL",percentage:100,img:"mysql.png"}],i=[{title:"Lorem",description:"Veniam voluptate dolor minim minim sint. Cillum fugiat sunt Lorem voluptate incididunt anim qui et aliquip. Dolore commodo sunt aliqua aute esse voluptate officia aliqua labore minim elit.",img:"startup.png",url1:"#",url2:"#",boton1:"",boton2:""},{title:"Lorem",description:"Veniam voluptate dolor minim minim sint. Cillum fugiat sunt Lorem voluptate incididunt anim qui et aliquip. Dolore commodo sunt aliqua aute esse voluptate officia aliqua labore minim elit.",img:"startup.png",url1:"#",url2:"#",boton1:"none",boton2:""},{title:"Lorem",description:"Veniam voluptate dolor minim minim sint. Cillum fugiat sunt Lorem voluptate incididunt anim qui et aliquip. Dolore commodo sunt aliqua aute esse voluptate officia aliqua labore minim elit.",img:"startup.png",url1:"#",url2:"#",boton1:"none",boton2:""},{title:"Lorem",description:"Veniam voluptate dolor minim minim sint. Cillum fugiat sunt Lorem voluptate incididunt anim qui et aliquip. Dolore commodo sunt aliqua aute esse voluptate officia aliqua labore minim elit.",img:"startup.png",url1:"#",url2:"#",boton1:"none",boton2:""},{title:"Lorem",description:"Veniam voluptate dolor minim minim sint. Cillum fugiat sunt Lorem voluptate incididunt anim qui et aliquip. Dolore commodo sunt aliqua aute esse voluptate officia aliqua labore minim elit.",img:"startup.png",url1:"#",url2:"#",boton1:"none",boton2:""},{title:"Lorem",description:"Veniam voluptate dolor minim minim sint. Cillum fugiat sunt Lorem voluptate incididunt anim qui et aliquip. Dolore commodo sunt aliqua aute esse voluptate officia aliqua labore minim elit.",img:"startup.png",url1:"#",url2:"#",boton1:"none",boton2:""}],r=[{ico:"vanav1.ico",nav:"vanav.png",header:"recurso2.png",description:"victoralvaradocode"}]},5809:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(2695)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5809,e(e.s=n);var n}));var n=e.O();_N_E=n}]);