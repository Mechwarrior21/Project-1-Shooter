var Gameboard = function(){

    var board = document.getElementById('board');           // Game board
    var player = new Player();

    var movement = {
        "up":false,
        "down":false,
        "left":false,
        "right":false,
        "shoot":false
    };


    /*
     * Event listeners
     */
    document.addEventListener('keydown', function(e) {

        console.log(e.keyCode);

        switch(e.keyCode){
            case 38:
                movement.up = true;
                break;
            case 40:
                movement.down = true;
                break;
            case 37:
                movement.left = true;
                break;
            case 39:
                movement.right = true;
                break;
            case 32:
                movement.shoot = true;
                break;
            default:
        }
    });

    document.addEventListener('keyup', function(e) {
        switch(e.keyCode){
            case 38:
                movement.up = false;
                break;
            case 40:
                movement.down = false;
                break;
            case 37:
                movement.left = false;
                break;
            case 39:
                movement.right = false;
                break;
            case 32:
                movement.shoot = false;
                break;
            default:
        }
    });


    /*
     *  Render game
     */
    function render(){
        player.render(movement);
      //  this.enemies.render(movement);
    }


    /*
     *  Game loop
     */
    function animloop(){
        window.requestAnimFrame(animloop);
        render();
    };

    animloop();
};


/*
 *  Polyfill requestAnimationFrame works on any browser
 */
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();


var gameBoard = new Gameboard();