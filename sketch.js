
var monkey , monkey_running , invisibleGround ;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime = 0 ;
var gameState = 1;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocitiy =-10;
  if(ground.x<0){
       ground.x = ground.width/2;
     }



  
}


function draw() {
background("white"); 
 
   
   if(keyDown("space")&& monkey.y>=314.3){
     monkey.velocityY = -15;
     }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  food();
  obstacles();
 // console.log(monkey.y)
  
 // if(monkey.isTouching(banana)){
  //  banana.destroy();
  //score = score + 1;
  //  textSize(20);
   // text("score"+score,150,50);
  //}
  
  textSize(20);
  survivalTime = Math.round(frameCount/frameRate());
  text("survival Time:" + survivalTime,100,50);

  drawSprites();
}

function food(){
  
  if(frameCount % 80 === 0) {
    var banana = createSprite(300,220,10,10);
    banana.y = Math.round(random(150,230));
    banana.velocityX = -5;
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1; 
    banana.lifetime = 80;
  }
}

function obstacles(){
     if(frameCount % 160 === 0){ 
  var obstacle = createSprite(350,340,10,40);
  obstacle.addImage( obstaceImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -5;
       obstacle.lifetime = 80;
}
  
  
}



