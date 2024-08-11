const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString);

const badString1 = "This is a test";
const badString2 =`This is a test`;
const badstring3 = 'This is a test';

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

const badQuotes = "'This is not allowed!";

const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); //"Hello, how are you?"

const hello = "Hello";
const user = "Chris";
console.log(hello + ", " + user); //Hello, Chris

//best way to combine 2 variables
const word = "Hello";
const nam = "Chris";
console.log(`${word}, ${nam}`); //"Hello, Chris"

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song$(song). I gave it a score of
${
    (score/highestScore) * 100
}%.`
console.log(output); //"I like the song Fight the Youth. I gave it a score of 90%."

const newline = `One day you finally knew
what you had to do, and began.`;
console.log(newline);
/*
One day you finally knew
what you had to do, and began.
*/

const bigmouth = `I\'ve got no right to take my place...`;
console.log(bigmouth);

const front= "Front ";
const number = 242;
console.log(front + number)

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
//string

if (hour < 1800){
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
