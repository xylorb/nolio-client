

import View from '../../components/View'
import Navbar from '../Navbar'
import Endbar from '../Endbar'
import BottomMenu from '../BottomMenu'
import AppEvent from '../../components/AppEvent'
import NolioEvents from '../NolioEvents'


class NoteView extends View {
  constructor() {
    super('note_view', 'note_view')

    this.navbar = new Navbar(this)
    this.endbar = new Endbar(this)
    this.bottom_menu = new BottomMenu(this)

    this.main_note_view = this.createElement('div', 'main_note_view')
    this.flip_space = this.createElement('div', 'flip_space')
    this.flip_space_front = this.createElement('div', 'flip_space_front')  // pretty view
    this.text_edit_front = this.createElement('textarea', 'text_edit')
    this.text_edit_front.placeholder = "The dog plays in the yard."
    this.flip_space_front.append(this.text_edit_front)
    this.flip_space_back = this.createElement('div', 'flip_space_back')  // plain-text view
    this.text_edit_back = this.createElement('textarea', 'text_edit')
    this.text_edit_back.placeholder = "The cat plays in the garden."
    this.text_edit_back.addEventListener('change', event => this.textChange())
    this.text_edit_back.addEventListener('input', event => this.textInput())
    this.flip_space_back.append(this.text_edit_back)
    this.flip_space.append(this.flip_space_front, this.flip_space_back)
    this.main_note_view.append(this.flip_space)

    this.element.append(this.navbar.element, this.main_note_view, this.endbar.element, this.bottom_menu.element)

    this.cssLink = this.createElement('link')
    this.cssLink.rel = 'stylesheet'
    this.cssLink.type = 'text/css'
    this.cssLink.href = './app/nolio/NoteView/style.css'
    document.getElementsByTagName('HEAD')[0].appendChild(this.cssLink)
  }
  registerViewer(viewer) {
    super.registerViewer(viewer)
    this.viewer.registerAppEventListener(NolioEvents.CHANGE.THEME, this.themeChange, this)
  }
  activate(withData) {
    this.text_edit_back.innerHTML = withData
  }
  openMenu() {
    this.bottom_menu.element.style.height = "50vh";
  }
  closeMenu() {
    this.bottom_menu.element.style.height = "0vh";
  }
  toggleMainArea() {
    if (this.toggleState == 'front') {
      this.flip_space.style.transform = "rotateY(180deg)";
      this.toggleState = 'back'
    } else {
      this.flip_space.style.transform = "rotateY(0deg)";
      this.toggleState = 'front'
    }
  }
  textChange() {
    let ae = new AppEvent(NolioEvents.CHANGE.TEXT, 'notebook_view')
    this.viewer.postAppEvent(ae)
  }
  textInput() {}
  changeEndBar() {}
  changeView() {
    let ae = new AppEvent(NolioEvents.CHANGE.VIEW, 'notebook_view')
    this.viewer.postAppEvent(ae)
  }
  themeChange() {}
}


export default NoteView







// </code #2021-08-25 #author="wwood" #file="note_view.js" #description="view management in the Nolio-Client Web App" #type="javascript" />
