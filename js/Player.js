var Player = function () {

    var position = {
        "x": 250,
        "y": 700
    }
    var speed = 5;
    var playerElement = document.getElementById("player");
    var gameBoard = document.getElementById("board");
    var bullets = [];

    function shoot(){
        bullets.push(new Bullet(position.x, position.y));
    }

    this.render = function(movement){


        if(movement.up){
            position.y -= speed;
        }

        if(movement.down){
            position.y += speed;
        }

        if(movement.left){
            position.x -= speed;
        }

        if(movement.right){
            position.x += speed;
        }

        if(movement.shoot){
            shoot();
        }
        
        if(position.y <= 16){
            position.y = 16;
        }
    
        if(position.y >= 834){
            position.y = 834;
        }

        if(position.x <= 16){
            position.x = 16;
        }

        if(position.x >= 484){
            position.x = 484;
        }

        playerElement.style.top = position.y + "px";
        playerElement.style.left = position.x + "px";
        
        bullets.forEach(function(el, index){
            el.render();

            if(el.position.y < 0 ){
                el.element.remove();
                bullets.slice(index,1);
            }
        });
    }
}