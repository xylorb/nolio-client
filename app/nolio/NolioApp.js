/* NolioApp.js creates a specific implementation of an application - Nolio Client. */

import Application from '../components/App'
import AppState from '../components/AppState'
import AppEvent from '../components/AppEvent'

import NoteView from './NoteView/NoteView'
import NotebookView from './NotebookView'
import NolioContent from './NolioContent'
import NolioEvents from './NolioEvents'


export class NolioApp extends Application {
  constructor() {
    let app_state = new AppState()
    let app_content = new NolioContent()

    let state = {
      current_notebook_ID: 'default',
      current_note_ID: '2021-08-16-00-00',
      current_view_ID: 'note_view'
    }
    let content = {
      default: [
        {
          id: '2021-08-16-00-00',
          text: '<:note:>\nHello World!\n<:/note/:>'
        }
      ]
    }

    super(state, content)
    //super(app_state, app_content)

    const note_view = new NoteView()
    const notebook_view = new NotebookView()
    this.addView(note_view)
    this.addView(notebook_view)
  }
  start() {
    super.start()
    this.controller.registerAppEventListener(NolioEvents.CHANGE.VIEW, this.controller.onContextChange, this.controller)
    let ae = new AppEvent(NolioEvents.CHANGE.VIEW, 'note_view')
    this.controller.postAppEvent(ae)
  }
}



export default NolioApp
