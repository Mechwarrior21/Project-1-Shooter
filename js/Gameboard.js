var Gameboard = function(){

    var board = document.getElementById('board');           // Game board
    var player = new Player();
    var enemy = new Enemy();

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

    function enemyCollision() {
        var enemy = document.getElementsByClassName('enemyOne');
        var bullet = document.getElementsByClassName('bullet');
        
        
        if (enemy.getClientRects()[0].left < bullet.getClientRects()[0].left + 6 &&
            6 + enemy.getClientRects()[0].left > bullet.getClientRects()[0].left &&
            enemy.getClientRects()[0].top < bullet.getClientRects()[0].top + 10 &&
            10 + enemy.getClientRects()[0].top > bullet.getClientRects()[0].top){
            
            enemy.element.remove();
        };
        
    };
    
    /*
     *  Render game
     */
    function render(){
        player.render(movement);
        enemy.render();
        enemyCollision();
    };


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