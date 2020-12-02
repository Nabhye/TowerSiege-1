var a;
var circles=[];

var ground, op;
var box1,box2,box3,box4;

function setup() {
createCanvas(800,800);
stroke(255)
  
  ground = new Ground(600,230,1200,20);
  box1=new Box(330,235,30,40);
  box2=new Box(360,235,30,40);
 
  a=height;
  circles.push(width/2)
}

function draw() {

  ground.display();
  box1.display();
  box2.display();

  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  
  a=a-1;
  
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 
