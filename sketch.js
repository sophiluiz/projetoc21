
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftSide, rightSide;
var world;
var radius = 25;

//function preload()
//{
	
//}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball= Bodies.circle(200, 100, 20, ball_options);
  	World.add (world, ball);

	groundObj = new ground (width/2,670,width,20)
	rightSide = new ground (1350,600,20,120);
	leftSide = new ground (1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ellipse(ball.position.x, ball.position.y, radius,radius)

	groundObj.display();

	leftSide.display();
	rightSide.display();

  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){

	 Matter.Body.applyForce(ball,ball.position,{x:0, y:0}, {x:0.5, y:0})

	}
}

//function forcex(){
//	Matter.Bodye.applyForce(ball,{x:0, y:0}, {x:0.5, y:0})
//  }
