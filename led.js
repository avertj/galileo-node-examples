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
      pin: 13
    }
  },

  work: function(my) {
    console.log(my);
    my.led.toggle();
    every((1).second(), function() {
      my.led.toggle();
    });
  }
}).start();
