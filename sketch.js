let vverss = 250; // water energy size

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220, 210, 150); // desert background

  // desert wind
  stroke(240, 230, 170);
  strokeWeight(3);
  line(0, 80, width, 40);
  line(0, 160, width, 120);
  line(0, 240, width, 200);

  // cracked ground
  stroke(150, 120, 80);
  strokeWeight(2);
  line(50, 450, 120, 380);
  line(120, 380, 200, 430);
  line(200, 430, 260, 360);

  // body armor
  noStroke();
  fill(70, 60, 55);
  ellipse(250, 340, 200, 180);

  // face
  fill(90, 80, 75);
  ellipse(250, 230, 170, 170);

  // chest pump
  fill(30);
  ellipse(250, 340, 45, 45);

  // water tubes
  stroke(80, 190, 230);
  strokeWeight(6);
  line(250, 340, 210, 170);
  line(250, 340, 290, 170);

  // water energy (shrinks when absorbing)
  noStroke();
  fill(80, 190, 230, 120);
  ellipse(250, 340, vverss, vverss);

  // scorpion "8" symbol
  fill(80, 190, 230);
  ellipse(250, 220, 35, 35);
  ellipse(250, 255, 35, 35);

  fill(30);
  ellipse(250, 220, 18, 18);
  ellipse(250, 255, 18, 18);

  // name
  fill(30);
  textSize(20);
  text("Scorix Verso", 180, 40);
}

function mousePressed() {
  vverss = vverss - 15; // water shrinking (absorbing)

  if (vverss < 20) {
    vverss = 200; // reset water supply
  }
}