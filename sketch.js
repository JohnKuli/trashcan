
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(350,700,800,20);
    World.add(world,ground);
    
	trash1 = Bodies.rectangle(400,10,760,50);
	World.add(world,trash1);

	trash2 = Bodies.rectangle(450,10,760,50);
	World.add(world,trash2);

	Engine.run(engine);
  
	ball1= new Ball(320,380,40)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground=rect(ground.x,ground.y,ground.w,ground.h);

  trash1=rect(trash1.x,trash1.y,trash1.w,trash1.h);
  trash2=rect(trash2.x,trash2.y,trash2.w,trash2.h);

  ball1.show();

  drawSprites();
 

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0,y:-45});
	}
}

