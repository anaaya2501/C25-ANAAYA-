class Log{
//giving properties
constructor(x,y,height,angle){
    this.width = 20;
    this.height = height;
    //giving options
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x,y,20,height,options);
    Matter.Body.setAngle(this.body,angle);
    World.add(world,this.body);
    
    }
    //giving functions
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("red");
    fill("black");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }



}