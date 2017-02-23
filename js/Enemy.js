var Enemy = function () {
    
    for(i = 0; i <= 50; i++){

        this.position = {
            "x": Math.floor(Math.random() * ((484-16)+1) +16),
            "y": -16
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

            };

        this.render = function(){
            self.position.y += speed;
            self.element.style.top = self.position.y + "px";

            if (self.position.y == 866){
                self.element.remove();

            };

        };   

        createEnemy();
        
    };
};