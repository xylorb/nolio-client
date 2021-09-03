/*
NolioState.js provides a model of the Nolio application state (data pertaining
to the application itself), including application configuration data and
application context data.
*/

import Model from '../components/Model'
import NolioEvents from './NolioEvents'


export class NolioState extends Model {
  constructor(name, config, context) {
    super(name)
    this.config = config || {}
    this.context = context || {}
  }
  init() {
    super.init()
    this.modeller.registerAppEventListener(NolioEvents.CHANGE.CONTEXT, this.updateContext.bind(this))
  }
  updateContext(withData) {
    console.log(withData)
  }
}


export default NolioState
