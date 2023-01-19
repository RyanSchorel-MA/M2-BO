
import { Gamerender } from "./gamerender.js";
import { Gamelogic } from "./gamelogic.js";
import {Rect} from "./Rect.js";




class Game {

    constructor(){
    this.canvas = document.getElementById("canvas");
    this.g = canvas.getContext("2d"); 
        this.render = new Gamerender(this);
        this.logic = new Gamelogic(this);
        this.player = new Rect(0, 0, 40, 65);
        this.y=0;
    }

    init(){
        this.render.loadImages();
    }
    
    startGame(){

        let scope = this;
        this.canvas.addEventListener("mousemove", function(event){scope.logic.mouseMoved(event);})
       
        this.canvas.addEventListener("mousedown", function(event){scope.logic.mousedown(event);})
        this.canvas.addEventListener("mouseup", function(event){scope.logic.mouseup(event);})
        

        setInterval(function () {scope.doGameFrame()},33);
        
    }


    doGameFrame(){
        this.logic.logic();
        this.render.render();
    }
}

let game = new Game();
game.init();
//game.render();