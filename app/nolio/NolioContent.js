

import Model from "../components/Model"
import NolioEvents from "./NolioEvents"
import toolkit from "./toolkit"


export class NolioContent extends Model {
  constructor(name) {
    super(name)
    this.notebooks_info = {
      local: {
        name: 'Local',
        sync: 'none',
        loaded: 'no',
        tree: {}
      }
    }
    this.notebook_active = {
      notebook_info: {},
      notebook_meta: {},
      loaded_notes: []
    }
    this.note_active = {
      meta: {},
      body: {}
    }
    this.note_active_rawtext = ''
  }
  registerModeller(modeller) {
    super.registerModeller(modeller)
  }
  init() {
    super.init()
    this.modeller.registerAppEventListener(NolioEvents.NOTE.TEXT_CHANGE, this.setTextOfNote.bind(this))
  }
  getNotebookMeta(withName, ofNotebook) {}
  setNotebookMeta(withName, ofNotebook, value) {}
  getNotesList(ofNotebook) {}
  getTextOfNote(withName) {}
  setTextOfNote(withData) {
    this.note_active_rawtext = withData
  }
  createNote(withName, text) {}
  deleteNote(withName) {}
}







export default NolioContent



// <:/note #2021-08-29 /:>
