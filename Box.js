class Box{
//giving properties
constructor(x,y,width,height){
this.width = width;
this.height = height;
//giving options
var options = {
   ' restitution':0.8,
    'friction':1.0,
    'density':1.0
}
this.body = Bodies.rectangle(x,y,width,height,options);
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
fill("blue");
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();
}

}