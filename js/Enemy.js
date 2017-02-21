var Enemy = function () {
    
    var position = {
        "x": 100,
        "y": -70
    }
    
    var speed = 5;
    var bullets = [];
    this.element = null;
    
    var self = this;

    var createEnemy = function () {

        self.element = document.createElement("div");
        self.element.classList.add("enemyOne");

        self.element.style.top = position.y + "px";
        self.element.style.left = position.x + "px";

        var gameBoard = document.getElementById("board");
        gameBoard.appendChild(self.element);
        
    }
    
    this.render = function(){
        self.position.y += speed;
        self.element.style.top = self.position.y + "px";
    }
    
    createEnemy();
}