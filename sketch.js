// Step 1: load data or create some data
let data = [
  // Primary Colors
  { r: 255, g: 0, b: 0, color: "red-ish" },
  { r: 0, g: 255, b: 0, color: "lime-ish" },
  { r: 0, g: 0, b: 255, color: "blue-ish" },
  
  // Secondary Colors
  { r: 255, g: 255, b: 0, color: "yellow-ish" },
  { r: 255, g: 0, b: 255, color: "magenta-ish" },
  { r: 0, g: 255, b: 255, color: "cyan-ish" },
  
  // Neutrals
  { r: 255, g: 255, b: 255, color: "white-ish" },
  { r: 192, g: 192, b: 192, color: "silver-ish" },
  { r: 128, g: 128, b: 128, color: "gray-ish" },
  { r: 0, g: 0, b: 0, color: "black-ish" },
  
  // Reds
  { r: 139, g: 0, b: 0, color: "dark-red-ish" },
  { r: 178, g: 34, b: 34, color: "firebrick-ish" },
  { r: 220, g: 20, b: 60, color: "crimson-ish" },
  
  // Oranges
  { r: 255, g: 69, b: 0, color: "orange-red-ish" },
  { r: 255, g: 140, b: 0, color: "dark-orange-ish" },
  { r: 255, g: 165, b: 0, color: "orange-ish" },
  
  // Yellows
  { r: 255, g: 215, b: 0, color: "gold-ish" },
  { r: 218, g: 165, b: 32, color: "goldenrod-ish" },
  
  // Greens
  { r: 0, g: 100, b: 0, color: "dark-green-ish" },
  { r: 0, g: 128, b: 0, color: "green-ish" },
  { r: 34, g: 139, b: 34, color: "forest-green-ish" },
  { r: 50, g: 205, b: 50, color: "lime-green-ish" },
  
  // Blues
  { r: 0, g: 0, b: 128, color: "navy-ish" },
  { r: 0, g: 0, b: 139, color: "dark-blue-ish" },
  { r: 30, g: 144, b: 255, color: "dodger-blue-ish" },
  { r: 70, g: 130, b: 180, color: "steel-blue-ish" },
  
  // Purples
  { r: 128, g: 0, b: 128, color: "purple-ish" },
  { r: 147, g: 112, b: 219, color: "medium-purple-ish" },
  { r: 138, g: 43, b: 226, color: "blue-violet-ish" },
  { r: 153, g: 50, b: 204, color: "dark-orchid-ish" },
  
  // Browns
  { r: 165, g: 42, b: 42, color: "brown-ish" },
  { r: 139, g: 69, b: 19, color: "saddle-brown-ish" },
  
  // Pinks
  { r: 255, g: 192, b: 203, color: "pink-ish" },
  { r: 255, g: 20, b: 147, color: "deep-pink-ish" },
  { r: 255, g: 105, b: 180, color: "hot-pink-ish" },
  
  // Teals and Cyans
  { r: 0, g: 128, b: 128, color: "teal-ish" },
  { r: 72, g: 209, b: 204, color: "medium-turquoise-ish" },

  // Additional Blues
  { r: 25, g: 25, b: 112, color: "midnight-blue-ish" },
  { r: 65, g: 105, b: 225, color: "royal-blue-ish" },
  { r: 135, g: 206, b: 235, color: "sky-blue-ish" },
  { r: 173, g: 216, b: 230, color: "light-blue-ish" },

  // Additional Greens
  { r: 127, g: 255, b: 0, color: "chartreuse-ish" },
  { r: 46, g: 139, b: 87, color: "sea-green-ish" },
  { r: 152, g: 251, b: 152, color: "pale-green-ish" },
  { r: 0, g: 255, b: 127, color: "spring-green-ish" },

  // Additional Reds/Pinks
  { r: 250, g: 128, b: 114, color: "salmon-ish" },
  { r: 255, g: 99, b: 71, color: "tomato-ish" },
  { r: 255, g: 127, b: 80, color: "coral-ish" },
  { r: 219, g: 112, b: 147, color: "pale-violet-red-ish" },

  // Additional Purples/Violets
  { r: 238, g: 130, b: 238, color: "violet-ish" },
  { r: 218, g: 112, b: 214, color: "orchid-ish" },
  { r: 221, g: 160, b: 221, color: "plum-ish" },
  { r: 186, g: 85, b: 211, color: "medium-orchid-ish" },

  // Additional Browns/Tans
  { r: 210, g: 180, b: 140, color: "tan-ish" },
  { r: 222, g: 184, b: 135, color: "burlywood-ish" },
  { r: 244, g: 164, b: 96, color: "sandy-brown-ish" },
  { r: 205, g: 133, b: 63, color: "peru-ish" },

  // Additional Grays
  { r: 169, g: 169, b: 169, color: "dark-gray-ish" },
  { r: 211, g: 211, b: 211, color: "light-gray-ish" },
  { r: 220, g: 220, b: 220, color: "gainsboro-ish" },

  // Khaki/Beige tones
  { r: 240, g: 230, b: 140, color: "khaki-ish" },
  { r: 189, g: 183, b: 107, color: "dark-khaki-ish" },
  { r: 245, g: 245, b: 220, color: "beige-ish" },
  { r: 250, g: 235, b: 215, color: "antique-white-ish" },
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
    epochs: 256,
    batchSize: 32,
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
