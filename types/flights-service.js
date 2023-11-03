const cds = require('@sap/cds')

class FlightsService extends cds.ApplicationService {
  async init() {

    //  without cds-typer
    // const { Flights } = cds.entities
    // service.before('CREATE', Flights, ({ data }) => {
    //      /* data is of type any */
    //      data[0]
    // })

    // ✨ with cds-typer
    // const { Flights, Flight } = require('#cds-models/FlightsService')
    // this.before('CREATE', Flights, ({ data }) => { 
    //     /* data is of type Flights */
    //     data[0].flightDate
    // })
    

    return super.init()
  }
}

module.exports = FlightsService
