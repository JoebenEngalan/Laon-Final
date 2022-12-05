var cacheName = 'LAON';
var filesToCache = [

  'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
  'https://cdn.rawgit.com/viljamis/responsive-nav.js/master/responsive-nav.min.js',
  'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js',
  'https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&family=Roboto:wght@100;400&family=Source+Sans+Pro&display=swap',
  'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
  'https://code.jquery.com/jquery-2.1.1.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js',
  'https://code.jquery.com/jquery-3.3.1.min.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css',
  'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
  

  '/',
  './index.html',
  './colorpick.html',
  './about.html',

  './favicon.ico',

  './css/form.css',
  './css/hey.css',
  './css/weather.css',
  './css/picker.css',
  './css/style.css',

  './js/main.js',
  './js/setdate.js',
  './js/nextread.js',
  './js/weather.js',
  './js/todo.js',
  './js/form.js',
  './js/picker.js',
  './js/script.js',

  './icons/01d.png',
  './icons/01n.png',
  './icons/02d.png',
  './icons/02n.png',
  './icons/03d.png',
  './icons/03n.png',
  './icons/04d.png',
  './icons/04n.png',
  './icons/09d.png',
  './icons/09n.png',
  './icons/10d.png',
  './icons/10n.png',
  './icons/11d.png',
  './icons/11n.png',
  './icons/13d.png',
  './icons/13n.png',
  './icons/50d.png',
  './icons/50n.png',
  './icons/unknown.png',

  './images/LAON-128.png',
  './images/LAON-152.png',
  './images/LAON-192.png',
  './images/LAON-256.png',
  './images/LAON-512.png',

];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});