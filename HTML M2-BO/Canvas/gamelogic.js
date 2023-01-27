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

    hitMole(){

        for (var i = 0; i < this.game.mole.length; i++){

            let mole = this.game.mole[i];

            if(mole.visible == true){

                if(overlap(this.game.player, mole.rect) == true && this.game.playerSprite == 1){
                    return i;
                    
        
                }
                
                
        


            }

        }
        return -1;
    }

    logic(){

        if(this.hitMole() != -1){

            
            this.game.Score += 1;
            this.game.mole.y += 0.5
            if(this.game.mole.y >= this.game.mole.y + 10){

                mole = new Mole (new Rect(0,0,0,0));
            }

        }
        

        
    }
}