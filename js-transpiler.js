console.log("BubbleScript JS Transpiler");

let compiledSrc = "";
const { read } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the path of the file you want to transpile: ', (filePath) => {
  console.log(`Path: ${filePath}`);
  readFile(filePath);
  rl.close();
});

async function readFile(address) {
  try {
    if (!address.endsWith('.bs')) {
      console.error('Error: Only .bs files are supported.');
      return;
  }
  } catch (error) {
    console.error('Error reading file: ', error);
  }
}