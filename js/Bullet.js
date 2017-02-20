var Bullet = function(x,y) {

    this.postion = {
        "x": x,
        "y": y
    }
    var speed = 20;
    this.element = null;
    
    var self = this;

    var create = function () {

        self.element = document.createElement("div");
        self.element.classList.add("bullet");

        self.element.style.top = self.postion.y + "px";
        self.element.style.left = self.postion.x + "px";

        var gameBoard = document.getElementById("board");
        gameBoard.appendChild(self.element);
    }

    this.render = function(){
        self.postion.y -= speed;
        self.element.style.top = self.postion.y + "px";
    }

    create();
}