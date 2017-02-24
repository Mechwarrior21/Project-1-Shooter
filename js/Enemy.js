var Enemy = function () {
    
    var gameBoard = document.getElementById("board");
    var gameBoardRect = gameBoard.getClientRects()[0];

    // Position of spawning enemies
    this.position = {
        "x": Math.floor(Math.random() * gameBoardRect.width),
        "y": -16
    }

    var speed = 2;
    this.element = null;
    this.bullets = [];
    var framesCounter = 0;
    var self = this;

    // Enemy shooting function based on frame count
    var shoot = function(){
        if((framesCounter%60 == 0)){
        window.gameBoard.enemyBullets.push(new Bullet(self.position.x, self.position.y, "enemy"));
        }
    }

    // Enemy creation on board
    var createEnemy = function () {
        self.element = document.createElement("div");
        self.element.classList.add("enemyOne");

        self.element.style.top = self.position.y + "px";
        self.element.style.left = self.position.x + "px";

        var gameBoard = document.getElementById("board");
        gameBoard.appendChild(self.element);
    };

    // Render enemies on game board
    this.render = function(){
        framesCounter++;
        self.position.y += speed;
        self.element.style.top = self.position.y + "px";

        if (self.position.y > window.innerHeight){
            self.element.remove();
        };

        shoot();
    };   

    createEnemy();

};