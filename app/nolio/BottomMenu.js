import Section from '../components/Section'

class BottomMenu extends Section {
  constructor(view) {
    super('bottom_menu', 'bottom_menu', view)

    this.menu_head = this.createElement('div', 'bottom_menu_head')
    this.menu_title = this.createElement('div', 'menu_title')
    this.menu_title.innerHTML = "Note Menu"
    this.close_btn = this.createElement('div')
    this.close_btn_img = this.createElement('img', 'bottom_menu_close_btn')
    this.close_btn_img.src = "./style/close-24px.svg"
    this.close_btn_img.addEventListener('click', event => this.view.closeMenu())
    this.close_btn.append(this.close_btn_img)
    this.menu_head.append(this.menu_title, this.close_btn)

    this.menu_body = this.createElement('div', 'bottom_menu_body')
    this.copy_note_btn = this.createElement('div', 'copy_note_btn')
    this.copy_note_btn.innerHTML = "Copy Note"
    this.find_in_note_btn = this.createElement('div', 'find_in_note_btn')
    this.find_in_note_btn.innerHTML = "Find in Note"
    this.delete_note_btn = this.createElement('div', 'delete_note_btn')
    this.delete_note_btn.innerHTML = "Delete Note"
    this.menu_body.append(this.copy_note_btn, this.find_in_note_btn, this.delete_note_btn)

    this.element.append(this.menu_head, this.menu_body)
  }
}

export default BottomMenu
