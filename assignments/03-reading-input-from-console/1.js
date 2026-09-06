const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
 
rl.question('Enter first number: ', (input1) => {
  rl.question('Enter second number: ', (input2) => {
    rl.question('Enter third number: ', (input3) => {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);
      const num3 = parseFloat(input3);
 
      const average = (num1 + num2 + num3) / 3;
 
      console.log();
      console.log(`The average of ${num1}, ${num2}, ${num3} is ${average}`);
 
      rl.close();
    });
  });
});
 