import { overlap } from "./collisionmath.js";
import { Rect } from "./rect.js";
export class Gamelogic{

    constructor(game){
        this.game = game;


    
    

    }

    mouseMoved(event){

        this.game.player.x = event.offsetX;
        this.game.player.y = event.offsetY;

    }

    mousedown(event){
       
        this.game.playerSprite = 1;
     
    }

    mouseup(event){

        this.game.playerSprite = 0;
       }

  

    logic(){

        if(overlap(this.game.player, this.game.mole) == true && this.game.playerSprite == 1){

            this.game.playerSprite = 1;
            
        }

    }
}