class Ball{
    constructor(x,y,r){
        var options={
            restitution:0.5,
            friction:1.2,
            //isStatic:false

        }
        this.radius=r
        this.image=loadImage("polygon.png")
        this.body = Bodies.circle(x,y,r,options);
      
    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius, this.radius);
        pop();
      }
}
