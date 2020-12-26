const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var engine, world;

var plinko,pl2,pl3,pl4,pl5,pl6,pl7,pl8,pl9,pl10,pl11,pl12,pl13,pl14,pl15,pl16,pl17,pl18,pl19,pl20,
pl21,pl22,pl23,pl24,pl25,pl26,pl27,pl28,pl29,pl30,pl31,pl32,pl33,pl34,pl35,pl36,pl37,pl38,pl39,pl40;
var division,d2,d3,d4,d5,d6,d7;
var particle;

var ground;
var divisionHeight=300;
var particles=[];
var plinkos=[];
var divisions=[];


function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,500,1200,20);
  particle =new Particle(240,0,10);
   division=new Division(0,400,10,200);
   d2= new Division(80,400,10,200);
   d3= new Division(160,400,10,200);
   d4= new Division(240,400,10,200);
   d5=new Division(320,400,10,200);
   d6=new Division(400,400,10,200);
   d7=new Division(480,400,10,200);
   plinko=new Plinko(40,50,5);
   pl2=new Plinko(80,50,5);
   pl3=new Plinko(120,50,5);
   pl4=new Plinko(160,50,5);
   pl5=new Plinko(200,50,5);
   pl6=new Plinko(240,50,5);
   pl7=new Plinko(280,50,5);
   pl8=new Plinko(320,50,5);
   pl9=new Plinko(360,50,5);
   pl10=new Plinko(400,50,5);

   pl11=new Plinko(40,100,5);
   pl12=new Plinko(80,100,5);
   pl13=new Plinko(120,100,5);
   pl14=new Plinko(160,100,5);
   pl15=new Plinko(200,100,5);
   pl16=new Plinko(240,100,5);
   pl17=new Plinko(280,100,5);
   pl18=new Plinko(320,100,5);
   pl19=new Plinko(360,100,5);
   pl20=new Plinko(400,100,5);

   pl21=new Plinko(40,150,5);
   pl22=new Plinko(80,150,5);
   pl23=new Plinko(120,150,5);
   pl24=new Plinko(160,150,5);
   pl25=new Plinko(200,150,5);
   pl26=new Plinko(240,150,5);
   pl27=new Plinko(280,150,5);
   pl28=new Plinko(320,150,5);
   pl29=new Plinko(360,150,5);
   pl30=new Plinko(400,150,5);

   pl31=new Plinko(40,200,5);
   pl32=new Plinko(80,200,5);
   pl33=new Plinko(120,200,5);
   pl34=new Plinko(160,200,5);
   pl35=new Plinko(200,200,5);
   pl36=new Plinko(240,200,5);
   pl37=new Plinko(280,200,5);
   pl38=new Plinko(320,200,5);
   pl39=new Plinko(360,200,5);
   pl40=new Plinko(400,200,5);


// come back tommorow and draw all the plinkos and thats it.
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  textSize(20)
  text("Score:",370,30 );
  text(score,450,30);

    


for(i=0;i<500;i++){

  
  //particle =new Particle(240,50,10);

}


/*for(i=0;i<560;i=i+80){


 

  rect(i,500,10,275);
  
  
  World.add(world,rect);
  }*/

 
division.display();
d2.display();
d3.display();
d4.display();
d5.display();
d6.display();
d7.display();
particle.display();
pl2.display();
pl3.display();
pl4.display();
pl5.display();
pl6.display();
pl7.display();
pl8.display();
pl9.display();
pl10.display();
pl11.display();
pl12.display();
pl13.display();
pl14.display();
pl15.display();
pl16.display();
pl17.display();
pl18.display();
pl19.display();
pl20.display();
pl21.display();
pl22.display();
pl23.display();
pl24.display();
pl25.display();
pl26.display();
pl27.display();
pl28.display();
pl29.display();
pl30.display();
pl31.display();
pl32.display();
pl33.display();
pl34.display();
pl35.display();
pl36.display();
pl37.display();
pl38.display();
pl39.display();
pl40.display();
ground.display();
plinko.display();
  drawSprites();
}