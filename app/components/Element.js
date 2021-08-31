

class Element {
  constructor(id, tag, className) {
    this.id = id
    this.element = this.createElement(tag, className)
    this.element.id = this.id
  }
  appendTo(selector) {
    this.getElement(selector).append(this.element)
  }
  createElement(tag, className) {
    const element = document.createElement(tag)

    if (className) element.classList.add(className)

    return element
  }
  getElement(selector) {
    const element = document.querySelector(selector)

    return element
  }
}




export default Element












// </code #2021-08-16 #modified="2021-08-17" #file="component.js" #description="base level view component of the Nolio-Client Web App" #type="javascript" />
