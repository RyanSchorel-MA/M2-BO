import { Gamerender } from "./gamerender.js";
import { Gamelogic } from "./gamelogic.js";

let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d"); 



class Game {

    constructor(){
        this.render = new GameRender(this);
        this.logic = new GameLogic(this);
    }

}

let game = new Game();
//game.render();