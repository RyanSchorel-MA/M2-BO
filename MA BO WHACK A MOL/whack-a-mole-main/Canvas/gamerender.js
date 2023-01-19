import {Rect} from "./Rect.js";

export class Gamerender{

    constructor(game){
        this.game = game;
        this.canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");
        this.images = [];

        this.hammerIdle = new Rect(0,0,100,100);

    }

    loadImages(){
        let scope = this;
        let sources = ["Hammer.png"];
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

    render(){
        let g = this.g;

        g.fillStyle = "#1A6220";
        g.fillRect(0,0,this.canvas.clientWidth,this.canvas.clientHeight);

        g.fillStyle = this.rectcolor;
        let player = this.game.player;
        g.drawImage(this.images[0],player.x, player.y, player.w, player.h);
        //g.fillRect(player.x, player.y, player.w, player.h);

      


    }
   
}