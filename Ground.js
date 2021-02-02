class Ground {
  constructor() {
    var options = {isStatic: true}
    this.ground = Bodies.rectangle(450,550,1500,20,options)
    World.add(world, this.ground)
}

  display() {
    // stroke("#5FFB17");
    strokeWeight(1);
    fill("#50EBEC");
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,1500,20);
  }
}