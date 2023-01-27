import { overlap } from "./collisionmath.js";
import { Rect } from "./rect.js";


export class Gamelogic{

    constructor(game){
        this.game = game;


    
    

    }

    mouseMoved(event){

        //if (this.game.screen != 1){

            //return
        //}

        this.game.player.x = event.offsetX;
        this.game.player.y = event.offsetY;

    }

    mousedown(event){

        //if (this.game.screen ==0){

            //this.game.newGame();
            //return
        //}
       
        let hitI = this.hitMole()
        if(hitI != -1){

            //let mole = this.game.mole[hitI];
            //mole.visible = false
            this.game.Score++;
            }


        this.game.playerSprite = 1;
     
    }

    mouseup(event){

        //if (this.game.screen != 1){

            //return
        //}
        let hitI = this.hitMole()
        if(hitI != -1){

            let mole = this.game.mole[hitI];
            mole.visible = false
        }

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
            
            }

        }
        

        
}
