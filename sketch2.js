//move your mouse around and click
let x=0;
let y=0;
let M=0;
let N=0;
let o=0;
let p=0;
function setup() {
 
  let cnv = createCanvas(400, 400);
  cnv.parent('p5-project2-canvas-container'); 
}

function draw() {
 
  background("black");
  
  push()
  rectMode(CENTER); 
 
 let rect1 = dist(mouseX, mouseY, width / 2, height / 2) * 2;//distance of the mouse from canvas center  
  rect1 = constrain(rect1, 40, 350);
  
    if (rect1 > 200) { 
    fill(255, 200-mouseX+o, 200-mouseY+p,); 
  } else {
    fill("white");
  }//color changes
  
rect(width / 2, height / 2, rect1+x, rect1+y,30);
 

 pop()//the biggest square
  
  
push()
  fill("black")
 push()
  //translate(200,200)
  rectMode(CENTER)
  let centerX = width / 2; 
  let centerY = height / 2; 
  let distance = dist(mouseX, mouseY, centerX, centerY);
  
  let W1 = constrain(1 + distance, 0, 20); 
  let H1 = constrain(6 + distance, 0, 120); 
  rect(130, 180, W1+x, H1+y);//left eye


  rect(270,180, W1+x,H1+y);//right eye
  
  
  let centerX2 = width / 2; 
  let centerY2 = height / 2; 
  let distance2 = dist(mouseX, mouseY, centerX2, centerY2);

  let W2 = constrain(10 + distance , 10, 50); 
  let H2 = constrain(20 + distance , 10, 100); 

  push();
  translate(200, 300); 
  rotate(radians(180)); 
  arc(0, 0, W2+x, H2+y, 0, PI, CHORD); 
  pop();//mouse

pop()
pop()//eyes and mouth

}
function mouseMoved() {
  if (mouseX > 200) {
    x = random(1, 20);
  }
  if (mouseY > 200) {
    y = random(1, 20);
  }
}//shaking
function mousePressed(){
      o=random(100,225)
  p=random(100,225)
  }//color changes when clicking

