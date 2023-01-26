import { Rect } from "./rect.js";

export class Gamerender{

    constructor(game){
        this.game = game;
        this.canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");
        this.images = [];
        this.hammerIdle = new Rect(0,0,100,100);
        this.hammerSlain = new Rect (0,50,100,100);
        this.moleIdle = new Rect (10,10,100,100);

    }

    loadImages(){
        let scope = this;
        let sources = ["Hammer.png", "Hammer_Down.png", "moleIdle.png", "moleSlain.png"];
        let loaded = 0;
        for (let i = 0; i < sources.length; i++){

            let img = new Image();
            
            img.onload = function (){
                
                loaded++;

                if (loaded == sources.length){

                    scope.game.startGame();
                }
            };

            img.src = sources[i];
            this.images.push(img);
        }
    }

    renderSprite(img,pos){
        let g = this.g
        g.drawImage(img,pos.x, pos.y, pos.w, pos.h);

    }

    render(){
        let g = this.g;

        g.fillStyle = "#1A6220";
        g.fillRect(0,0,this.canvas.clientWidth,this.canvas.clientHeight);

        g.fillStyle = this.rectcolor;
        let player = this.game.player;
        this.renderSprite(this.images[this.game.moleState], this.game.mole);
        this.renderSprite(this.images[this.game.playerSprite], this.game.player );
        
       
        
      


    }
   
}