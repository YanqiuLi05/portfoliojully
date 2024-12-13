function setup() {
 

    let cnv = createCanvas(400, 400); 

  cnv.parent('p5-canvas-container'); 
  
  }
  
  function draw() {
    background(220);  
     fill("white");
    rect(0,220,400,180);
    fill('rgba(0,126,255,0.98)');
    rect(0,0,400,280);
      
     //the shallow
    push()
    strokeWeight (0);
    fill(0,0,0,20);
    ellipse(200,360,270,120);
    pop()
  //the first push marks the entire ring, I used the fill command to paint it yellow, the way I created the shape is by have to ellipses on top of one another, then I added rectangles on each side to cover the edges and a line on each end to compansate for the fact I had to remove the stroke of the rectangles.
   push()
    angleMode(DEGREES);
   translate(40,0);
    rotate(10);
   
    //the front of the ring
    push()
   fill(214,160,18);
   ellipse(200,220,300,150); 
  
    
  
  push()  
  strokeWeight(0); 
  rect(50,170,10,50);
    pop()
    
   push()  
  strokeWeight(0);  
  rect(340,170,10,50);
  pop()
  
    //the top of the ring
   push()
    stroke(10)
    fill("gold")
    //clip(mask, { invert: true });
     ellipse(200,170,300,150)
   // function mask() {
   // ellipse(200,220,300,150) 
      
  //}
  line(50,170,50,220)
  line(350,170,350,220)
     
     
    
    
    
    //the hollow part of the ring
    push()
    blendMode(BLEND) 
     fill(184, 134, 0)
   ellipse(200,170,250,120)
    pop()
    
    push()
    fill("rgba(0,126,255,0.98)")
    clip(mask);
    ellipse(200,220,250,120);
    function mask() {
    ellipse(200,170,250,120)
    }
    pop()
    
    //text on the ring
    push()
     blendMode(OVERLAY);
    fill(113,90,0);
    textSize(20);
    textFont(ITALIC);
    text('ONE ', 65, 250);
    text('RING ', 110, 270);
    text('TO ', 165, 280);
    text('RULE ', 200, 280);
    text('THEM ', 255, 266);
    text('ALL ',300, 245);
    pop()
    
  
  pop()
  
    
    //the shallow
   // push()
   // strokeWeight (0)
   // fill(0,0,0,20)
   // ellipse(200,360,270,120)
   //pop()
    
    //sparkle on the ring 
    push()
    fill('white');
    strokeWeight(0);
    triangle(130,210,110,250,150,250);
    triangle(110,220,130,260,152,223);
    pop()
    
  }