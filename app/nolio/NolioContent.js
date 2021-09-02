

import Model from "../components/Model"
import NolioEvents from "./NolioEvents"
import toolkit from "./toolkit"


export class NolioContent extends Model {
  constructor(name) {
    super(name)
  }
  registerModeller(modeller) {
    super.registerModeller(modeller)
    this.init()
  }
  init() {
    super.init()
    this.modeller.registerAppEventListener(NolioEvents.CHANGE.TEXT, this.setTextOfNote, this)
  }
  getNotebookMeta(withName, ofNotebook) {}
  setNotebookMeta(withName, ofNotebook, value) {}
  getNotesList(ofNotebook) {}
  getTextOfNote(withName) {}
  setTextOfNote(withName, text) {}
  createNote(withName, text) {}
  deleteNote(withName) {}
}







export default NolioContent



// <:/note #2021-08-29 /:>
