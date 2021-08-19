//var engine, world;
var player, playerImg

var npc1, npc1Img;
var npc2, npc2Img;
var npc3, npc3Img;
var npc4, npc4Img;

var line1, line2;

var score, boost, lives;

var startButton, startButtonImg;

var car2, car2Img;

var backgroundImg;
var divider;
var gameState = "start";
function preload() {
    backgroundImg = loadImage("images/road.jpeg");

    npc1Img = loadImage("images/barrier.png");
    npc2Img = loadImage("images/OilBarrel.png");
    npc3Img = loadImage("images/trafficCone.png");
    npc4Img = loadImage("images/trash.png");
    
    car1Img = loadImage("images/PlayerCar.png");
    car2Img = loadImage("images/redcar.png")

    startButtonImg = loadImage("images/start.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    player = createSprite(width/2,650);
    player.addImage(car1Img);
    player.scale = 0.4;
    player.visible = false;

    startButton = createSprite(width/1.87, height/1.23,20,20);
    startButton.addImage(startButtonImg);
    startButton.scale = 0.17;
    //engine = Engine.create();
    //world = engine.world;

    

    
}

function draw(){
    background(backgroundImg);
    if(gameState === "start"){

      background(0);
  
      strokeWeight(2);
      stroke("0");
      fill("#00cec9");
      textSize(30);
      text("Hello! Welcome to the Infinite Racing Game. Race for as long as you can!", width/7,height/4);
  
      strokeWeight(2);
      stroke("0");
      fill("yellow");
      textSize(30);
      text("Press right and left arrow key to move in the game.", width/3.243,height/3.2);
      text("You can see your lives on the top right corner.", width/3.1,height/2.7);
      text("Be safe from the obstacles. If you touch them, the number of lives you have will decrease",width/22,height/2.32);
      
      text("You will get to see your distance covered increasing on the top left corner when you play the game.", width/12,height/1.77)
  
      fill("#00cec9")
      text("Good luck!", width/2.07, height/1.43);

      if(mousePressedOver(startButton)){
        gameState = "play";
        startButton.destroy();
        player.visible = true;
      }
    }
    if (gameState === "select"){

    }


    //Engine.update(engine);

    if (frameCount % 40 === 0 && gameState === "play") {
      line1 = createSprite(displayWidth/2-230, 0, 10, 60);
      line1.velocityY = 4;
      line1.lifetime = 250;
      line1.shapeColor = "yellow";
      
      player.depth = line1.depth;
      player.depth = player.depth + 1;
      
      line2 = createSprite(displayWidth/2+230, 0, 10, 60);
      line2.velocityY = 4;
      line2.lifetime = 250;
      line2.shapeColor = "yellow";
      
      player.depth = line2.depth;
      
    }
     drawSprites();
}


