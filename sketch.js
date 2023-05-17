let textX = 250;
let textY = 250;
let circleX = 250;
let circleY = 250;

// The setup function only happens once
function setup() {
  createCanvas(500, 500); // Create a 500px X 500px canvas
}

// The draw function happens over and over again
function draw() {
  background(255, 127, 80); // Set the background color to coral

  // Circle
  stroke(255);
  if (dist(mouseX, mouseY, circleX, circleY) <= 50) {
    fill(255, 255, 127, 150); // Change the fill color when the mouse is over the circle
  } else {
    fill(255, 255, 127, 100);
  }
  ellipse(circleX, circleY, 100, 100); // Center of canvas, 100px diameter

  // Rectangle
  stroke(255);
  if (dist(mouseX, mouseY, width / 2, height / 2) <= 75) {
    fill(255, 127, 127, 150); // Change the fill color when the mouse is over the rectangle
  } else {
    fill(255, 127, 127, 100);
  }
  rectMode(CENTER);
  rect(mouseX, mouseY, 100, 50); // Follow the mouse cursor, 100px X 50px

  // Triangle
  stroke(255);
  if (dist(mouseX, mouseY, width / 2, height / 2) <= 100) {
    fill(127, 255, 127, 150); // Change the fill color when the mouse is over the triangle
  } else {
    fill(127, 255, 127, 100);
  }
  triangle(mouseX, mouseY, mouseX + 75, mouseY + 75, mouseX + 150, mouseY); // Follow the mouse cursor, 150px wide

  // Text
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Click here!", textX, textY);

  // Update text position when the mouse is clicked
  if (mouseIsPressed) {
    textX += random(-5, 5);
    textY += random(-5, 5);
    circleX += random(-5, 5);
    circleY += random(-5, 5);
  }
}






