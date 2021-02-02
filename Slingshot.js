class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.2,
            length : 10,
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(x){
        this.sling.bodyA = x;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(5);
            stroke(48, 22, 8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}




















    
