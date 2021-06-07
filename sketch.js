var bgImg, cat, catImg1, catImg2, catImg3, mouse, mouseImg1, mouseImg2, mouseImg3, TOM, JERRY, canvas;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
     canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
    TOM = createSprite(870, 600);
    TOM.addAnimantion("TOMSleeping", catImg1);
    TOM.scale = 0.2;
    JERRY = createSprite(200,600);
    JERRY.addAnimantion("JERRYStanding", mouseImg1);
    JERRY.scale = 0.15;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width) /2 ){
TOM.velocityX = 0
TOM.addAnimantion("TOMLastImage, catImg3");
TOM.x = 300;
TOM.scale = 0.2
TOM.changeAnimation("TOMLastImage");

JERRY.addAnimantion("JERRYLastImage, mouseImg3");
JERRY.scale = 0.15;
JERRY.changeAnimation("JERRYLastImage");


}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
TOM.velocityX = -5
TOM.addAnimantion("mouseTeasing", mouseImg2);
TOM.changeAnimation("mouseTeasing");

JERRY.addAnimantion("catRunning", catImg2);
JERRY.frameDelay = 25;
JERRY.changeAnimation("catRunning");

}

}
