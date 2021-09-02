

export const AppEventTypes = {
  START: "start"
}


/* Events specific to the operation of the Application's own operations */
export class AppEvent {
  constructor(event_type, data) {
    this.event_type = event_type
    this.data = data
  }
}

export default AppEvent
