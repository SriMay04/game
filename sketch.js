const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;

function preload(){
bg=loadImage("bg.jpg");

}


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
     
    ball= new Ball(50 ,100, 100);
    ground= new Ground(600, 595, 1200, 1);
   

}

function draw(){
    background(bg);
    Engine.update(engine);

    ball.display();
    ground.display();

}