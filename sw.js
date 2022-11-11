
const staticAssets = [
    '.',
    'index.html',
    'images/calc.jpg',
    'images/icons/icon-128x128.png',
    'images/icons/icon-192x192.png',
    'css/bootstrap.min.css',
    'js/bootstrap.bundle.min.js',
    'main.js'
]

const staticCacheName = 'site-static-v2'


self.addEventListener('install',async evt=>{
    const cache=await caches.open(staticCacheName)
    await cache.addAll(staticAssets)
})

self.addEventListener('activate',async evt=>{
    console.log('activate')
})

self.addEventListener('fetch',async evt=>{

    evt.respondWith(caches.match(evt.request).then(cachedResponse=>{
        return cachedResponse || fetch(evt.request)
    }))
    console.log('fetch')
})
