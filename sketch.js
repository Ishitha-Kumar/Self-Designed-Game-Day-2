var chef;
var chefimage;
var bgimage;
var in2;
var in1;
function preload()
{
  chefimage=loadImage("Sprites/Chef2.png");
  bgimage=loadImage("Sprites/BG.jpg");
  ingredient1_img=loadImage("Sprites/ingredient1.png");
}





function setup() {
  createCanvas(displayWidth-75,displayHeight-125);
  chef=createSprite(400, 200, 50, 50);
  in1=createSprite(450,250,50,50);
  chef.addImage("chefimage",chefimage);
  chef.scale=0.7;
  chef.shapeColor="red";
  in1.shapeColor="red";

}

function draw() {
  background(bgimage);
  
  if(keyDown("RIGHT_ARROW"))
  {
    chef.velocityY= 0;
    chef.velocityX= 5;
  }
  if(keyDown("LEFT_ARROW"))
  {
    chef.velocityY= 0;
    chef.velocityX= -5;
  }
  console.log(chef.y);
  camera.position.x=displayWidth/2;
 // camera.position.y=chef.y;
  spawnIngredients();
  drawSprites();
}
function spawnIngredients()
{
  if(frameCount%200===0)
  {
    var rand=random(100,2000)
    in2 =createSprite(rand,-500,40,40);
    in2.velocityY=2;
    var r=random(1,9);
    switch(r)
    {
      case 1:in2.addImage(ingredient1_img);
      break;
      case 2:in2.addImage(ingredient2_img);
      break;
    }
  }
}