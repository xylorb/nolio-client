import Section from '../components/Section'

class Endbar extends Section {
  constructor(view) {
    super('endbar', 'endbar', view)

    //this.endbar = this.createElement('div', 'endbar')
    this.endbar_left_button = this.createElement('button','endbar_button')
    this.endbar_left_button_img = this.createElement('img')
    this.endbar_left_button_img.src = "./style/more_horiz_black_24dp.svg"
    this.endbar_left_button.append(this.endbar_left_button_img)
    this.endbar_right_drop_btn = this.createElement('button', 'endbar_drop_button')
    this.endbar_right_drop_btn_img = this.createElement('img')
    this.endbar_right_drop_btn_img.src = "./style/sticky_note_2_black_24dp.svg"
    this.endbar_right_drop_btn.append(this.endbar_right_drop_btn_img)
    this.endbar_right_drop_btn.addEventListener('click', event => this.view.toggleMainArea())
    this.view.toggleState = 'front'
    this.element.append(this.endbar_left_button, this.endbar_right_drop_btn)
  }
}

export default Endbar
