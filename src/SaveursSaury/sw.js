self.addEventListener('fetch', (event) => 
{
    event.respondWith(
        caches.match(event.request)
        .then((response) => response || fetch(event.request))
    );
});

self.addEventListener('install', event => 
{
    console.log('[SW]','installing app');

    event.waitUntil(
        caches.open('configurator')
        .then(cache => cache.addAll([
            './manifest.webmanifest',
            './sw-init.js',
            './sw.js',
            './ConfigurateurOakAddin.js',
            './configurator.html',
            './home.html',
            './data/fr-FR/choices-fr-FR.json',
            './data/fr-FR/config-fr-FR.json',
            './data/fr-FR/products-fr-FR.json',
            './data/fr-FR/possibilities-calculation-gramsPerLiter-fr-FR.json',
            './data/fr-FR/possibilities-calculation-percentage-fr-FR.json',
            './data/fr-FR/possibilities-fr-FR.json',
            './data/fr-FR/responses-table-fr-FR.js',
            './data/en-EN/choices-en-EN.json',
            './data/en-EN/config-en-EN.json',
            './data/en-EN/products-en-EN.json',
            './data/en-EN/possibilities-calculation-gramsPerLiter-en-EN.json',
            './data/en-EN/possibilities-calculation-percentage-en-EN.json',
            './data/en-EN/possibilities-en-EN.json',
            './data/en-EN/responses-table-en-EN.js',
            './data/es-ES/choices-es-ES.json',
            './data/es-ES/config-es-ES.json',
            './data/es-ES/products-es-ES.json',
            './data/es-ES/possibilities-calculation-gramsPerLiter-es-ES.json',
            './data/es-ES/possibilities-calculation-percentage-es-ES.json',
            './data/es-ES/possibilities-es-ES.json',
            './data/es-ES/responses-table-es-ES.js',
            './app-ressources/logo.png',
            './app-ressources/apple-icon-180.png',
            './app-ressources/apple-splash-1125-2436.jpg',
            './app-ressources/apple-splash-1136-640.jpg', 
            './app-ressources/apple-splash-1170-2532.jpg',
            './app-ressources/apple-splash-1242-2208.jpg',
            './app-ressources/apple-splash-1242-2688.jpg',
            './app-ressources/apple-splash-1284-2778.jpg',
            './app-ressources/apple-splash-1334-750.jpg',
            './app-ressources/apple-splash-1536-2048.jpg',
            './app-ressources/apple-splash-1620-2160.jpg',
            './app-ressources/apple-splash-1668-2224.jpg',
            './app-ressources/apple-splash-1668-2388.jpg',
            './app-ressources/apple-splash-1792-828.jpg',
            './app-ressources/apple-splash-2048-1536.jpg',
            './app-ressources/apple-splash-2048-2732.jpg',
            './app-ressources/apple-splash-2160-1620.jpg',
            './app-ressources/apple-splash-2208-1242.jpg',
            './app-ressources/apple-splash-2224-1668.jpg',
            './app-ressources/apple-splash-2388-1668.jpg',
            './app-ressources/apple-splash-2436-1125.jpg',
            './app-ressources/apple-splash-2532-1170.jpg',
            './app-ressources/apple-splash-2688-1242.jpg',
            './app-ressources/apple-splash-2732-2048.jpg',
            './app-ressources/apple-splash-2778-1284.jpg',
            './app-ressources/apple-splash-640-1136.jpg',
            './app-ressources/apple-splash-750-1334.jpg',
            './app-ressources/apple-splash-828-1792.jpg',
            './app-ressources/manifest-icon-192.png',
            './app-ressources/manifest-icon-512.png',
            
            //TODO : ajouté toutes les images
            
            './images/Logo-OAI-négatif-sans-fond.png',
            './images/Logo-OAI.png',
            './images/logo.png',
            './images/110426PAR-1948.jpg'
        ])
    ));
});