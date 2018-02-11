var freq

var osc

var playing

function setup() {
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
  if (playing) {
    background(0, 255, 255);
    if (mouseIsPressed){
      rect(random(width), random(height), random(width), random(height))
    }else{
    background(255,0,0);
  }}
  text('click here,\nthen press A\n to play', width / 2, 40);
}

function keyPressed() {
  if (keyIsPressed){
    print("got key press for ", key);
    osc.amp(0.5, 0.1);
    playing = true;
  }else if (keyIsPressed == false){
    osc.amp(0.0, 0.5);
    playing = false;
  }
}
