
// 2021-08-25; wwood
// Manipulate Olio Data for the Nolio Notes Environment


import toolkit from "../nolio/toolkit"



export class OlioElement {
  constructor() {}
}

export class OPTMobject {
  constructor() {}
}

export class OSONobject {
  constructor() {}
}


export class OtherNolioData {
  constructor() {
    this.notes = []
    this.notes_sorted = []
    this.note = {}
    this.note_raw = ''
  }
  setContext(key, value) {}
  createNote() {
    id = toolkit.makeNewID()
    this.context.note_id = id
    this.note_content = "<.note.>\n\n</note/>"
  }
}



export class NolioContent {
  constructor() {}
}







export default NolioContent
