var l_boundry,r_boundry,t_boundry,b_boundry;
var snake_head, snake_body;
var snake_headImg, snake_bodyImg, foodImg;

var g_boundry,g_snake;
function preload(){
  snake_headImg=loadImage("Images/Snake Head.gif")
  snake_bodyImg=loadImage("Images/Snake Body.gif")
  foodImg=loadImage("Images/food.gif")
}
function setup() {
  createCanvas(800,800);
  l_boundry = createSprite(15,400,30,800)
  l_boundry.shapeColor="gray"

  r_boundry = createSprite(785,400,30,800)
  r_boundry.shapeColor="gray"

  t_boundry = createSprite(400,15,800,30)
  t_boundry.shapeColor="gray"

  b_boundry = createSprite(400,785,800,30)
  b_boundry.shapeColor="gray"
  
  g_boundry=new Group()
  g_boundry.add(l_boundry);
  g_boundry.add(r_boundry);
  g_boundry.add(t_boundry);
  g_boundry.add(b_boundry);


  snake_head=createSprite(400,400,20,20)
  snake_head.addImage(snake_headImg)
  snake_head.scale=0.13
  snake_head.rotate=90
  snake_head.rotationSpeed=1
  
  snake_body=createSprite(360,400,20,20)
  snake_body.addImage(snake_bodyImg)
  snake_body.scale=0.13

  g_snake = new Group()
  g_snake.add(snake_head)
  g_snake.add(snake_body)
}

function draw() {
  background("black");  
  g_snake.collide(g_boundry)
  if (keyDown("SPACE")) {
    g_snake.setVelocityXEach(3)

  }

  if (keyDown("RIGHT_ARROW")) {
    g_snake.setVelocityXEach(3)
    g_snake.setVelocityYEach(0)
  }

  if (keyDown("LEFT_ARROW")) {
    g_snake.setVelocityXEach(-3)
    g_snake.setVelocityYEach(0)
  }

  if (keyDown("UP_ARROW")) {
    g_snake.setVelocityYEach(-3)
    g_snake.setVelocityXEach(0)
  }

  if (keyDown("DOWN_ARROW")) {
    g_snake.setVelocityYEach(3)
    g_snake.setVelocityXEach(0)
  }
  drawSprites();
}