/**
 *  handleShipAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */
function handleShipAnimation() {
  if (CONTROLS.ship.forward) {
    var radians = (Math.PI / 180) * SPACE_SHIP.rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    SPACE_SHIP.x += SPACE_SHIP.speed * sin;
    SPACE_SHIP.y +=  SPACE_SHIP.speed * cos;
  }
  if (CONTROLS.ship.backward) {
    var radians = (Math.PI / 180) * SPACE_SHIP.rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    SPACE_SHIP.x -= SPACE_SHIP.speed * sin;
    SPACE_SHIP.y -=  SPACE_SHIP.speed * cos;
  }
  if (CONTROLS.ship.rotateClockwise) {
    SPACE_SHIP.rotation -= 4;
  }
  if (CONTROLS.ship.rotateCounterClockwise) {
    SPACE_SHIP.rotation += 4;
  }

  // Check if spaceship is leaving the boundary, if so, switch sides
  if (SPACE_SHIP.x > GAME.canvas.width) {
    SPACE_SHIP.x = 0;
  } else if (SPACE_SHIP.x < 0) {
    SPACE_SHIP.x = GAME.canvas.width;
  } else if (SPACE_SHIP.y > GAME.canvas.height) {
    SPACE_SHIP.y = 0;
  } else if (SPACE_SHIP.y < 0) {
    SPACE_SHIP.y = GAME.canvas.height;
  }
}

function HandleAsteroidMovement() {
  var radians = (Math.PI / 180) * ASTEROID.direction,
      cos = Math.cos(radians),
      sin = Math.sin(radians);
  ASTEROID.x += ASTEROID.speed * sin;
  ASTEROID.y +=  ASTEROID.speed * cos;

  // Check if asteroid is leaving the boundary, if so, switch sides
  if (ASTEROID.x > GAME.canvas.width) {
    ASTEROID.x = 0;
  } else if (ASTEROID.x < 0) {
    ASTEROID.x = 600;
  } else if (ASTEROID.y > GAME.canvas.height) {
    ASTEROID.y = 0;
  } else if (ASTEROID.y < 0) {
    ASTEROID.y = 300;
  }
}

function RenderNewObject(context) {
  // Draw a new item here using the canvas 'context' variable
}

function HandleNewObjectMovement() {
  //NEW_OBJECT.x += 1;
  //NEW_OBJECT.y += 1;
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleShipAnimation();
    HandleNewObjectMovement();
    HandleAsteroidMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    RenderSpaceship(context);
    RenderNewObject(context);
    RenderAsteroid(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
