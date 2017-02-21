var Enemy = function () {
    
    this.position = {
        "x": 100,
        "y": -70
    }
    
    var speed = 2;
    this.element = null;
    
    var self = this;

    var createEnemy = function () {

        self.element = document.createElement("div");
        self.element.classList.add("enemyOne");

        self.element.style.top = self.position.y + "px";
        self.element.style.left = self.position.x + "px";

        var gameBoard = document.getElementById("board");
        gameBoard.appendChild(self.element);
        
    }
    
    this.render = function(){
        self.position.y += speed;
        self.element.style.top = self.position.y + "px";
        
        
        if (self.position.x < Bullet.position.x + 6 &&
            6 + self.position.x > Bullet.position.x &&
            self.position.y < Bullet.position.y + 10 &&
            10 + self.position.y > Bullet.position.y){
            
            self.element.remove();
            
        } else if (self.position.y == 900){
            
            self.element.remove();
        }
    
    }    
    
    createEnemy();
}