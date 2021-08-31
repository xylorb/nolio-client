
import Element from './Element'

class View extends Element {
  constructor(id, className) {
    super(id, 'div', className)
  }
  registerViewer(viewer) {
    this.viewer = viewer
  }
  activate() {}
  deactivate() {}
}

export default View












// </code #2021-08-16 #modified="2021-08-17" #file="view.js" #description="For managing various views of the Nolio-Client Web App" #type="javascript" />
