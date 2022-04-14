let angulo;
let ancho = 40;
let vertices = [];
let relievebordes=10;
let largoterminales = 50;
let nv =0;
let params;
var img;
//let urlimg = 'assets/uis_remake_128.png';
let urlimg = 'assets/uis_remake_bl_256.png';
let lafont;


function preload() {
  lafont = loadFont('assets/Anton-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  img = loadImage(urlimg); 
  angulo = random(2*PI);
 
  vertices.push(createVector(-100,-80));
  vertices.push(createVector(-100, 80));
  vertices.push(createVector( 100,  0));
  nv = vertices.length;
  background(200);
  image(img,100,0);
}

function draw() {
  background(255,0);
  scale(min(windowWidth/646,windowHeight/200));
  //Texto Izquierda
  push();
    fill(0);
    translate(-300,0,-130);
    textFont(lafont);
    textSize(50);
    textAlign('center','center');
    text("Técnicas \nDigitales y \nAnalógicas",0,0);
  pop();
  
  // Caja Derecha
  push();
    translate(240,0,-130);
    texture(img);
    beginShape();
      vertex(-180, -90, 0, 0, 0);
      vertex(-180,  90, 0, 0, 1);
      vertex( 180,  90, 0, 1, 1);
      vertex( 180, -90, 0, 1, 0);
    endShape(CLOSE);
  pop();
  // Rotación de la camara
  fill(100,200,0);
  stroke(0);
  strokeWeight(4);
  translate(-50,0,-150);
  rotateX(angulo);
  rotateY(angulo * 0.7);
  rotateZ(angulo * 1.1);
  //tapas
  for(var i=-1;i<2;i=i+2) {
    beginShape();
      for(var k=0;k<nv;k++) {
        vertex(vertices[k].x,vertices[k].y , i*ancho/2);
      }
    endShape(CLOSE);
  }
  
  fill(50);  noStroke();
  // Mas y menos
  push(); translate(-70, 30,0); box(30,10,ancho+2*relievebordes); pop();
  push(); translate(-70, 30,0); box(10,30,ancho+2*relievebordes); pop();
  push(); translate(-70,-30,0); box(30,10,ancho+2*relievebordes); pop();
  // Terminales
  push(); translate(-100-largoterminales/2,-30,0);
          box(largoterminales,10,2*relievebordes); pop();
  push(); translate(-100-largoterminales/2, 30,0);
          box(largoterminales,10,2*relievebordes); pop();
  push(); translate(  90+largoterminales/2,  0,0);
          box(largoterminales,10,2*relievebordes); pop();

  // Laterales
  fill(100,200,0);
  stroke(0);
  strokeWeight(4);
  for(var k=0;k<nv;k++) {
    beginShape();
      vertex(vertices[k       ].x,vertices[k       ].y , ancho/2);
      vertex(vertices[k       ].x,vertices[k       ].y ,-ancho/2);
      vertex(vertices[(k+1)%nv].x,vertices[(k+1)%nv].y ,-ancho/2);
      vertex(vertices[(k+1)%nv].x,vertices[(k+1)%nv].y , ancho/2);
    endShape(CLOSE);
  }
  angulo += PI / 600;
}