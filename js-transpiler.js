console.log("BubbleScript JS Transpiler");

let compiledSrc = "";
const { read } = require('fs');
const readline = require('readline');
const fs = require('fs').promises;
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

  const data = await fs.readFile(address, 'utf8');
  const lines = data.split(/\r?\n/);

  for (let line of lines) {
    // tokens == words
    const tokens = line.trim().split(/\s+/);

    switch (tokens[0]) {
      // the main keywords that are used to define stuff
      case 'var': // <-- [2] is the type, ( num, str, bool, etc. )
        break;
      case 'func': // <-- more complicated do later ( func + the 2 below )
        break;
      case 'return':
        break;
      case 'call':
        break;
      // do these later
      case 'if':
        break;
      case 'else':
        break;
      case 'for':
        break;
      // math operations
      case '+':
        break;
      case '-':
        break;
      case '*':
        break;
      case '/':
        break;
      // misc
      default:
        break;
    }
  }
}