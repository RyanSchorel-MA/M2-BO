export class Gamelogic{

    constructor(game){
        this.game = game;
        


    }

    mouseMoved(event){

        this.game.player.x = event.offsetX;
        this.game.player.y = event.offsetY;

    }

    mousedown(event){

     
     
    }

    mouseup(event){

        this.hammerIdle = Rect(0,0,100,100);
        

       }

  

    logic(){


    }
}