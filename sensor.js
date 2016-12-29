(function() {
  'use strict';

  class Sensor {

    constructor() {
      this.device = null;
      this.server = null;
    }

    connect() {
      return navigator.bluetooth.requestDevice({
        filters: [{ services: ['device_information'] }]
      })
      .then(device => device.gatt.connect())
      .then(server => server.getPrimaryService('device_information'))
      .then(characteristic => characteristic.readValue())
      .then(val => { console.log(val); })
      .catch(error => { console.log(error) })
    }

  }

  window.sensor = new Sensor();

})();
