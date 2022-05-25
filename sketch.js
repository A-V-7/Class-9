


function setup() {
  createCanvas(800,740);
  player = createSprite(400,200,50,50);
  player.shapeColor = "grey";

}

function draw() {
  
  
  
   

  if(keyIsDown(RIGHT_ARROW)){
     player.x += 5;
     player.shapeColor = "green";
     background("blue");
  }

  if(keyDown("left")){
    player.x -=5
    player.shapeColor = "white";
    background("yellow");
  }

  if(keyDown("up")){
    player.y -= 5;
    player.shapeColor = "red";
    background("orange");
  }

  if(keyDown("down")){
    player.y +=5;
    player.shapeColor = "yellow";
    background("green");
  }
  
 
  drawSprites();
}



