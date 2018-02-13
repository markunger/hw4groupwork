var freq

var osc
var oscA, oscS, oscD, oscF;
var playing
var colorCounter1 = 0;
var colorCounter2 = 0;
var colorCounter3 = 0;
var xPos = 100/2;
var yPos = 100;
var diameter = 5;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  freq = random(100,300);
  playing = false

  

  
  osc = new p5.Oscillator();
  osc.setType('saw');
  osc.freq(freq);
  osc.amp(0);
  osc.start();
}
function draw() {
  //mouse tracker with color changes
  fill(colorCounter1,colorCounter2,colorCounter3)
  colorCounter1 = colorCounter1+1;
  if (colorCounter1 >= 255) {
    colorCounter1 = 0;
  }
  colorCounter2 = colorCounter2+3;
  if (colorCounter2 >= 255) {
    colorCounter2 = 0;
  }
  colorCounter3 = colorCounter3+5;
  if (colorCounter3 >= 255) {
    colorCounter3 = 0;
  }
  background(51,255,51);
  ellipse(mouseX,mouseY,10)
  
  // we should probably remove the text
  text('click here,\nthen press keys\n and move mouse \nto play', width / 2, 30);
  text('Low',15, 10);
  text('High',width-15, height-5);
  
  // pressing the mouse while playing creates bubbles
  if (playing) {
    ellipse(mouseX,mouseY,10+random(0,freq/10));
    
    if (mouseIsPressed){
      background(120, 0, 120);
  		ellipse(xPos, yPos, diameter);
    	xPos = xPos+random(-1,1);
    	yPos = yPos-2;
    	print(yPos)
  		osc.amp(0.5,0.1);
   		diameter = diameter+1;
    	if (yPos<0){
      	yPos = mouseY;
      	diameter = 5;
        xPos = mouseX;
    	}
    }
  }
}

function keyPressed() {
  if (keyIsPressed){
    print("got key press for ", key);
    if (key == 'W') {
      osc.setType('square');
    }
    else if (key == 'Q') {
      osc.setType('sine');
    }
    else if (key == 'E') {
      osc.setType('sawtooth');
    }
    else if (key == 'R') {
      osc.setType('triangle');
    }
    freq = mouseX+mouseY+100;
    osc.freq(freq);
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  if (key == 'A') {
    osc.amp(0.0, 0.5);
    playing = false;
  } else if (key == 'S') {
    osc.amp(0.0, 0.5);
    playing = false;
  } else if (key == 'D') {
    osc.amp(0.0, 0.5);
    playing = false;
  } else if (key == 'F') {
    osc.amp(0.0, 0.5);
    playing = false;
  }
}
