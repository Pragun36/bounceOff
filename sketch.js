var fixedRect, movingRect, rect1, rect2;
var rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 30, 30);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400, 800,30,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  rect1 = createSprite(1100,400,30,30);
  rect1.shapeColor = "green";
  rect2 = createSprite(100,400,30,30);
  rect2.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
rect1.velocityX = -5;
rect2.velocityX = 5;

}

function draw() {
  background(0,0,0);  
  bounceOff(rect1,rect2);




  drawSprites();
}

