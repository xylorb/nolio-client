


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './favicon.ico',
        './main.js',
        './app/components/app.js',
        './app/components/Element.js',
        './app/components/View.js',
        './app/components/Section.js',
        './app/nolio/Navbar.js',
        './app/nolio/Endbar.js',
        './app/nolio/BottomMenu.js',
        './app/nolio/NoteView.js',
        './app/nolio/NotebookView.js',
        './app/nolio/toolkit.js',
        './style/style.css',
        './style/common_view.css',
        './style/note_view.css',
        './style/notebook_view.css',
        './style/close-24px.svg',
        './style/more_horiz_black_24dp.svg',
        './style/sticky_note_2_black_24dp.svg'
      ]);
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();

        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/style/close-24px.svg');
      });
    }
  }));
});








// </code #type="javascript" #2021-08-15 #author="wwood" #file="sw.js" #description="Service Worker for the Nolio-Client Web App" />
