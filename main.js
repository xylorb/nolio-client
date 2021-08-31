

/* Import */
import Application from './app/components/App'
import NoteView from './app/nolio/NoteView/NoteView'
import NotebookView from './app/nolio/NotebookView'
import NolioContent from './app/nolio/NolioContent'


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


/* Build and Start the Application */
let config = {}
let context = {
  current_notebook_ID: 'default',
  current_note_ID: '2021-08-16-00-00',
  current_view_ID: 'note_view'
}
//let content = new NolioContent('nolio_content')
let content = {
  default: [
    {
      id: '2021-08-16-00-00',
      text: '<:note:>\nHello World!\n<:/note/:>'
    }
  ]
}

const note_view = new NoteView()
const notebook_view = new NotebookView()

const app = new Application(config, context, content)
app.addView(note_view)
app.addView(notebook_view)

app.start()







// </code #2021-08-16 #modified="2021-08-27" #author="wwood" #file="main.js" #description="Main Application entry point for the Nolio-Client Web App" #type="javascript" />
