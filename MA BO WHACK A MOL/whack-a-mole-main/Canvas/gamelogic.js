export class Gamelogic{

    constructer(game){
        this.game = game;
        


    }

    mouseMoved(event){

        this.game.x = event.offsetX;
        this.game.x = event.offsetY;

    }
    logic(){


    }
}