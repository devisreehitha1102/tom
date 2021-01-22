var tom,tomOneImg,tomWalking;
var jerry,jerryImg;
var garden,gardenImg; 

function preload() {
    //load the images here
    tomImg=loadImage("tomOne.png");
    tomWalking=loadAnimation("tomTwo.png","tomThree.png");
    tomSitting=loadImage("tomFour.png");

    jerryteasingImg=loadAnimation("jerryTwo.png","jerryThree.png");
    gardenImg=loadImg("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom= createSprite(350,300,50,50);
    tom.addAnimation(tomImg);

    jerry= createSprite(50,300,50,590);
    jerry.addAnimation(jerryImg);

    garden=createSprite(500,400,1000,800);
    garden.addImage(gardenImg);
}

function draw() {

    background(5);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<jerry.width/2+tom.width/2
       &&jerry.x-tom.x<jerry.width/2+tom.width/2
       &&tom.y-jerry.y<jeryy.height/2+tom.height/2
       &&jerry.y-tom.y<jerry.height/2+tom.height/2){


    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityv=x=-5;
      tom.addAnimation("tomRunning",tomWalkingImg);
  }

}
