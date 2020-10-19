class Ground{
//giving properties
constructor(x,y,width,height){
    this.width = width;
    this.height = height;
    //giving options
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    
    }
    //giving functions
    display(){
    var pos = this.body.position;
    strokeWeight(3);
    stroke("green");
    fill("yellow");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    
    }

    
}