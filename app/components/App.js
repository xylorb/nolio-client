/* App.js is the primary generic application coordination point roughly based on an MVC design. */


/* MVC model of the Application */
class AppModeller {
  constructor(state, content) {
    this.state = state
    this.content = content
    //this.content.registerModeller(this)
  }
  registerController(controller) {
    this.controller = controller
  }
  registerAppEventListener(forEventType, callback, thatObj) {
    this.controller.registerAppEventListener(forEventType, callback, thatObj)
  }
  postAppEvent(ae) {
    this.controller.postAppEvent(ae)
  }
  saveLocalData() {}
  loadLocalData() {}
  saveRemoteData() {}
  loadRemoteData() {}
  getDataForContext() {
    // likely replace with event system ???
    let result = "blank"
    for (let i of this.content[this.state['current_notebook_ID']]) {
      if (i.id == this.state['current_note_ID']) {
        result = i.text
      }
    }
    return result
  }
}

/* MVC view of the Application */
class AppViewer {
  constructor() {
    this.selector = '#root'
    this.root = document.querySelector(this.selector)
    this.views = []
  }
  registerController(controller) {
    this.controller = controller
  }
  registerAppEventListener(forEventType, callback, thatObj) {
    this.controller.registerAppEventListener(forEventType, callback)
  }
  postAppEvent(ae) {
    this.controller.postAppEvent(ae)
  }
  addView(view) {
    view.appendTo(this.selector)
    view.registerViewer(this)
    this.views.push(view)
  }
  displayView(viewID, withData) {
    for (let i of this.views) {
      document.getElementById(i.id).style.display = "none"
      if (viewID == i.id) {
        document.getElementById(viewID).style.display = "block"
        i.activate(withData)
      }
    }
  }
}

/* MVC controller of the Application */
class AppController {
  constructor(app_data_modeller, app_main_viewer) {
    this.modeller = app_data_modeller
    this.viewer = app_main_viewer
    this.listeners = []

    this.modeller.registerController(this)
    this.viewer.registerController(this)
  }
  registerAppEventListener(forEventType, callback, thatObj) {
    this.listeners.push({event_type:forEventType,callback:callback,thatObj:thatObj})
  }
  postAppEvent(ae) {
    for (let l of this.listeners) {
      if (l.event_type == ae.event_type) {
        l.callback(ae.data, l.thatObj)
      } else {}
    }
  }
  onContextChange(viewID, thatObj) {
    let ofObj = this
    if (thatObj) {
      ofObj = thatObj
    } else {}

    if(viewID) {
      ofObj.viewer.displayView(viewID, ofObj.getDataForContext())
    }
    else {
      ofObj.viewer.displayView(ofObj.modeller.state.current_view_ID, ofObj.getDataForContext())
    }
  }
  getDataForContext() {
    // likely replace with event system, but need to request data for context on event trigger ???
    return this.modeller.getDataForContext()
  }
}

/* Convenience wrapper of the Application, and centeral API */
export class Application {
  constructor(state, content) {
    this.controller = new AppController(new AppModeller(state, content), new AppViewer())
  }
  addView(view) {
    this.controller.viewer.addView(view)
  }
  start() {
  }
}


export default Application






// </code #2021-08-13 #modified="2021-08-25" #author="wwood" #file="app.js" #description="Main Application Logic for the Nolio-Client Web App" #type="javascript" />
