var Gameboard = function(){

    var board = document.getElementById('board');           // Game board
    var player = new Player();
    var enemies = [];
    this.enemyBullets = [];
    this.playerBullets = [];
    var self = this;

    var framesCounter = 0;

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

    function spawnEnemy() {

        if((framesCounter%60 == 0)){
            enemies.push(new Enemy());
        }
    }

    function enemyCollision() {

        /*
         *      Player bullets -> Enemy
         */

        for(var i = 0; i < self.playerBullets.length;i++){
             var bullet =  self.playerBullets[i];

             if(bullet.element.getClientRects().length == 0 ){
                 continue;
             }

             var bulletRect = bullet.element.getClientRects()[0];

             for(var j =0; j< enemies.length; j++){
                 var enemy = enemies[j];

                 if(enemy.element.getClientRects().length == 0 ){
                     continue;
                 }

                 var enemyRect = enemy.element.getClientRects()[0];

                 if (enemyRect.left < bulletRect.left + bulletRect.width &&
                     enemyRect.left + enemyRect.width > bulletRect.left &&
                     enemyRect.top < bulletRect.top + bulletRect.height &&
                     enemyRect.height + enemyRect.top > bulletRect.top){

                     enemy.element.remove();
                     bullet.element.remove();
                     self.playerBullets.splice(i,1);
                     enemies.splice(j,1);
                 }
             }
        }

        /*
         *      Enemy bullets -> Player
         */
        var playerRect = player.playerElement.getClientRects()[0];
        for(var i = 0; i < self.enemyBullets.length;i++){

            var enemyBullet = self.enemyBullets[i];
            if(enemyBullet.element.getClientRects().length == 0 ){
                continue;
            }

            var enemyBulletRect = enemyBullet.element.getClientRects()[0];

            if (playerRect.left < enemyBulletRect.left + enemyBulletRect.width &&
                playerRect.left + playerRect.width > enemyBulletRect.left &&
                playerRect.top < enemyBulletRect.top + enemyBulletRect.height &&
                playerRect.height + playerRect.top > enemyBulletRect.top){

                console.log("you are dead");

                // Insert major explosion
            }
        }
    };
    
    /*
     *  Render game
     */
    function render(){
        framesCounter++;
        player.render(movement);


        self.enemyBullets.forEach(function(el, index){
            el.render();

            if(el.position.y > window.innerHeight ){
                el.element.remove();
                self.enemyBullets.slice(index,1);
            }
        });


        self.playerBullets.forEach(function(el, index){
            el.render();

            if(el.position.y < 0 ){
                el.element.remove();
                self.playerBullets.slice(index,1);
            }
        });

        spawnEnemy();

        enemies.forEach(function (el,index){
            el.render();
        });

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