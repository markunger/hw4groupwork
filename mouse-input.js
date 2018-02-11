var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;
var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;

var oscA, oscS, oscD, oscF;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  if (playingA) {
    background(0, 255, 255);
    if (mouseIsPressed){
      rect(random(width), random(height), random(width), random(height))
    }}else if (playingS){
    background(120, 0, 120);
      if (mouseIsPressed){
      rect(random(width), random(height), random(width), random(height))
    }}else if (playingD){
    background(0, 120, 50);
      if (mouseIsPressed){
      rect(random(width), random(height), random(width), random(height))
    }}else if (playingF){
    background(80, 80, 80);
      if (mouseIsPressed){
      rect(random(width), random(height), random(width), random(height))
    }}else{
    background(255,0,0);
  }
  text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc == oscA) {
    osc.amp(0.5, 0.1);
    playingA = true;
  }else if (osc == oscS){
    osc.amp(0.5, 0.1);
    playingS = true;
  }else if (osc == oscD){
    osc.amp(0.5, 0.1);
    playingD = true;
  }else if (osc == oscF){
    osc.amp(0.5, 0.1);
    playingF = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc == oscA) {
    osc.amp(0.0, 0.5);
    playingA = false;
  }else if (osc == oscS){
    osc.amp(0.0, 0.5);
    playingS = false;
  }else if (osc == oscD){
    osc.amp(0.0, 0.5);
    playingD = false;
  }else if (osc == oscF){
    osc.amp(0.0, 0.5);
    playingF = false;
  }
}

