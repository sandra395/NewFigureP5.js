function setup() {
  createCanvas(720, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  
  // Neck
  stroke(102); // Set stroke to gray
  line(266, 257, 266, 162); // Left
  line(276, 257, 276, 162); // Middle
  line(286, 257, 286, 162); // Right
  
  // Antennae
  line(276, 155, 246, 112); // Small
  line(276, 155, 306, 56);  // Tall
  line(276, 155, 342, 170); // Medium
  
  // Body
  noStroke(); // Disable stroke
  fill(102); // Set fill to gray
  ellipse(264, 377, 33, 33); // Antigravity orb
  fill(0); // Set fill to black
  rect(219, 257, 90, 120); // Main body
  fill(102); // Set fill to gray
  rect(219, 274, 90, 6); // Gray stripe
  
  // Head
  fill(0); // Set fill to black
  ellipse(276, 155, 45, 45); // Head
  fill(255); // Set fill to white
  ellipse(288, 150, 14, 14); // Large eye
  fill(0); // Set fill to black
  ellipse(288, 150, 3, 3); // Pupil
  fill(153); // Set fill to light gray
  ellipse(263, 148, 5, 5); // Small eye 1
  ellipse(296, 130, 4, 4); // Small eye 2
  ellipse(305, 162, 3, 3); // Small eye 3
  
  // Animal/Cat
  
  // Head
  noStroke();
  fill(224, 167, 93); // Brown
  ellipse(570, 260, 45, 45); // Head
  fill(255); // White
  ellipse(590, 250, 14, 14); // Eye
  fill(173, 216, 230); // Blue
  ellipse(590, 250, 3, 3); // Pupil
  
  // Ears
  fill(244, 194, 194); // Light pink
  ellipse(590, 220, 7, 7); // Ear
  ellipse(570, 214, 7, 7); // Ear
  
  // Nose
  ellipse(608, 270, 5, 5); 
  
  // Body and Tail
  noStroke(); // No stroke
  fill(224, 167, 93); // Brown
  ellipse(390, 315, 33, 33); 
  fill(224, 167, 93); // Brown
  rect(390, 257, 127, 90); // Body
  fill(0); // Black
  rect(390, 300, 128, 6); // Black line
  
  stroke(224, 167, 93); // Brown
  strokeWeight(7);
  line(580, 300, 520, 300); // Neck
  
  stroke(0); // Black
  line(590, 290, 600, 290); // Mouth
  
  stroke(224, 167, 93); // Brown
  strokeWeight(6); // Stroke
  line(400, 420, 400, 310); // Paw
  line(420, 420, 420, 310); // Paw
  line(460, 420, 460, 310); // Paw
  line(490, 415, 490, 310); // Paw
}
