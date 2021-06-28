//importScripts('/cache-polyfill.js');

self.addEventListener('fetch', (event) => 
{
    console.log('fetching', event?.request?.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('install', event => 
{
    console.log('installing app');

    event.waitUntil(
        caches.open('configurator')
        .then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/home.html',
            ]);
        }
    ));
});