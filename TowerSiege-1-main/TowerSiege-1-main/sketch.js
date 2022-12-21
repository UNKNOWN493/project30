
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var slingShot;

function setup() {

  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,200,200,20);
  ground2 = new Ground(700,300,200,20);

  block1 = new Block(320,190,20,20);
  block2 = new Block(340,190,20,20);
  block3 = new Block(360,190,20,20);
  block4 = new Block(380,190,20,20);
  block5 = new Block(400,190,20,20);
  block6 = new Block(420,190,20,20);
  block7 = new Block(440,190,20,20);
  block8 = new Block(460,190,20,20);
  block9 = new Block(480,190,20,20); 

  block10 = new Block(340,170,20,20);
  block11 = new Block(360,170,20,20);
  block12 = new Block(380,170,20,20);
  block13 = new Block(400,170,20,20);
  block14 = new Block(420,170,20,20);
  block15 = new Block(440,170,20,20);
  block16 = new Block(460,170,20,20);

  polygon = new Polygon(50,200,20);

  slingShot = new SlingShot(polygon.body,{x:100,y:100});
}

function draw() {

  background(200,200,200);  
  Engine.update(engine);
  strokeWeight(4);

  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();

  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();

  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();

  block47.display();
  block48.display();
  block49.display();

  block50.display();

  slingShot.display();
  polygon.display();

  drawSprites();
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}