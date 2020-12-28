class Box  {
  constructor(x, y, width, height){
    var options = {
      restitution:0.8,
      friction:0,
      density:1.0,
      //isStatic:true

  }
  var s=0;
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.visibility= 225
  this.width = width;
  this.height = height;
    
  World.add(world, this.body);
  
}
  
  
display(){
    
    //console.log("in super display");
    if(this.body.speed < 3){
      push()
      translate(this.body.position.x,this.body.position.y)
      rotate(this.body.angle)
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
     
     }

     else{
       World.remove(world, this.body);
       push();
       this.visibility = this.visibility - 5;
       pop();
     }
     
    }
    score(){
      if(this.visibility<225 && this.visibility>=-105){
        s++;
      }
    }
  
  }



