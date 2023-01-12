
import { Gamerender } from "./gamerender.js";
import { Gamelogic } from "./gamelogic.js";

let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d"); 



class Game {

    constructor(){
        this.render = new Gamerender(this);
        this.logic = new Gamelogic(this);
        this.x=0;
        this.y=0;
    }

    init(){
        let scope = this;

        this.renderer.canvas.addEventListener("mousemove", function(event){scope.logic.mouseMoved(event);})

        setInterval(function () {scope.doGameFrame()},33);
    }

    mouseMoved(event){


    }

    doGameFrame(){
        this.logic.logic();
        this.render.render();
    }
}

let game = new Game();
game.init();
//game.render();