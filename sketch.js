//namespacing or nicknaming
//to make the objects run
const Engine = Matter.Engine;
//to make the objects structure
const Bodies = Matter.Bodies;
//where the objects belong
const World = Matter.World;

//var for ABG
var engine, world;
var ground;
var ball

function setup() {
  //create the background/base
  createCanvas(800,400);

  //to create engine from the main Engine class
  engine = Engine.create();
  //where the world of abg is the same as the engines world
  world = engine.world;

  var options ={
    //to make the object still
    isStatic:true
  }

  //created a ground from the main Bodies class
  ground = Bodies.rectangle(400,350,800,20,options);
  //added the ground along with its world to the main World class
  World.add(world,ground);

  //displaying the ground in the console
  console.log(ground);
  
  //created whenever property needs to be changed
  var options = {
    //it makes the object bounce
    restitution: 1
  }

  //created a ball from the main Matter.Bodies class
  ball = Bodies.circle(700, 0, 50, options);
  //added the ball along with its world to the main Matter.World class
  World.add(world, ball);
}

function draw() {
  //to clear screen and give background color
  background("lightBlue"); 
  
  //to update the ABG engine
  Engine.update(engine);

  //to fill color in an object
  fill("blue");
  //to color the outline
  stroke("grey");
  //to make the co-ordinates the center of rectangle, rather than top-left corner
  rectMode(CENTER);
  //display a rectangle
  rect(ground.position.x,ground.position.y,800,20);

  //to fill color in an object
  fill("orange");
  //to color the outline
  stroke("red");
  //to make the ball actually touch the ground
  ellipseMode(RADIUS);
  //to display a circle
  ellipse(ball.position.x, ball.position.y, 50, 50);
 
}
