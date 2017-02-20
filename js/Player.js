var Player = function () {

    var postion = {
        "x": 100,
        "y": 100
    }
    var speed = 5;
    var playerElement = document.getElementById("player");
    var gameBoard = document.getElementById("board");
    var bullets = [];

    function shoot(){
        bullets.push(new Bullet(postion.x, postion.y));
    }

    this.render = function(movement){


        if(movement.up){
            postion.y -= speed;
        }

        if(movement.down){
            postion.y += speed;
        }

        if(movement.left){
            postion.x -= speed;
        }

        if(movement.right){
            postion.x += speed;
        }

        if(movement.shoot){
            shoot();
        }

        playerElement.style.top = postion.y + "px";
        playerElement.style.left = postion.x + "px";

        bullets.forEach(function(el, index){
            el.render();

            if(el.postion.y < 0 ){
                el.element.remove();
                bullets.slice(index,1);
            }
        });
    }
}