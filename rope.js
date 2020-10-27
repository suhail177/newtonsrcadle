class Rope{
    //assigning properties between 2 bodies.
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            //accepting the first body
            bodyA:body1,
            //accepting the second body
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
            
        }
        //adding chain to constraint in Matter.Constraint
        this.rope = Constraint.create(options);
        //adding the body(that is chain) to the World.
        World.add(world,this.rope);
    }
    display(){
        //displaying the position of bodyA and bodyB attached to the chain
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        //giving the thickness to the attaching body
        strokeWeight(2);
        
        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x + this.offsetX;
        var Anchor2Y = pointB.y + this.offsetY;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}