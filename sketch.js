
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var Cpaper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Cpaper = new paper(300,630,50);
	
	
	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 //Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  Cpaper.display();

}
function keyPressed()
{
	if(keyCode===38)
	{
		Matter.Body.applyForce(Cpaper.body, Cpaper.body.position,{x:400,y:-700});
	}
}
