import{V as o,dw as p,dx as u,dy as d,dz as l,dA as c,dB as f,dC as m,dD as h,dE as A,dF as g,Y as P,d as _,u as v,k as y,y as C,dG as E,dH as w,dI as R,dJ as b}from"./chunks/framework.BCjvRTpF.js";import{t as D}from"./chunks/theme.BQf9ZY8b.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(D),S=_({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=v();return y(()=>{C(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&E(),w(),R(),s.setup&&s.setup(),()=>b(s.Layout)}});async function T(){globalThis.__VITEPRESS__=!0;const e=x(),t=V();t.provide(u,e);const a=d(e.route);return t.provide(l,a),t.component("Content",c),t.component("ClientOnly",f),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function V(){return h(S)}function x(){let e=o,t;return A(a=>{let n=g(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[])),o&&(e=!1),r},s.NotFound)}o&&T().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{T as createApp};
