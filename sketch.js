const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var poly, ground, stand1, stand2, polygon, engine, world;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22;

function preload(){
  polygon = loadImage("polygon.png");
}

function setup() {
  
  createCanvas(1200,570);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  stand1 = new Stand(600, 285, 200, 10);
  stand2 = new Stand(900, 195, 200, 10);
 
  
  block1 = new Box(600, 260, 30, 40);
  block2 = new Box(570, 260, 30, 40);
  block3 = new Box(540, 260, 30, 40);
  block4 = new Box(630, 260, 30, 40);
  block5 = new Box(660, 260, 30, 40);
  block6 = new Box(585, 220, 30, 40);
  block7 = new Box(555, 220, 30, 40);
  block8 = new Box(615, 220, 30, 40);
  block9 = new Box(645, 220, 30, 40);
  bolck10 = new Box(600, 170, 30, 40);
  block11 = new Box(570, 180, 30, 40);
  block12 = new Box(630, 180, 30, 40);
  block13 = new Box(600, 140, 30, 40);
  block14 = new Box(900, 170, 30, 40);
  block15 = new Box(930, 170, 30, 40);
  block16 = new Box(870, 170, 30, 40);
  block17 = new Box(840, 170, 30, 40);
  block18 = new Box(960, 170, 30, 40);
  block19 = new Box(900, 140, 30, 40);
  block20 = new Box(930, 140, 30, 40);
  block21 = new Box(870, 140, 30, 40);
  block22 = new Box(900, 110, 30, 40);

  poly = Bodies.circle(50,200,20 ,{density:2});
  World.add(world, poly);

  slingShot = new Slingshot(this.poly, {x:150, y:300})
}

function draw() {
  background("#646D7E");

  textSize(22);
  fill("#000080");
  text("Press the 'd' to get the ball again   :)",19,33);

  ground.display();

  stand1.display();
  stand2.display();

  slingShot.display();

  fill(rgb(135, 205, 236));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
  bolck10.display();
  block11.display();
  block12.display();

  fill(rgb(47, 48, 48));
  block13.display();

  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("lightGreen");
  block19.display();
  block20.display();
  block21.display();

  fill("lime");
  block22.display();
  

  imageMode(CENTER)
  image(polygon ,poly.position.x, poly.position.y,50,50);

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(poly,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 68)
  Matter.Body.setPosition(poly, {x:150, y:400});
  slingShot.attach(poly);
}










