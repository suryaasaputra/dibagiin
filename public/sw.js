if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const t=e=>s(e,c),d={module:{uri:c},exports:r,require:t};a[c]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-LUtCz-jnmM4aI0goaMGIy.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/LUtCz-jnmM4aI0goaMGIy/_buildManifest.js",revision:"919eecf1a6c9537dc162f3a6ee94e332"},{url:"/_next/static/LUtCz-jnmM4aI0goaMGIy/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/491-4424d391a4826277.js",revision:"4424d391a4826277"},{url:"/_next/static/chunks/594-e1e95a9c76a5da97.js",revision:"e1e95a9c76a5da97"},{url:"/_next/static/chunks/61-fe2c86ac2eb30aae.js",revision:"fe2c86ac2eb30aae"},{url:"/_next/static/chunks/647-a9f2f3ae603142cf.js",revision:"a9f2f3ae603142cf"},{url:"/_next/static/chunks/734.a264547295a84450.js",revision:"a264547295a84450"},{url:"/_next/static/chunks/940-7895b583eb2bcaf0.js",revision:"7895b583eb2bcaf0"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-743f8aff90ea8642.js",revision:"743f8aff90ea8642"},{url:"/_next/static/chunks/pages/404-258967ac221bab2f.js",revision:"258967ac221bab2f"},{url:"/_next/static/chunks/pages/500-74ec4c4a334763db.js",revision:"74ec4c4a334763db"},{url:"/_next/static/chunks/pages/_app-e751092186ae390a.js",revision:"e751092186ae390a"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/_offline-db14356a18121073.js",revision:"db14356a18121073"},{url:"/_next/static/chunks/pages/beranda-13d8acfc248bf905.js",revision:"13d8acfc248bf905"},{url:"/_next/static/chunks/pages/donasi-5382b13de131d813.js",revision:"5382b13de131d813"},{url:"/_next/static/chunks/pages/donasi/%5BidDonasi%5D-c1a23da5217309c8.js",revision:"c1a23da5217309c8"},{url:"/_next/static/chunks/pages/index-066d19aa8138aa16.js",revision:"066d19aa8138aa16"},{url:"/_next/static/chunks/pages/masuk-ecd59ec549bce472.js",revision:"ecd59ec549bce472"},{url:"/_next/static/chunks/pages/pemberitahuan-6bea0de75afadcbe.js",revision:"6bea0de75afadcbe"},{url:"/_next/static/chunks/pages/permintaan/diterima-725d7c15096d5706.js",revision:"725d7c15096d5706"},{url:"/_next/static/chunks/pages/permintaan/terkirim-5687eed26bfe5dc3.js",revision:"5687eed26bfe5dc3"},{url:"/_next/static/chunks/pages/profil-a5144dc602d24680.js",revision:"a5144dc602d24680"},{url:"/_next/static/chunks/pages/registrasi-22c9387f8a457575.js",revision:"22c9387f8a457575"},{url:"/_next/static/chunks/pages/user/%5Busername%5D-6f6db04c26b62385.js",revision:"6f6db04c26b62385"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e21c1726fc455c5b.js",revision:"e21c1726fc455c5b"},{url:"/_next/static/css/69f81e06845cd7ae.css",revision:"69f81e06845cd7ae"},{url:"/_next/static/css/ce10a1703c7da6a4.css",revision:"ce10a1703c7da6a4"},{url:"/_next/static/media/404.39f609e2.png",revision:"0e55fc5f597a34e27bb29cbffa26bba2"},{url:"/_next/static/media/500.510ed2b7.png",revision:"87d09be17a8c0ea1a4cd1867a331e920"},{url:"/_next/static/media/about-img.d2fceac6.png",revision:"f82e3d861db64db9f22d0c5e686aefb5"},{url:"/_next/static/media/annas.7e76d766.jpg",revision:"4b33bf1a00edd4648a5e45ec91928458"},{url:"/_next/static/media/arif.19989f99.jpg",revision:"abb365a524f978c6406cc51040133ab5"},{url:"/_next/static/media/buku1.1470a16b.jpg",revision:"311b3e85e76efd31339478266ed91fed"},{url:"/_next/static/media/buku2.ce603f16.jpg",revision:"7ff302f79aecb30841e53d6d2b9e466b"},{url:"/_next/static/media/empty.b01fb35d.png",revision:"72762bad1d550b6cb4aac7951f6782c5"},{url:"/_next/static/media/faq.b3970129.png",revision:"c4d0e64f00ca33825d8e0299f4c1578b"},{url:"/_next/static/media/hero-image.7d1a7740.png",revision:"1a77aab54ce1e7a9a6ff9c27d35332a0"},{url:"/_next/static/media/kotak1.1e1f2fc0.jpg",revision:"8903db684b6e565aae3b929482204e9c"},{url:"/_next/static/media/logo-text.fbe892f6.png",revision:"2c22e5fc780bdc56c59350c2878ff548"},{url:"/_next/static/media/logo.8489d350.png",revision:"ca42540edc435f042cf72e9b0a4085d4"},{url:"/_next/static/media/offline.c71100a1.png",revision:"bf01474381bf54370baafc887f7fb511"},{url:"/_next/static/media/shoes1.55d6f580.jpg",revision:"97cfed10d0a7122452bf27a7553e563c"},{url:"/_next/static/media/shoes2.1399755e.jpg",revision:"a186f94209a26ee7a5fb6ed45387af98"},{url:"/_next/static/media/surya.fafd6f44.jpg",revision:"5dea975a3d56e8928fb911c15203b736"},{url:"/_next/static/media/watch1.78ea499a.jpg",revision:"b4812401f1a50a495bb9b89c943c9c35"},{url:"/_next/static/media/watch2.8261c1cd.jpg",revision:"3211dd0dcc58ba3435b90dedd6234a2d"},{url:"/_next/static/media/why-us.aed03099.png",revision:"99479878a07b5560155cb42102763192"},{url:"/_next/static/media/yuda.76cdf1bb.jpeg",revision:"ddf174a8e78a280592dfc885e8e5fd2a"},{url:"/_offline",revision:"LUtCz-jnmM4aI0goaMGIy"},{url:"/apple-touch-icon.png",revision:"fdeda7c0ff606fd9e43a27d2d8094c44"},{url:"/favicon.ico",revision:"cbcd56e0867967c2e461d6edf4d1a9da"},{url:"/icons/android-chrome-192x192.png",revision:"f9a2d1f53e525e2e1ea422e6335edfb6"},{url:"/icons/android-chrome-512x512.png",revision:"94be9c5d5a30660fcc79e0cc842cd782"},{url:"/icons/icon-128x128.png",revision:"dc8991e1a322aaf153457f9373b290f3"},{url:"/icons/icon-144x144.png",revision:"d6bec648ab1ad47d932786aa017878eb"},{url:"/icons/icon-152x152.png",revision:"57b110192c9f34dd9f109cfef6c0aa0a"},{url:"/icons/icon-16x16.png",revision:"79f221d9771b1d859c6b26ff290085aa"},{url:"/icons/icon-192x192.png",revision:"c5339f14b1d3657a885588bfb4d1d4e2"},{url:"/icons/icon-256x256.png",revision:"789fb2a27cfd95d7b9e4b0ce02c7d17b"},{url:"/icons/icon-32x32.png",revision:"19d0363f781e8a7848fe3699c73e1bfe"},{url:"/icons/icon-48x48.png",revision:"c592023e9ecc9d4e38dff3684c607232"},{url:"/icons/icon-512x512.png",revision:"7718de2021b8c15073a18ebb2cdb3eb1"},{url:"/icons/icon-72x72.png",revision:"599ab7cf46831a2c732c5037e083522c"},{url:"/icons/icon-96x96.png",revision:"6ec73ad3180f1e23006c868de90c7d7f"},{url:"/icons/maskable-icon.png",revision:"5fc1455862a51694fd4650a5d6b9725f"},{url:"/images/404.png",revision:"0e55fc5f597a34e27bb29cbffa26bba2"},{url:"/images/500.png",revision:"87d09be17a8c0ea1a4cd1867a331e920"},{url:"/images/about-img.png",revision:"f82e3d861db64db9f22d0c5e686aefb5"},{url:"/images/empty.png",revision:"72762bad1d550b6cb4aac7951f6782c5"},{url:"/images/empty.webp",revision:"06b8056149d7d64c682ad148e7db64c5"},{url:"/images/faq.png",revision:"c4d0e64f00ca33825d8e0299f4c1578b"},{url:"/images/gallery/buku1.jpg",revision:"311b3e85e76efd31339478266ed91fed"},{url:"/images/gallery/buku2.jpg",revision:"7ff302f79aecb30841e53d6d2b9e466b"},{url:"/images/gallery/kotak1.jpg",revision:"8903db684b6e565aae3b929482204e9c"},{url:"/images/gallery/shoes1.jpg",revision:"97cfed10d0a7122452bf27a7553e563c"},{url:"/images/gallery/shoes2.jpg",revision:"a186f94209a26ee7a5fb6ed45387af98"},{url:"/images/gallery/watch1.jpg",revision:"b4812401f1a50a495bb9b89c943c9c35"},{url:"/images/gallery/watch2.jpg",revision:"3211dd0dcc58ba3435b90dedd6234a2d"},{url:"/images/heros/hero-food.png",revision:"8877ff5276f9c7d5fb9685d8ec8271d4"},{url:"/images/heros/hero-image.png",revision:"1a77aab54ce1e7a9a6ff9c27d35332a0"},{url:"/images/logo/logo-text.png",revision:"2c22e5fc780bdc56c59350c2878ff548"},{url:"/images/logo/logo.png",revision:"ca42540edc435f042cf72e9b0a4085d4"},{url:"/images/offline.png",revision:"bf01474381bf54370baafc887f7fb511"},{url:"/images/teams/annas.jpg",revision:"4b33bf1a00edd4648a5e45ec91928458"},{url:"/images/teams/arif.jpg",revision:"abb365a524f978c6406cc51040133ab5"},{url:"/images/teams/default.png",revision:"c9041f3f144a80786ab805a59db61c89"},{url:"/images/teams/surya.jpg",revision:"5dea975a3d56e8928fb911c15203b736"},{url:"/images/teams/yuda.jpeg",revision:"ddf174a8e78a280592dfc885e8e5fd2a"},{url:"/images/why-us.png",revision:"99479878a07b5560155cb42102763192"},{url:"/manifest.json",revision:"5113f4415152f1059467aecbb8a471af"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
