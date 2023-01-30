let xoff = 0.0;
let colorOfDay = 0;
let colorAdjust = 10;
let m;
let bx1, by1, bx2, by2, bx3, by3, bx4, by4;

let starHeight = [];
let menu = [];
let links = ['./details-expanded.html', './sample-works.html', './portfolio.html', './teaching.html', ' '];
let linktext = ['about me', 'design', 'research', 'teaching', ' '];

let carrier; // this is the oscillator we will hear
let modulator; // this oscillator will modulate the amplitude of the carrier


function setup() {
  colorMode(HSL, 360, 100, 100, 1);
  createCanvas(windowWidth, windowHeight);
  noiseSeed(99);
  // stroke(0, 10);
  background(255);
  m = month();
  colorOfDay = random(-15 + (m - 1)*15, 15 + (m - 1)*15); // jan for -15 to 15
  colorAdjust = day(); // 1 ~ 28/31

  fill(colorOfDay, colorAdjust, 75, 0.5);
  stroke(colorOfDay, colorAdjust, 75, 0.8);
  for(let i = 1; i < 5; i++)
  {
    starHeight[i] = random(30, 200);
    circle(width/5*i, starHeight[i], 10);
    line(width/5*i, starHeight[i], width/5*i + (width/5 * (starHeight[i]/starHeight[1])), 0);
    menu[i-1] = createA(links[i-1], linktext[i-1], '_blank');
    menu[i-1].position(width/5*i + 16, starHeight[i]);
    menu[i-1].style.textDecoration = 'none';
  }



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
  stroke(colorOfDay, 10, 90, 0.01);
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

  fill(0, 0, 100, 1);
  for(let i = 1; i < 6; i++)
  {
    circle(width/5*i, starHeight[i], 10);
  }

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

  fill(0, 0, 100, 0.5);
  stroke(0, 0, 100, 0.3);
  for(let i = 1; i < 5; i++)
  {
    circle(width/5*i, starHeight[i], width/120);
    line(width/5*i, starHeight[i], width/5*i + (width/5 * (starHeight[i]/starHeight[1])), 0);

    if (windowWidth > 500){
      menu[i-1].position(width/5*i + 16, starHeight[i]);
    } else {
      menu[i-1].position(width/5 + 16, starHeight[1] + 16 * (i-1));
    }
  }
}
