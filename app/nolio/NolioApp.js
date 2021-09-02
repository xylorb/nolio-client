/* NolioApp.js creates a specific implementation of an application - Nolio Client. */

import AppController from '../components/App'
import {AppModeller, AppViewer} from '../components/App'
import AppState from '../components/AppState'
import AppEvent from '../components/AppEvent'

import NoteView from './NoteView/NoteView'
import NotebookView from './NotebookView'
import NolioContent from './NolioContent'
import NolioEvents from './NolioEvents'


export class NolioApp extends AppController {
  constructor() {

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

    super(new AppModeller(state, content), new AppViewer())
    //super(new AppModeller(new AppState(), new NolioContent()), new AppViewer())

    this.viewer.addView(new NoteView())
    this.viewer.addView(new NotebookView())
  }
  init() {
    super.init()
    //this.registerAppEventListener(NolioEvents.CHANGE.VIEW, this.onContextChange, this)
    this.registerAppEventListener(NolioEvents.CHANGE.VIEW, this.viewer.displayView, this.viewer)
    this.registerAppEventListener(NolioEvents.CHANGE.CONTEXT, this.onContextChange, this)
  }
}



export default NolioApp
