const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc')

console.log(gameName[0]); //element at selected index of string gets picked
console.log(gameName.__proto__); //needs more clarification

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //extracts contigous chracters from the string
console.log(newString);

const anotherString = gameName.slice(-8,4) // same as substring but can also accept neg sign to extract from reverse order
console.log(anotherString);

/*

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes white spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));

*/