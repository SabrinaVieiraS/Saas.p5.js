let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {

  createCanvas(800, 1200);
  background("purple");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal= 200;
  posicaoVertical= 100;
}

function draw() {
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal - 1;
  }
    
     if(mouseX > posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal + 1;
  }
  if(mouseY < posicaoVertical)
  {
    posicaoVertical--;
}
 
    if(mouseY > posicaoVertical)
  {
    posicaoVertical++;
  }
  }
 
