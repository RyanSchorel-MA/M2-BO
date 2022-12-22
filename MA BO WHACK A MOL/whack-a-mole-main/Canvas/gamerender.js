export class Gamerender{

    constructer(game){
        this.game = game;
        this.canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");

    }

    render(){
        let g = this.g;
        g.fillStyle = ("#93cec9");
        g.fillRect(0,0,this.canvas.clientWidth,this.canvas.clientHeight);
        g.fillStyle = ("#2e2874");
        g.fillRect(0,0,10,10);


    }
}