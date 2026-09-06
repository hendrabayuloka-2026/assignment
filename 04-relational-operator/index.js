const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
 
rl.question('Enter first number: ', (input1) => {
  rl.question('Enter second number: ', (input2) => {
    const first = parseFloat(input1);
    const second = parseFloat(input2);
    const actualSum = first + second;
 
    rl.question(`What is ${first} + ${second}? `, (answerInput) => {
      const userAnswer = parseFloat(answerInput);
      const isCorrect = userAnswer === actualSum;
 
      console.log(`${first} + ${second} = ${userAnswer} is ${isCorrect}`);
 
      rl.close();
    });
  });
});
 