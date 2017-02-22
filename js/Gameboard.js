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
    
    /*function enemyCollision() {
        debugger;
        for(i = 0; i < bullet.element.length; i++){
            if(!(enemy.element && bullet.element)){
                return;
            };
        
            var enemyRect = enemy.element.getClientRects()[0];
            var bulletRect = bullet.element.getClientRects()[0];
        
            if (enemyRect.left < bulletRect.left + bulletRect.width &&
                enemyRect.left + enemyRect.width > bulletRect.left &&
                enemyRect.top < bulletRect.top + bulletRect.height &&
                enemyRect.height + enemyRect.top > bulletRect.top){
            
                console.log("Collision");
                //enemy.element.remove();
            };

        };
    
    };*/
    
    /*
     *  Enemy Spawner
     */
    function enemySpawner() {
    
        for(i = 0; i <= 50; i++){
            new Enemy();
            console.log(i)
        };
        
    };
    
    
    /*
     *  Render game
     */
    function render(){
        player.render(movement);
        enemy.render();
        //enemyCollision();
        enemySpawner();
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