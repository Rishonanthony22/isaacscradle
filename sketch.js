
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var ground;


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,100,300,30)
	bob1=new Paper(400-40,300,20)
	rope1=new Rope(bob1.body,ground.body,-40,0)
	bob2=new Paper(400-20,300,20)
	rope2=new Rope(bob2.body,ground.body,-20,0)
	bob3=new Paper(400,300,20)
	rope3=new Rope(bob3.body,ground.body,0,0)
	bob4=new Paper(400+20,300,20)
	rope4=new Rope(bob4.body,ground.body,20,0)
	bob5=new Paper(400+40,300,20)
	rope5=new Rope(bob5.body,ground.body,40,0)
	
	



	Engine.run(engine);
  
}
	
  	
  


function draw() {
  rectMode(CENTER);
  background("magenta");
  
  textSize(40);
  fill("black")
  text("Press up arrow to move",600,650)

  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	
	  Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-20});
	
	}
	
	}
	



