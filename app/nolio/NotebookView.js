

import View from '../components/View'
import {AppEvent} from '../components/App'


class NotebookView extends View {
  constructor() {
    super('notebook_view', 'notebook_view')
    this.view_actions = []

    this.navbar = this.createElement('div', 'navbar')
    this.navbar_left_button = this.createElement('button','navbar_button')
    this.navbar_left_button_img = this.createElement('img')
    this.navbar_left_button_img.src = "./style/search-24px.svg"
    this.navbar_left_button.append(this.navbar_left_button_img)
    this.navbar_left_button.addEventListener('click', event => this.changeView())
    this.navbar_right_drop_btn = this.createElement('button', 'navbar_drop_button')
    this.navbar_right_drop_btn_img = this.createElement('img')
    this.navbar_right_drop_btn_img.src = "./style/more_horiz_black_24dp.svg"
    this.navbar_right_drop_btn.append(this.navbar_right_drop_btn_img)
    this.navbar_right_drop_btn.addEventListener('click', event => this.openMenu())
    this.navbar.append(this.navbar_left_button, this.navbar_right_drop_btn)

    this.main_notebook_view = this.createElement('div', 'main_notebook_view')
    this.display_space = this.createElement('div', 'display_space')
    this.display_space.innerHTML = "Coming Soon ..."
    this.main_notebook_view.append(this.display_space)

    this.endbar = this.createElement('div', 'endbar')
    this.endbar_left_button = this.createElement('button','endbar_button')
    this.endbar_left_button_img = this.createElement('img')
    this.endbar_left_button_img.src = "./style/more_horiz_black_24dp.svg"
    this.endbar_left_button.append(this.endbar_left_button_img)
    this.endbar_right_drop_btn = this.createElement('button', 'endbar_drop_button')
    this.endbar_right_drop_btn_img = this.createElement('img')
    this.endbar_right_drop_btn_img.src = "./style/sticky_note_2_black_24dp.svg"
    this.endbar_right_drop_btn.append(this.endbar_right_drop_btn_img)
    this.endbar_right_drop_btn.addEventListener('click', event => this.toggleMainArea())
    this.toggleState = 'front'
    this.endbar.append(this.endbar_left_button, this.endbar_right_drop_btn)

    this.element.append(this.navbar, this.main_notebook_view, this.endbar)

  }
  processEvent() {

  }
  openMenu() {
    //this.bottom_menu.style.height = "50vh";
  }
  closeMenu() {
    //this.bottom_menu.style.height = "0vh";
  }
  toggleMainArea() {}
  changeView() {
    let ae = new AppEvent('change_view', 'note_view')
    this.viewer.postAppEvent(ae)
  }
}


export default NotebookView







// </code #2021-08-17 #author="wwood" #file="note_view.js" #description="view management in the Nolio-Client Web App" #type="javascript" />
