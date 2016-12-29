(function() {
  'use strict';

  class Sensor {

    constructor() {
      this.device = null;
      this.server = null;
    }

    connect() {
      return navigator.bluetooth.requestDevice({
        filters: [{ services: ['battery_service'] }]
      })
      .then(device => device.gatt.connect())
      .then(server => server.getPrimaryService('battery_service'))
      .then(characteristic => characteristic.readValue())
      .then(val => { console.log(`Battery percentage is: ${value.getUint8(0)}`); })
      .catch(error => { console.log(error) })
    }

  }

  window.sensor = new Sensor();

})();
