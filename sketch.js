//wrecking ball simulation


const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var world,engine;
var ground;
var b1,b2,b3,b4, b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var bob;
var chain;

function setup(){
createCanvas(3000,800);
engine=Engine.create();
world=engine.world;

ground=new Ground(600,600,3000,20);
b1=new Build(700,100,70,70);
b2=new Build(700,100,70,70);
b3=new Build(700,100,70,70);
b4=new Build(700,100,70,70);
b5=new Build(700,100,70,70);
b6=new Build(700,100,70,70);
b7=new Build(700,100,70,70);
b8=new Build(800,100,70,70);
b9=new Build(800,100,70,70);
b10=new Build(800,100,70,70);
b11=new Build(800,100,70,70);
b12=new Build(800,100,70,70);
b13=new Build(800,100,70,70);

bob=new Bob(200,200,80);

chain=new Chain(bob.body,{x:500,y:50})

}


function draw(){
background("Pink");

Engine.update(engine);

ground.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
/*b1.display();
b1.display();
b1.display();*/

bob.display()
chain.display();
}
function mouseDragged(){
   Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY});
}