

import Model from "../components/Model"
import NolioEvents from "./NolioEvents"
import toolkit from "./toolkit"


export class NolioContent extends Model {
  constructor(name) {
    super(name)
  }
  registerModeller(modeller) {
    super.registerModeller(modeller)
  }
  init() {
    super.init()
    this.modeller.registerAppEventListener(NolioEvents.NOTE.TEXT_CHANGE, this.setTextOfNote, this)
  }
  getNotebookMeta(withName, ofNotebook) {}
  setNotebookMeta(withName, ofNotebook, value) {}
  getNotesList(ofNotebook) {}
  getTextOfNote(withName) {}
  setTextOfNote(withData, thatObj) {
    let ofObj = this
    if (thatObj) {
      ofObj = thatObj
    } else {}
    console.log(withData)
  }
  createNote(withName, text) {}
  deleteNote(withName) {}
}







export default NolioContent



// <:/note #2021-08-29 /:>
