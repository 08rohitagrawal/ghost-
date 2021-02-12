var ghost, ghostImg;
var tower, towerImg;

var door, doorImg;
var climber, climberImg;
var block;

var invisibleGround;

var doorsGroup, climbersGroup, blockGroup;

var gameState = "play";
var speed = 4;


function preload(){
  
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  
  spookySound = loadSound("spooky.wav");
 
}


function setup(){
  createCanvas(500,500);
  
  //spookySound.loop();
  
  tower = createSprite(250,300);
  
  
  ghost = createSprite(300,430,50,50);
  addImage
  
  
  invisibleGround = createSprite(250,480,380,1);
  
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  blockGroup = new Group();
  
  //console.log(tower.height/2);
  
}// ------------end of setup -------------------

function draw(){
  background(0);
  
  if (gameState === "play") {
    
    // infinite group
    
    
    //left and right movement to ghost
    
    
    // make the ghost jump using gravity
    
    
    // ghost is touching climbersGroup
    
    
    // ghost is touching blockGroup
    
     

    
  }else if(gameState === "end"){
    
    // what should appear
    
    
    // what should disappear
    
    
    
  }
  
  ghost.collide(invisibleGround);
  drawSprites();
  
}// -----------------end of draw --------------------------


function spawnDoors() {
  
  if (frameCount % 100 === 0) {
    var rand = Math.round(random(120,400));
    
    var door = createSprite(rand, -50);
    var climber = createSprite(rand, door.y+door.height/2);
    var block = createSprite(rand, climber.y+15);
    
    
    
    // add velocities
    
    
    // add lifetime
    
    
    // add sprites to different groups
    
    
    
    
  }
}


