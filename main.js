/* main.js is the primary script starting and running the Nolio-Client application. */

/* Import */
import NolioApp from './app/nolio/NolioApp'


/* ServiceWorker Registration */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


/* Create & Start Nolio Client */
let nolio = new NolioApp()

nolio.start()







// </code #2021-08-16 #modified="2021-08-27" #author="wwood" #file="main.js" #description="Main Application entry point for the Nolio-Client Web App" #type="javascript" />
