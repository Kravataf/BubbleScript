console.log("BubbleScript JS Transpiler");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the path of the file you want to transpile: ', (filePath) => {
  console.log(`Path: ${filePath}`);
  // TODO: actually make it do smth

  rl.close();
});

