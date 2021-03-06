const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var box1, box2,box3,box4,box5,box6,box7,box8,box9;
var polygon
var slingShot

var score = 0;
var bg = "sprites/bg.png"
function preload() {

  this.polygonImg  = loadImage("polygon.png");
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,400,700,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
   box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);
  box6 = new Box(805,280,70,70);
  box7 = new Box(800,210,70,70);
  box8 = new Box(695,215,70,70);
  box9 = new Box(915,215,70,70);

  polygon=Bodies.circle(50,200,50)
  World.add(world,polygon)

  slingShot=new Slingshot(this.polygon,{x:200,y:200})
}

function draw(){
  background("blue");
  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,40,40)
 
    Engine.update(engine);
    
   text(mouseX+","+mouseY,10,15)
    text("KNOCK USSSSSS",567,87)
    text("SCORE:"+score,350,115)
   
box1.display();
box1.score();
box2.display();
box2.score();
ground.display();
box3.display();
box3.score();
box4.display();
box4.score();
box5.display();
box5.score();
box6.display();  
box6.score();
box7.display();   
box7.score();
box8.display();    
box8.score();
box9.display();
box9.score(); 
slingShot.display();
 
   
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

