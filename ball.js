class Ball{
    constructor(x,y,r){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
       
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
       

       World.add(world, this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        circle(0, 0, this.r);
        pop()
    }
}