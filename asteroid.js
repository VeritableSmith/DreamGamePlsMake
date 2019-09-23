function InitializeAsteroid() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  ASTEROID = {
    x : 200,
    y : 100,
    rotation : 0,
    health : 1,
    positions : [
      {
        x : 0,
       	y : 4
      },
      {
        x : 2.5,
       	y : 2.5
      },
      {
        x : 4,
       	y : 0
      },
      {
        x : 2.5,
       	y : -2.5
      },
      {
        x : 0,
       	y : -4
      },
      {
        x : -2.5,
        y : -2.5
      },
      {
        x : -4,
        y : 0
      },
      {
        x : -2.5,
        y : 2.5
      },
      {
        x : 0,
        y : 4
      }
    ],
    latest : {
        x : ASTEROID.x,
        y : ASTEROID.y,
    },
    scale : 4,
    speed : Math.ceil(Math.random()*3),
    direction : Math.ceil(Math.random()*360),
    initialized : true
  };
}

// Rotate rotates a point around
// cx, cy   :   The central point
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation
function Rotate(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}

// RotateAroundOrigin
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation
function RotateAroundOrigin(x, y, angle) {
  return Rotate(0, 0, x, y, angle);
}

/**  RenderSpaceship
 *
 *  Renders all asteroid points after adjusting them for the rotation and position
 *    in space
 */
function RenderAsteroid(context) {
  if (!ASTEROID.initialized) {
    return;
  }

  // Move to the point where drawing will start
  var rotatedPoint = RotateAroundOrigin(
    ASTEROID.positions[0].x,
    ASTEROID.positions[0].y,
    ASTEROID.rotation
  );
  context.moveTo(ASTEROID.x + rotatedPoint[0],ASTEROID.y +  rotatedPoint[1]);
  ASTEROID.latest.x = ASTEROID.x + rotatedPoint[0];
  ASTEROID.latest.y = ASTEROID.y + rotatedPoint[1];
  // Begin rendering the asteroid points (rotating them each time)
  context.beginPath();
  for (var i = 0; i < ASTEROID.positions.length; i++) {
    var rotatedPoint = RotateAroundOrigin(
      ASTEROID.positions[i].x,
      ASTEROID.positions[i].y,
      ASTEROID.rotation
    );
    context.lineTo(
      ASTEROID.x + (rotatedPoint[0] * ASTEROID.scale),
      ASTEROID.y + (rotatedPoint[1] * ASTEROID.scale)
    );
  }
  context.lineWidth = 3;
  switch (ASTEROID.health) {
    case 1:
      context.strokeStyle = 'grey';
      break;
    case 0:
      context.strokeStyle = 'green';
      break;
    default:
      context.strokeStyle = 'white';
      break;
  }
  context.stroke();
}
