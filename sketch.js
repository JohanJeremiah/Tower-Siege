const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload()
{
	polygon_img=loadImage("polygon.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    
    main_ground= new Ground(700,650,1600,25)
    highground_1 = new Ground(300,500,250,10)
    highground_2 = new Ground(600,400,200,10)

   
    block1 = new Block(280,490,30,40)
    block2 = new Block(250,490,30,40)
    block3 = new Block(220,490,30,40)
    block4 = new Block(190,490,30,40)
    block5 = new Block(310,490,30,40)
    block6 = new Block(340,490,30,40)
    block7 = new Block(370,490,30,40)
    block8 = new Block(400,490,30,40)
    
    block9 = new Block(230,450,30,40)
    block10 = new Block(260,450,30,40)
    block11= new Block(290,450,30,40)
    block12 = new Block(320,450,30,40)
    block13 = new Block(350,450,30,40)
    block14 = new Block(380,450,30,40)
    
    block15 = new Block(240,410,30,40)
    block16 = new Block(270,410,30,40)
    block17 = new Block(300,410,30,40)
    block18 = new Block(330,410,30,40)
    block19 = new Block(360,410,30,40)

    block20 = new Block(250,370,30,40)
    block21 = new Block(280,370,30,40)
    block22 = new Block(310,370,30,40)

    
    block1_2 = new Block(690,390,30,40)
    block2_2 = new Block(570,390,30,40)
    block3_2 = new Block(540,390,30,40)
    block4_2 = new Block(520,390,30,40)
    block5_2 = new Block(600,390,30,40)
    block6_2 = new Block(630,390,30,40)
    block7_2 = new Block(660,390,30,40)

    block8_2 = new Block(550,350,30,40)
    block9_2 = new Block(580,350,30,40)
    block10_2 = new Block(610,350,30,40)
    block11_2 = new Block(640,350,30,40)
    block12_2 = new Block(670,350,30,40)

    block13_2 = new Block(560,310,30,40)
    block14_2 = new Block(590,310,30,40)
    block15_2 = new Block(620,310,30,40)
    block16_2 = new Block(650,310,30,40)

    block17_2 = new Block(570,270,30,40)
    block18_2 = new Block(600,270,30,40)
    
    
    
   this.polygon = Bodies.circle(50,200,20)
   World.add(world,this.polygon)

    Slingshot = new slingShot(this.polygon,{x:100,y:200})

    
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("cyan");
  
  stroke("black")
  textSize(20)
  text("Release your mouse and hit as many blocks as possible", 200,50);
  text("Enjoy :-))",200,100)
  
  
  drawSprites();

  main_ground.display()
  highground_1.display()
  highground_2.display()

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()


  block1_2.display()
  block2_2.display()
  block3_2.display()
  block4_2.display()
  block5_2.display()
  block6_2.display()
  block7_2.display()
  block8_2.display()
  block9_2.display()
  block10_2.display()
  block11_2.display()
  block12_2.display()
  block13_2.display()
  block14_2.display()
  block15_2.display()
  block16_2.display()
  block17_2.display()
  block18_2.display()
  

  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  Slingshot.display()

  function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    Slingshot.fly()
}


}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    Slingshot.fly()
}