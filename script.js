let input = 0;

// DOM elements
const zero = document.getElementById('zeroButton');
const one = document.getElementById('oneButton');
const two = document.getElementById('twoButton');
const three = document.getElementById('threeButton');
const four = document.getElementById('fourButton');
const five = document.getElementById('fiveButton');
const six = document.getElementById('sixButton');
const seven = document.getElementById('sevenButton');
const eight = document.getElementById('eightButton');
const nine = document.getElementById('nineButton');
const backspaceButton = document.getElementById('backspaceButton');

const textOutput = document.getElementById('textOutput');

// Number buttons event handlers
zero.addEventListener('click', () => {
  textOutput.textContent += zeroButton.value;
});

one.addEventListener('click', () => {
  textOutput.textContent += oneButton.value;
});

two.addEventListener('click', () => {
  textOutput.textContent += twoButton.value;
});

three.addEventListener('click', () => {
  textOutput.textContent += threeButton.value;
});

four.addEventListener('click', () => {
  textOutput.textContent += fourButton.value;
});

five.addEventListener('click', () => {
  textOutput.textContent += fiveButton.value;
});

six.addEventListener('click', () => {
  textOutput.textContent += sixButton.value;
});

seven.addEventListener('click', () => {
  textOutput.textContent += sevenButton.value;
});

eight.addEventListener('click', () => {
  textOutput.textContent += eightButton.value;
});

nine.addEventListener('click', () => {
  textOutput.textContent += nineButton.value;
});

backspaceButton.addEventListener('click', () => {
  if (textOutput.textContent.length > 1) {
    textOutput.textContent = textOutput.textContent.slice(0, -1);
  } else {
    textOutput.textContent = "0";
  }
});