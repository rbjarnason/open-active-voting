if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,d)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}})).then(e=>{const r=d(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-80efdfd1"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"30715ca7.js",revision:"8ef46f1d82f7633299d3e4132a0c0999"},{url:"61b75bec.js",revision:"e1bfa6c6d06346ff5637b4a7fa036d18"},{url:"b7affcd2.js",revision:"c82010358f7ae0b6dbc6292cf39458a3"},{url:"d06ddd2a.js",revision:"1d4ec52372ee0202d976a2b59e38b397"},{url:"ebdb6b0d.js",revision:"87670cc12ff5f07d5722a897e7bd2291"},{url:"f9d05c39.js",revision:"4ebd6cc7677ecdeb3af43808415a989b"},{url:"index.html",revision:"04bfe500dbb46a8a49a6fba3a2c09086"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map