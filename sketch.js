let xoff = 0.0;
let colorOfDay = 0;
let colorAdjust = 10;
let m;
let bx1, by1, bx2, by2, bx3, by3, bx4, by4;

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
  colorAdjust = day(); // 1 ~ 28/31
/*
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
*/

}

function draw() {
/*
  // map mouseY to moodulator freq between 0 and 20hz
  let modFreq = map(mouseY, 0, height, 20, 0);
  modulator.freq(modFreq);

  let modAmp = map(mouseX, 0, width, 0, 1);
  modulator.amp(modAmp, 0.01); // fade time of 0.1 for smooth fading
*/
  // background(0, 0, 0, 0.5);
  stroke(colorOfDay, 10, 90, 0.1);
  xoff = xoff + .01;
  let n = noise(xoff) * width;
  line(0, n, width, n);
  // put drawing code here

  fill(colorOfDay, colorAdjust, 50, 0.1);
  noStroke();
  // stroke(0, 50, 90);
  bx1 = windowWidth * (-1);
  by1 = windowHeight;
  bx2 = mouseX;
  by2 = mouseY;
  bx3 = mouseX;
  by3 = mouseY;
  bx4 = windowWidth * 2;
  by4 = windowHeight;

  bezier(windowWidth * (-1), windowHeight, mouseX, mouseY,
      mouseX, mouseY, windowWidth * 2, windowHeight);


}

function mousePressed(){
  /*
  fill(0, 30, 70, 1);
  let steps = 10;
  for (let i = 0; i <= steps; i++) {
    let t = i / steps;
    let x = bezierPoint(bx1, bx2, bx3, bx4, t);
    let y = bezierPoint(by1, by2, by3, by4, t);
    circle(x, y, 25);
  }
  */

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  noiseSeed(99);
}
