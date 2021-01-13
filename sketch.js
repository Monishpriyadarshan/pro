var cat,catrunning,cat;
var mouse,mouseteasing;
var background0;
function preload() {
    //load the images here
    catrunning = loadAnimation("tom.Two.png,tom.Three.png");
    mouseteasing = loadAnimation("");
    background0 = loadAnimation("")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(500,400,50,50);
    mouse = createSprite(450,350,25,25);
    background0 = createSprite(500,400,1000,1000);


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
