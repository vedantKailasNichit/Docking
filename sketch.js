var capsule, iss;// sprites
var backdrop, capsuleImg1, capsuleImg2, capsuleImg3, capsuleImg4, issImg;//images var

function preload(){
  backdrop = loadImage('/images/spacebg.jpg');
  capsuleImg1 = loadImage('/images/normal.png')
  capsuleImg2 = loadImage('/images/rightbost.png')
  capsuleImg3 = loadImage('/images/leftbost.png')
  capsuleImg4 = loadImage('/images/bothbost.png')
  issImg = loadImage('/images/iss.png')

}

function setup() {
  createCanvas(939, 615);

  capsule = new Capsule(500,515,100,5)
  iss = new ISS(400,200,800);

}

function draw() {
  background(backdrop);  

  if(capsule.x < 314 || capsule.x > 320 || capsule.y > 281 || capsule.y < 278){
  }else{
    textSize(50)
    text('Docking Successful!', 300, 530)
  }
  capsule.show();
  iss.show();
  drawSprites();
}


