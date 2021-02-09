const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,groundObj,paperObj
var binImg
var world;

function preload(){
	binImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperObj=new Paper(700,300);
	
	groundObj=new Ground(width/2,670,width,20);

	dustbinObj=new Dustbin(1200,650);
}


function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine);

  groundObj.display();

  dustbinObj.display();
  imageMode(CENTER);
  image(binImg,1200,530,300,300);

  paperObj.display();
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:110,y:-200})
	}
}