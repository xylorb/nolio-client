/* NolioApp.js creates a specific implementation of an application - Nolio Client. */

import AppController from '../components/App'
import {AppModeller, AppViewer} from '../components/App'
import AppEvent from '../components/AppEvent'

import NoteView from './NoteView/NoteView'
import NotebookView from './NotebookView'
import NolioState from './NolioState'
import NolioContent from './NolioContent'
import NolioEvents from './NolioEvents'


export class NolioApp extends AppController {
  constructor() {

    super(new AppModeller(), new AppViewer())

    this.viewer.addView(new NoteView())
    this.viewer.addView(new NotebookView())
    this.modeller.addModel(new NolioState('nolio_state'))
    this.modeller.addModel(new NolioContent('nolio_content'))
  }
  init() {
    super.init()
    this.registerAppEventListener(NolioEvents.CHANGE.VIEW, this.viewer.displayView.bind(this.viewer))
    this.registerAppEventListener(NolioEvents.CHANGE.CONTEXT, this.onContextChange.bind(this))

  }
}



export default NolioApp
