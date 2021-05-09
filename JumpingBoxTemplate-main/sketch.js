var canvas;
var music;
var s1, s2, s3, s4;
var box;
var background
var topEdge,bottomEdge
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(630,600);
 
    s1 = createSprite(70,535,150,20)
 s1.shapeColor = "red";
 s2 = createSprite(230,535,150,20) 
 s2.shapeColor = "pink";
 s3 = createSprite(390,535,150,20)
 s3.shapeColor = "blue";
 s4 = createSprite(550,535,150,20)  
 s4.shapeColor = "orange";

 //create box sprite and give velocity
 box = createSprite(300,300,25,25)
 box.shapeColor = "white";
 box.velocityX = 5;
 box.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
     
    //create edgeSprite
    // array= a var which can store multiple values;
   edges = createEdgeSprites()
    box.bounceOff(edges);
   
    

    //add condition to check if box touching surface and make it box
if(s1.isTouching(box)&& box.bounceOff(s1)){
    box.shapeColor = "red";
    music.play();
}
if(s2.isTouching(box)){
    box.shapeColor = "pink"
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
}
if(s3.isTouching(box)&& box.bounceOff(s3)){
    box.shapeColor = "blue";
}
if(s4.isTouching(box)&& box.bounceOff(s4)){
    box.shapeColor = "orange";
}
    drawSprites()
}



