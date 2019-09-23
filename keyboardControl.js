/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  ship : {
    forward : false,
    back : false,
    rotateClockwise : false,
    rotateCounterClockwise : false
  },
  fire : {
    active : false,
    lastFireTime : 0
  }

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.ship.forward = true;
      break;
    case "s":
      CONTROLS.ship.backward = true;
      break;
    case "a":
      CONTROLS.ship.rotateCounterClockwise = true;
      break;
    case "d":
      CONTROLS.ship.rotateClockwise = true;
      break;
    case "j":
      CONTROLS.fire.active = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "w":
      CONTROLS.ship.forward = false;
      break;
    case "s":
      CONTROLS.ship.backward = false;
      break;
    case "a":
      CONTROLS.ship.rotateCounterClockwise = false;
      break;
    case "d":
      CONTROLS.ship.rotateClockwise = false;
      break;
    case "j":
      CONTROLS.fire.active = false;
      break;
    default:
      break;
  }
});
