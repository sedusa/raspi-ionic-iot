// button is attached to pin 17, led to 18
var GPIO = require('onoff').Gpio,
  led = new GPIO(18, 'out'),
  button = new GPIO(17, 'in', 'both');

// start the server
var server = require('./server')(led);

// define the callback function
function light(err, state) {

  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    led.writeSync(1);
  } else {
  // turn LED off
    led.writeSync(0);
  }
}
// pass the callback function to the
// as the first argument to watch()
button.watch(light);