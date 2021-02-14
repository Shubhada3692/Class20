var fixedRect, movingRect;

function setup(){
  createCanvas(600,600);

  fixedRect = createSprite(300,300,100,50);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(0,0,50,100);
  movingRect.shapeColor = "red";
}

function draw(){
  background("lightblue");

  movingRect.y = mouseY;
  movingRect.x = mouseX;

  isTouching();

  drawSprites();
}

function isTouching(){
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green"
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
}