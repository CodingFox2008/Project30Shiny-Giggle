
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;


	mango1=new mango(1100,10,40,40);
	mango2=new mango(1000,10,40,40);
	mango3=new mango(1050,200,40,40);
	mango4=new mango(1030,100,40,40);
	mango5=new mango(900,150,40,40);
	mango6=new mango(1150,150,40,40);
	mango7=new mango(955,200,40,40);

	// sling = new Slingshot(boy.body,{x: 200, y:200});


	treeObj =new tree(1050,580);
	groundObject =new ground(width/2,600,width,20);

	stone = new Stone(500,300,40,40);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  stone.display();

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  
//   sling.display();

  detectollistion(stone,mango1);
  detectollistion(stone,mango2);
  detectollistion(stone,mango3);
  detectollistion(stone,mango4);
  detectollistion(stone,mango5);
  detectollistion(stone,mango6);
  detectollistion(stone,mango7);


  groundObject.display();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPostition(stone,{x:235, y:420});
		launcherObject.attach(stone.body);
	}
}

function detectollistion(stone,mango){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}


}