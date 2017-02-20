console.log("Game Engine");

//Game Engine code
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// Controls for Player avatar

/*function playerOneMovement(){
var keyUP = false;
var keyDOWN = false;
var keyLEFT = false;
var keyRIGHT = false;

document.addEventListener('keydown', function(e) {  
  
  switch(e.keyCode){
    case 38:
      keyUP = true;
      break;
    case 40:
      keyDOWN = true;
      break;
    case 37:
      keyLEFT = true;
      break;
    case 39:
      keyRIGHT = true;
      break;
    default:
  }
});

document.addEventListener('keyup', function(e) {  
  
  switch(e.keyCode){
    case 38:
      keyUP = false;
      break;
    case 40:
      keyDOWN = false;
      break;
    case 37:
      keyLEFT = false;
      break;
    case 39:
      keyRIGHT = false;
      break;
    default:
  }
  
});

};

// Set posotion of Player One
var screenHeight = playingField.innerHeight;
var screenWidth = playingField.innerWidth;

var x = playingField.innerWidth / 2;
var y = playingField.innerHeight / 2;
var speed = 20;

var playerOnePosition = document.getElementById("playerOne");
playerOnePosition.style.top = y;
playerOnePosition.style.left = x;

// Edge detection
function edgeDetect(){
  
    if(y <= 16){
      y = 16;
    }
    
    if(y >= (playingField.innerHeight-16)){
      y = playingField.innerHeight-16;
    }
  
    if(x <= 16){
      x = 16;
    }
  
    if(x >= (playingField.innerWidth-16)){
      x = playingField.innerWidth-16;
    }
}

// Rendering code
function render(){
  
  if(keyUP || motion.up){
    y -= speed;
  }
  
  if(keyDOWN || motion.down){
    y += speed;
  }
  
  if(keyLEFT || motion.left){
    x -= speed;
  }
  
  if(keyRIGHT || motion.right){
    x += speed;
  }
  
  edgeDetect();
  
  playerOnePosition.style.top = y;
  playerOnePosition.style.left = x;
}

(function animloop(){
  requestAnimFrame(animloop);
  render();
})();*/