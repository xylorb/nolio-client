


import toolkit from "../nolio/toolkit"


export class NolioContent {
  constructor(dataID) {
    this.dataID = dataID
  }
  registerModeller(modeller) {
    this.modeller = modeller
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
