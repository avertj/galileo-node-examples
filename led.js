var Cylon = require('cylon');

Cylon.robot({
  connections: {
    galileo: {
      adaptor: 'intel-iot'
    }
  },

  devices: {
    led: {
      driver: 'led',
      pin: 13,
      connection: 'galileo'
    }
  },

  work: function(my) {
    every((1).second(), function() {
      my.led.toggle();
    });
  }
}).start();
