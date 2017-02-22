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
        
        var bullet = document.getElementsByClassName("bullet");
        
        if (self.position.x < bullet.style.left + 6 &&  // Returns empty array due to no bullet so it returns undefined. If can return true or false, 
            6 + self.position.x > bullet.style.left &&  // get it to ignore till bullets on array
            self.position.y < bullet.style.top + 10 &&
            10 + self.position.y > bullet.style.top){
            
            self.element.remove();
            
        } else if (self.position.y == 900){
            
            self.element.remove();
        }
    
    }    
    
    createEnemy();
}