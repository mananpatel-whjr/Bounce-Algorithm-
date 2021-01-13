var fixedRect , movingRect


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(100,100,50,50);
  movingRect=createSprite(100,300,20,40);
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="red";
  fixedRect.velocityY=2;
  movingRect.velocityY=-2;
}

function draw() {
  background(255,255,255);  
  
  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2) {
      fixedRect.velocityX=fixedRect.velocityX*-1;
      movingRect.velocityX=movingRect.velocityX*-1;
    }
    if 
    (movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2) {
      fixedRect.velocityY=fixedRect.velocityY*-1;
      movingRect.velocityY=movingRect.velocityY*-1;
    }
  drawSprites();
}