let xoff = 0.0;
let colorOfDay = 0;
let m;

let carrier; // this is the oscillator we will hear
let modulator; // this oscillator will modulate the amplitude of the carrier

function setup() {
  colorMode(HSL, 360, 100, 100, 1);
  createCanvas(windowWidth, windowHeight);
  noiseSeed(99);
  // stroke(0, 10);
  background(0);
  m = month();
  colorOfDay = random(-15 + (m - 1)*15, 15 + (m - 1)*15); // jan for -15 to 15

  carrier = new p5.Oscillator(); // connects to master output by default
  carrier.freq(340);
  carrier.amp(0);
  // carrier's amp is 0 by default, giving our modulator total control

  carrier.start();

  modulator = new p5.Oscillator('triangle');
  modulator.disconnect(); // disconnect the modulator from master output
  modulator.freq(5);
  modulator.amp(1);
  modulator.start();

  // Modulate the carrier's amplitude with the modulator
  // Optionally, we can scale the signal.
  carrier.amp(modulator.scale(-1, 1, 1, -1));

}

function draw() {

  // map mouseY to moodulator freq between 0 and 20hz
  let modFreq = map(mouseY, 0, height, 20, 0);
  modulator.freq(modFreq);

  let modAmp = map(mouseX, 0, width, 0, 1);
  modulator.amp(modAmp, 0.01); // fade time of 0.1 for smooth fading

  // background(0, 0, 0, 0.5);
  stroke(0, 10, 90, 0.1);
  xoff = xoff + .01;
  let n = noise(xoff) * width;
  line(0, n, width, n);
  // put drawing code here

  fill(0, 10, 50, 0.1);
  noStroke();
  // stroke(0, 50, 90);
  bezier(windowWidth * (-1), windowHeight, mouseX, mouseY,
      mouseX, mouseY, windowWidth * 2, windowHeight);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  noiseSeed(99);
}
