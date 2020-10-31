
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

var paper;
var ground;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
  
  drawSprites();
 
}



