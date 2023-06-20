// This is the interactive 'sketch' component storing audio and visual features

let boids = [];
let shaista, nusret;

function preload() { 
  // Sound Stories made with www.narakeet.com
  nusret = loadSound('assets/Nusret.mp3');
  shaista = loadSound('assets/Shaista.mp3');
}

function setup() {
  //createCanvas(1080, 1350);
  createCanvas(1080, 1080);
  // draw bg once
  //background(255); 
  
  // text settings
  //fill('255');
  fill(0);
  textFont("Futura");
  
  // // Sound 
  // song = loadSound('assets/Nusret.mp3');
  
  // Images 
  img1 = loadImage("assets/Luann.png");
  img2 = loadImage("assets/Mohammed.png");
  img3 = loadImage("assets/Nusret.png");
  img4 = loadImage("assets/Shaista.png");
  img5 = loadImage("assets/GPXRoutewithPoints.png");
  
  // Add an initial set of boids into the system
  for (let i = 0; i < 1; i++) {
    boids[i] = new Boid(random(width), random(height));
  }
  
  // push()
  // // Run all the boids
  // for (let i = 0; i < boids.length; i++) {
  //   boids[i].run(boids);
  // }
  // pop(); 
}

function draw() {
  // uncomment to print values
  background(244, 238, 213);
  // text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  //image(img5, width/2-340, height/2 - 300, 650, 450);
  // image(img5, 0, 0, width, 750);
  
  // run your boids 
  push()
  // Run all the boids
  for (let i = 0; i < boids.length; i++) {
    boids[i].run(boids);
  }
  pop(); 
  
  //--TEXT GRAPHICS 
  //--main text
  textSize(80);
  textStyle(BOLD);
  
  //--Title Backplate 
    // push(); 
    // noStroke(); 
    // fill(244, 238, 213); 
    // rect(0, height - 475, width, 500); 
    // pop(); 

  
  //text("Stories about", 105, height - 320);
  textSize(120);
  text("Food Security", 100, height - 200);

  //--date
  push();
  textSize(44);
  let angle = radians(90);
  translate(width - 100, 100);
  rotate(angle);
  text("Community Stories", 0, 0);
  pop();

  //--secondary text - time & format
  textSize(18);
  textStyle(NORMAL);
  text(
    "Real stories about food security from members of the Thorncliffe and Flemingdon Park GTA region",
    105,
    height - 145
  );
  text("Click on each person to hear their story or visit www.foodjusticeresearch.ca", 105, height - 112);
  
  //--export graphics as a png file 
 if (keyCode === DOWN_ARROW) {
    saveCanvas("poster", "png");
  }
}

function mousePressed(img3) {
  if (shaista.isPlaying()) {
    shaista.stop();
  } else {
    shaista.play();
  }
}

