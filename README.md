# Color Neural Network Classifier

A simple neural network that learns to classify colors using ml5.js and p5.js. 
The model is trained on basic color data and can predict color categories based on RGB values selected through interactive sliders.

## Features

- Real-time color classification
- Interactive RGB sliders
- Adaptive text color based on background brightness
- Neural network training visualization
- Responsive color feedback

## Demo

The application allows users to:
- Adjust RGB values using sliders
- See real-time color predictions
- View confidence scores for predictions (check console logs)
- Experience automatic text color adjustment for readability

## Technologies Used

- p5.js for graphics and interaction
- ml5.js for neural network implementation
- HTML5/JavaScript

## Usage

1. Move the RGB sliders to create different colors
2. The neural network will classify the color in real-time
3. The prediction appears in the center of the screen
4. Text color automatically adjusts for optimal visibility

## Model Details

The neural network is trained on a dataset of common colors including:
- Primary colors (red, green, blue)
- Secondary colors (yellow, magenta, cyan)
- Neutral colors (white, gray, black)
- Common variations (maroon, forest green, navy, pink, orange, purple)
