import Section from '../components/Section'

class Navbar extends Section {
  constructor(view) {
    super('navbar', 'navbar', view)

    this.navbar_left_button = this.createElement('button','navbar_button')
    this.navbar_left_button_img = this.createElement('img')
    this.navbar_left_button_img.src = "./style/keyboard_arrow_left_black_24dp.svg"
    this.navbar_left_button.append(this.navbar_left_button_img)
    this.navbar_left_button.addEventListener('click', event => this.view.changeView())
    this.navbar_right_drop_btn = this.createElement('button', 'navbar_drop_button')
    this.navbar_right_drop_btn_img = this.createElement('img')
    this.navbar_right_drop_btn_img.src = "./style/more_horiz_black_24dp.svg"
    this.navbar_right_drop_btn.append(this.navbar_right_drop_btn_img)
    this.navbar_right_drop_btn.addEventListener('click', event => this.view.openMenu())
    this.element.append(this.navbar_left_button, this.navbar_right_drop_btn)
  }
}

export default Navbar
