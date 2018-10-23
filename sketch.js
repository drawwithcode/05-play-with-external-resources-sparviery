var run;
var we;
var fft;
var amplitude;

function preload(){
  // put preload code here
  run = loadImage("assets/runn.png");
  we = loadSound("assets/EBYL.mp3");


}

function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
colorMode(RGB);
background(189,216,233);

fft = new p5.FFT();
  fft.setInput(we);
  we.play();
  amplitude = new p5.Amplitude();
  amplitude.setInput(we);

  analyzer = new p5.Amplitude(0.5);
  analyzer.setInput(we);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if ( we.isPlaying() ) {
    we.stop();
  } else {
    we.play();
  }
}

function draw() {
  // put drawing code here
  background(189,216,233);

  translate(width/2,height/2);
  imageMode(CENTER);


  var bomba = analyzer.getLevel();


  image(run, 0, 0, 200+bomba*windowWidth, 200+bomba*windowWidth);

}
