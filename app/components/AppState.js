/*
AppState.js provides an Model of the application state (data pertaining to the
application itself), including application configuration data and Application
context data.
*/

import Model from './Model'


export class AppState extends Model {
  constructor(name, config, context) {
    super(name)
    this.config = config || {}
    this.context = context || {}
  }
}


export default AppState
