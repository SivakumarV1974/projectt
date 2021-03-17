
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof
var ball1,ball2,ball3,ball4,ball5;

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roof=new Roof(350,100,30,300);
ball1=new Ball(250,300);
ball2=new Ball(300,300);
ball3=new Ball(350,300);
ball4=new Ball(400,300);
ball5=new Ball(450,300);

chain1 = new Chain(ball1.body,roof.body,-100,0);                              
chain2= new Chain(ball2.body,roof.body,-50,0);                              
chain3 = new Chain(ball3.body,roof.body,0,0);                              
chain4 = new Chain(ball4.body,roof.body,+50,0);                              
chain5 = new Chain(ball5.body,roof.body,+100,0);                              

World.add(world,chain1);
World.add(world,chain2);
World.add(world,chain3);
World.add(world,chain4);
World.add(world,chain5);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  chain1.display();


  chain2.display();

  chain3.display();

  chain4.display();


  chain5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:50,y:-100})
	}
}