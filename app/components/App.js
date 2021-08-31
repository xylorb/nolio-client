
/* Configuration information for the Application itself */
export class AppConfig {
  constructor() {}
}

/* Context or state of the Application */
export class AppContext {
  constructor() {}
}

/* Events specific to the operation of the Application's own operations */
export class AppEvent {
  constructor(event_type, data) {
    this.event_type = event_type
    this.data = data
  }
}

/* MVC model of the Application */
class AppModeller {
  constructor(config, context, content) {
    this.config = config
    this.context = context
    this.content = content
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
  saveData() {}
  loadData() {}
  pushData() {}
  fetchData() {}
  getDataForContext() {
    let result = "blank"
    for (let i of this.content[this.context['current_notebook_ID']]) {
      if (i.id == this.context['current_note_ID']) {
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
  requestContent(name, format) {
    return this.controller.getData(name, format)
  }
  pushContent() {}
}

/* MVC controller of the Application */
class AppController {
  constructor(app_data_modeller, app_main_viewer) {
    this.modeller = app_data_modeller
    this.viewer = app_main_viewer
    this.listeners = []

    this.modeller.registerController(this)
    this.viewer.registerController(this)

    this.registerAppEventListener('change_view', this.onContextChange, this)
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
      //this.viewer.displayView(viewID, this.getDataForContext())
    }
    else {
      ofObj.viewer.displayView(ofObj.modeller.context.current_view_ID, ofObj.getDataForContext())
      //this.viewer.displayView(this.modeller.context.current_view_ID, this.getDataForContext())
    }
  }
  getDataForContext() {
    return this.modeller.getDataForContext()
  }
  putChangedData(dataContent) {}
}

/* Convenience wrapper of the Application, and centeral API */
export class Application {
  constructor(config, context, content) {
    this.controller = new AppController(new AppModeller(config, context, content), new AppViewer())
  }
  addView(view) {
    this.controller.viewer.addView(view)
  }
  start() {
    this.controller.onContextChange()
  }
}


export default Application






// </code #2021-08-13 #modified="2021-08-25" #author="wwood" #file="app.js" #description="Main Application Logic for the Nolio-Client Web App" #type="javascript" />
