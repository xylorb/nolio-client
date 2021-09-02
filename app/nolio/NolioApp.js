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

    super(new AppModeller(), new AppViewer())

    this.viewer.addView(new NoteView())
    this.viewer.addView(new NotebookView())
    this.modeller.addModel(new AppState('app_state'))
    this.modeller.addModel(new NolioContent('nolio_content'))
  }
  init() {
    super.init()
    this.registerAppEventListener(NolioEvents.CHANGE.VIEW, this.viewer.displayView, this.viewer)
    this.registerAppEventListener(NolioEvents.CHANGE.CONTEXT, this.onContextChange, this)
  }
}



export default NolioApp
