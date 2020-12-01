const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, dustbin, dustbin1, dustbin2, ground;

function preload(){
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,390,1200,20);
	
	dustbin = new Dustbin(750,330,20,90);
	dustbin1 = new Dustbin(900,330,20,90);
	dustbin2 = new Dustbin(825,370,150,20); 
	paperball = new Paper(200,240);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();  
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  paperball.display();
  

 
}
function keypressed(){
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paperball.body, paperball.body.position, {x:85, y:-85})
	}
}