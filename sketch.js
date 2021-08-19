var issImage,spacecraftimg,bgImg,bg
var spacecraft2,spacecraftl,spacecraftr
var hasDocked = false


function preload (){
issImage = loadImage("images/iss.png");
spacecraftimg = loadImage("images/spacecraft1.png");
spacecraft2 = loadImage("images/spacecraft2.png");
spacecraftl = loadImage("images/spacecraft3.png");
spacecraftr = loadImage("images/spacecraft4.png");
bg = loadImage("images/spacebg.jpg");

}

function setup() {
  createCanvas(1400,700);
 
  
  bgImg = createSprite()
  bgImg.addImage("images/spacebg.jpg",bg);
  bgImg.scale = 5

   spacecraft = createSprite(500,650);

  iss = createSprite(700,200);
  iss.addImage("issImage",issImage);
  iss.scale=0.7;
}

function draw() {
  background(rgb(47, 51, 59));  
  
  spacecraft.addImage("spacecraftimg",spacecraftimg);
  spacecraft.scale=0.2;
 

  if(keyDown("w")||keyDown("UP_ARROW")) {
    spacecraft.y = spacecraft.y-2;
    spacecraft.addImage("spacecraftimg",spacecraft2);
    spacecraft.scale=0.18;
  }
  if(keyDown("s")||keyDown("DOWN_ARROW")) {
    spacecraft.y = spacecraft.y+2;
  }
  if(keyDown("a")||keyDown("left_ARROW")) {
    spacecraft.x = spacecraft.x-2;
    spacecraft.addImage("spacecraftimg",spacecraftl);
    spacecraft.scale=0.18;
  }
  if(keyDown("d")||keyDown("right_ARROW")) {
    spacecraft.x = spacecraft.x+2;
    spacecraft.addImage("spacecraftimg",spacecraftr);
    spacecraft.scale=0.18;
  }
drawSprites();

if(spacecraft.x>645 && spacecraft.x<655 && spacecraft.y>250 && spacecraft.y<269){
hasDocked = true 
fill(255,255,255); 
textSize(30);

text("spacecraft has docked",700,300);

}
  

  textSize(20);
  fill(255,255,255); 
  text(spacecraft.x + " X",300,50)
  text(spacecraft.y + " Y",380,50)
}




