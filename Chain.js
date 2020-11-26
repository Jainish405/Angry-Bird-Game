class Chain{
    constructor(bodyA,pointB){
        var options = {
            stiffness:0.05,
            length:0.08,
            bodyA:bodyA,pointB:pointB
            
        }
        this.sling=Constraint.create(options)
        this.pointB=pointB;
        World.add(world,this.sling)
    }
display() {
    var pointA=this.sling.bodyA.position
    var pointB=this.pointB
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
   
}