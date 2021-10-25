var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg, gameState = 0;

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

  createCanvas(windowWidth, windowHeight);

//background image
/*bg = createSprite(600,375);
bg.addImage(bgImg);
bg.scale = 1.9;*/

//creating top and bottom grounds
bottomGround = createSprite(600,750,2000,20);
bottomGround.visible = false;

topGround = createSprite(600,0,2000,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;





}

function draw() {
  background(bgImg);
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 0.5;

   

           balloon.collide(bottomGround);

           if(keyDown("right")){
             balloon.position.x += 3;
           }
           if(keyDown("left")){
             balloon.position.x -= 3;
           }

           if(balloon.isTouching(topGround)){
             gameState = 1;
             balloon.destroy();
           }
        drawSprites();
        
}