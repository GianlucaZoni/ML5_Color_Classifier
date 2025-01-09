// Step 1: load data or create some data
let data = [
  // Primary Colors
  { r: 255, g: 0, b: 0, color: "red-ish" },
  { r: 0, g: 255, b: 0, color: "green-ish" },
  { r: 0, g: 0, b: 255, color: "blue-ish" },
  
  // Secondary Colors
  { r: 255, g: 255, b: 0, color: "yellow-ish" },
  { r: 255, g: 0, b: 255, color: "magenta-ish" },
  { r: 0, g: 255, b: 255, color: "cyan-ish" },
  
  // Neutrals
  { r: 255, g: 255, b: 255, color: "white-ish" },
  { r: 128, g: 128, b: 128, color: "gray-ish" },
  { r: 0, g: 0, b: 0, color: "black-ish" },
  
  // Common Colors
  { r: 128, g: 0, b: 0, color: "maroon-ish" },
  { r: 0, g: 128, b: 0, color: "forest-green-ish" },
  { r: 0, g: 0, b: 128, color: "navy-ish" },

  { r: 128, g: 128, b: 0, color: "olive-ish" },
  { r: 128, g: 0, b: 128, color: "purple-ish" },
  { r: 0, g: 128, b: 128, color: "teal-ish" },

  { r: 255, g: 192, b: 203, color: "pink-ish" },
  { r: 255, g: 165, b: 0, color: "orange-ish" },

];

let classifer;
let r = 147;
let g = 112;
let b = 219;
let rSlider, gSlider, bSlider;
let label = "learning colors";

function setup() {
  createCanvas(640, 640);

  // For this example to work across all browsers
  // "webgl" or "cpu" needs to be set as the backend
  ml5.setBackend("webgl");

  rSlider = createSlider(0, 255, r).position(20, 640+20).size(600);
  gSlider = createSlider(0, 255, g).position(20, 640+40).size(600);
  bSlider = createSlider(0, 255, b).position(20, 640+60).size(600);

  // Step 2: set your neural network options
  let options = {
    task: "classification",
    debug: true,
  };

  // Step 3: initialize your neural network
  classifier = ml5.neuralNetwork(options);

  // Step 4: add data to the neural network
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let inputs = [item.r, item.g, item.b];
    let outputs = [item.color];
    classifier.addData(inputs, outputs);
  }

  // Step 5: normalize your data;
  classifier.normalizeData();

  // Step 6: train your neural network
  const trainingOptions = {
    epochs: 1024,
    batchSize: 64,
  };
  classifier.train(trainingOptions, finishedTraining);
}
// Step 7: use the trained model
function finishedTraining() {
  classify();
}

// Step 8: make a classification
function classify() {
  const input = [r, g, b];
  classifier.classify(input, handleResults);
}

function draw() {

  r = rSlider.value();
  g = gSlider.value();
  b = bSlider.value();
  background(r, g, b);

  // Calculate brightness using YIQ formula
  let brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  
  // Set text color based on background brightness
  if (brightness >= 128) {
    fill(0); // Dark
  } else {
    fill(255); // White
  }

  textAlign(CENTER, CENTER);

  textSize(16);
  text(`input: R ${r} G ${g} B ${b}`, width/2, height-20);

  textSize(64);
  text(`beep boop\n${label}`, width / 2, height / 2);
}

// Step 9: define a function to handle the results of your classification
function handleResults(results, error) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  console.log(results); // {label: 'color', confidence: 0.number};
  classify();
}
