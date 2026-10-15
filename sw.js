self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>new Response('<h3 style="font-family:sans-serif;padding:24px">You are offline. Please check your internet and reopen RP Delivery.</h3>',{headers:{'Content-Type':'text/html'}})))}});
