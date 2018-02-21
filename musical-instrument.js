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

var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;

function setup() {
  createCanvas(400, 400)
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  freq = random(100,300);
  playing = false

  
  osc = new p5.Oscillator();
  osc.setType('triangle');
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
  background(255,255,255);
  ellipse(mouseX,mouseY,10)
	
  push();
	stroke(1);
	strokeWeight(2);
	line(0,20,20,0);
	strokeWeight(1);
	line(0,46,46,0);
	line(0,62,62,0);
	line(0,94,94,0);
	line(0,130,130,0);
	line(0,149,149,0);
	line(0,192,192,0);
	strokeWeight(2);
	line(0,240,240,0);
	strokeWeight(1);
	line(0,294,294,0);
	line(0,323,323,0);
	line(0,387,387,0);
	line(0,459,459,0);
	line(0,498,498,0);
	line(0,584,584,0);
	strokeWeight(2);
	line(0,680,680,0);
	strokeWeight(1);
	
	pop();
	
	
  text('click here,\nthen press keys\n and move mouse \nto play', width / 2, 200);
  text('Low',15, 10);
  text('High',width-15, height-5);
  
  // pressing the mouse while playing creates bubbles
  if (playing) {
    ellipse(mouseX,mouseY,10+random(0,freq/10));
    
    if (mouseIsPressed){
      background(120, 0, 120);
  		ellipse(xPos, yPos, diameter);
    	xPos = xPos+random(-1,1);
    	yPos = yPos-4;
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
   if (playingA) {
    background(0, 0, 255, 25);
		push();
		stroke(255);
		line(0,20,20,0);
		pop();
    fill(random(100, 255), 100, 100);
    ellipse(random(width), random(height), 10);
   }
   else if (playingS) {
    background(0, 255, 0, 25);
		 push();
		stroke(255);
		line(0,20,20,0);
		pop();
    fill(100, random(50, 255), 100);
    ellipse(random(width), random(height), 10);
   }
  else if (playingD) {
    background(255, 0, 0, 25);
		push();
		stroke(255);
		line(0,20,20,0);
		pop();
    fill(10, random(100, 250), 255);
    ellipse(random(width), random(height), 10);
   }
  else if (playingF) {
    background(10, 255, 200, 25);
		push();
		stroke(255);
		line(0,20,20,0);
		pop();
    fill(random(1,100), 100, 100);
    ellipse(random(width), random(height), 10);
   }
}

//Changed this so that the frequency is based on the location of the mouse
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
      osc.setType('saw');
    }
    else if (key == 'R') {
      osc.setType('triangle');
    }

    if (key == 'A') {
      freq = (mouseX + mouseY+200)/2;
      playingA = true;
    }
    if (key == 'S') {
     freq = (mouseX + mouseY+200);
      playingS = true;
    }
    if (key == 'D') {
      freq = (mouseX + mouseY+200)*2;
      playingD = true;
    }
    if (key == 'F') {
      freq = (mouseX + mouseY+200)*4;
      playingF = true;
    }
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
    playingA = false;
  } else if (key == 'S') {
    osc.amp(0.0, 0.5);
    playing = false;
    playingS = false;
  } else if (key == 'D') {
    osc.amp(0.0, 0.5);
    playing = false;
    playingD = false;
  } else if (key == 'F') {
    osc.amp(0.0, 0.5);
    playing = false;
    playingF = false;
  }
}
