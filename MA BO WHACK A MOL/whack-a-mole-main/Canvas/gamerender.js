export class Gamerender{

    constructer(game){
        this.game = game;
        this.canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");

    }

    render(){
        let g = this.g;

        g.fillStyle = ("#708090");
        g.fillRect(0,0,this.canvas.clientWidth,this.canvas.clientHeight);

        g.fillStyle = ("#000080");
        g.fillRect(this.x,this.y,10,10);


    }
}