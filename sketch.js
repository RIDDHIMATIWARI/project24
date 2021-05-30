var car1 ,car2, car3,wall;
var speed1, speed2, speed3, speed4, weight;
var img1, img2, img3, img4, wimg;
var c1red, c1yellow, c1green;
var c2red, c2yello, c2green;
var c3red, c3yellow, c3green;
var c4red, c4yellow, c4green;
var b1, b2, b3, b4;
var deformation1, deformation2, deformation3, deformation4;
var aud1, aud2, aud3;

function preload();
img1 = loadImage("audi(1).png");
img2 = loadImage("lambo.png");
img3 = loadImage("innova(1)png");
img4 = loadImage("nano.png");
c1red = loadImage("audi(red).png");
c1yellow = loadImage("audi(yellow).png");
c1green = loadImage("audi(green).png");
c2red = loadImage("lambo(red).png");
c2yellow = loadImage("lambo(yellow).png")
c2green = loadImage("lambo(green).png");
c3red = loadImage("nano(red).png.png");
c3yellow = loadImage("nano(yellow).png");
c3green = loadImage("nano(green).png");
c4red = loadImage("innova(red).png");
c4yellow = loadImage("innova(yellow).png");
c4green = loadImage("innova(green).png");
wImg = laodImage("wall2.png");

function setup() {
  createCanvas(800,400);
  audi1 = laodSound("greater than 180 .mp3");
  audi1 = laodSound("between 100 & 180.mp3");
  audi1 = laodSound("less than 100 .mp3");
  speed1 = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  speed4 = random(55,90);
  weight = random(400,1500); 
  car1 = createSprite(140,50,200,20);
  car1.addImage(img1);
  car1.Scale = 0.3;
  car1.velocity = 0; 
  car2 = createSprite(140,50,200,20);
  car2.addImage(img1);
  car2.Scale = 0.3;
  car2.velocity = 0; 
  car3 = createSprite(140,50,200,20);
  car3.addImage(img1);
  car3.Scale = 0.3;
  car3.velocity = 0; 
  car = createSprite(140,50,200,20);
  car4.addImage(img1);
  car4.Scale = 0.3;
  car4.velocity = 0; 
  
  
  
  
  
  
  
  
  
  
  
  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}