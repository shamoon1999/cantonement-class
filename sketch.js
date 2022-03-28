var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);

  tower.velocityY = 1;
  ghost = createSprite(300,300);
  ghost.addImage("jumping",ghostImg);
  ghost.scale = 0.4;
  doorsGroup = new Group();
  invisibleBlockGroup = new Group ();
  climbersGroup = new Group ();
  //spookySound.loop();//
}

function draw() {
  background(200);
  if (gameState === "play") {
    if(tower.y > 400){
      tower.y = 300
    }
    if (keyDown("space")){
      ghost.velocityY = -10;
 }
 ghost.velocityY = ghost.velocityY + 0.77
 if (keyDown("LEFT_ARROW")){
 ghost.x = ghost.x -2;
 

 }
 if (keyDown("RIGHT_ARROW")){
   ghost.x = ghost.x + 2;
 }
 spawndoors ();
 if (ghost.isTouching(climbersGroup)){
 ghost.velocityY = 0;
 

 }
 if (ghost.isTouching(invisibleBlockGroup)|| ghost.y > 600){
 gameState = "end";
 
 }
 
    drawSprites ()
  }
  else if (gameState === "end") {
  textSize(35);
  fill ("white");
  text ("GAME OVER",200,240);
  spookySound.stop ();
  }
  
}
 function spawndoors(){
 if (frameCount%200 === 0){
 var door = createSprite(200,-50)
 door.addImage("door",doorImg);
 door.velocityY = 1;
 var climber = createSprite(200,10)
 climber.addImage("climber",climberImg);
 climber.velocityY = 1;   
 var invisibleBlock = createSprite(200,15);
 invisibleBlock.visible = false;
 invisibleBlock.width = climber.width;
 invisibleBlock.height = 2;
 invisibleBlock.velocityY = 1;
 door.x = Math.round(random(120,400));
 climber.x = door.x;
 invisibleBlock.x = door.x;
 doorsGroup.add(door);
 climbersGroup.add(climber);
 invisibleBlockGroup.add(invisibleBlock);


 }



 }
