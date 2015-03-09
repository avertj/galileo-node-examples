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
    console.log('test');
    every((1).second(), function() {
      my.led.toggle();
    });
  }
}).on('ready', function start(my) {
  console.log('test2');
}).start();
