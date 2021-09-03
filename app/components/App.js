/* App.js is the primary generic application coordination point roughly based on an MVC design. */


/* MVC model of the Application */
export class AppModeller {
  constructor() {
    this.models = []
  }
  init() {
    for (let i of this.models) {
      i.init()
    }
  }
  registerController(controller) {
    this.controller = controller
  }
  registerAppEventListener(forEventType, callback) {
    this.controller.registerAppEventListener(forEventType, callback)
  }
  postAppEvent(ae) {
    this.controller.postAppEvent(ae)
  }
  addModel(model) {
    model.registerModeller(this)
    this.models.push(model)
  }
  saveLocalData() {}
  loadLocalData() {}
  saveRemoteData() {}
  loadRemoteData() {}
}

/* MVC view of the Application */
export class AppViewer {
  constructor() {
    this.selector = '#root'
    this.root = document.querySelector(this.selector)
    this.views = []
  }
  init() {
    for (let i of this.views) {
      i.init()
    }
  }
  registerController(controller) {
    this.controller = controller
  }
  registerAppEventListener(forEventType, callback) {
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
  displayView(viewID) {
    let newView = ''   //  ???
    if(viewID) {
      newView = viewID
    }
    else {}

    for (let i of this.views) {
      document.getElementById(i.id).style.display = "none"
      if (newView == i.id) {
        document.getElementById(newView).style.display = "block"
      }
    }
  }
}

/* MVC controller of the Application */
export class AppController {
  constructor(app_data_modeller, app_main_viewer) {
    this.modeller = app_data_modeller
    this.viewer = app_main_viewer
    this.listeners = []

    this.modeller.registerController(this)
    this.viewer.registerController(this)
  }
  init() {
    this.modeller.init()
    this.viewer.init()
  }
  start() {
    this.init()
  }
  registerAppEventListener(forEventType, callback) {
    this.listeners.push({event_type:forEventType,callback:callback})
  }
  postAppEvent(ae) {
    for (let l of this.listeners) {
      if (l.event_type == ae.event_type) {
        l.callback(ae.data, l.withThis)
      } else {}
    }
  }
  onContextChange(viewID) {}
}


export default AppController






// </code #2021-08-13 #modified="2021-08-25" #author="wwood" #file="app.js" #description="Main Application Logic for the Nolio-Client Web App" #type="javascript" />
