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
        let sources = ["Hammer.png", "Hammer_Down.png", "moleIdle.png", "moleSlain.png", "moleHole.png"];
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

    renderUI(){

        this.g.font = "20px Verdana";
        this.g.fillStyle = "#FFFFFF";
        this.g.fillText("Score: " + this.game.Score, 5,25);

    }

    render(){
        let g = this.g;

        g.fillStyle = "#1A6220";
        g.fillRect(0,0,this.canvas.clientWidth,this.canvas.clientHeight);

        g.fillStyle = this.rectcolor;
        let player = this.game.player;

        for (var i = 0; i < this.game.hole.length; i++){

            let hole = this.game.hole[i];
            this.renderSprite(this.images[4], hole.rect);

        }

        for (var i = 0; i < this.game.mole.length; i++){

            let mole = this.game.mole[i];
            if(mole.visible == true){

                for (var i = 0; i < this.game.mole.length; i++){

                    let mole = this.game.mole[i];
                    this.renderSprite(this.images[2], mole.rect);
        
                }
            }
        }

        

       

    
        
        
        //this.renderSprite(this.images[4], this.game.hole);
        
        this.renderSprite(this.images[this.game.playerSprite], this.game.player);
        
        this.renderUI()
       
        
      


    }
   
}