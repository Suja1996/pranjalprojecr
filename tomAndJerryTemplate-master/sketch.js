
var cat,catRunning,park,parkImage,cat,
jerry,jerryAnimation


function preload() {
catAnimation=loadAnimation("images/cat1.png");
parkImage=loadImage("images/garden.png");
catAnimation=loadAnimation("images/cat2.png","images/cat3.png"); 
catImage = loadAnimation("images/cat4.png")
jerryAnimation=loadAnimation("images/mouse1.png")
jerryAnimation=loadAnimation("images/mouse2.png","images/mouse3.png")
jerryImage=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(700,400);
  
    cat=createSprite(600,320,10,10) 
    cat.addAnimation("catsleeping",catAnimation)
    cat.addAnimation("running",catAnimation)
    cat.scale=0.1
    
    jerry=createSprite(100,300,10,10) 
    jerry.addAnimation("jerryhappy",jerryAnimation)
    jerry.addAnimation("jerryteasing",jerryAnimation)
    jerry.scale=0.1
    
    cat=createSprite(600,320,10,10)
    cat.addAnimation("catLastImage",catImage) 
    cat.scale=0.1

    jerry=createSprite(100,300,10,10)
    jerry.addAnimation("jerryLastImage",jerryImage)
    jerry.scale=0.1 

}

function draw() {

 background(parkImage);
    
 if(cat.x - jerry.x < (cat.width - jerry.width/2)){
    cat.velocityX=0 
    cat.addAnimation("catLastImage",catImage)
    cat.changeAnimation("catLastImage")

    jerry.velocityX=0
    jerry.addAnimation("jerryLastImage",jerryImage)
    jerry.changeAnimation("jerryLastImage")


 }

    drawSprites();
    
}


function keyPressed(){
  
 if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("running",cat2Animation);
    cat.changeAnimation("running")
 }
  
 if(keyCode === LEFT_ARROW){
    //jerry1.velocityX = -5;
    jerry.addAnimation("jerryteasing",jerryAnimation);
    jerry.changeAnimation("jerryteasing")
 }

}

