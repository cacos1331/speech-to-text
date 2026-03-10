let recognition;
let output = '';
let started = false;

function setup() {
  createCanvas(400, 400);

  let SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = (e) => {
    output += e.results[e.results.length - 1][0].transcript + ' ';
  };

  recognition.onend = () => {
    recognition.start();
  };
}

function draw() {
  background(255);

  fill(150);
  textSize(12);
  text(started ? 'Listening...' : 'Click to start.', 20, 380);

  fill(0);
  textSize(16);
  textWrap(WORD);
  text(output, 20, 20, 360, 350);
}

function mousePressed() {
  if (!started) {
    started = true;
    recognition.start();
  }
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    output = '';
  }
}