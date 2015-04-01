var simplespi = require( "simplespi" );
 
var response = simplespi.send("02000000", "/dev/spidev1.0");

console.log(response);