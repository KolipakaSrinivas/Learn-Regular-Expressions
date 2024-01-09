// // 1
// let sentence = "The dog chased the cat."
// let regex = /ok/
// let result1 = regex.test(sentence)
// // console.log(result1);

// // 2
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result2 = myRegex.test(myString); 
// // console.log(result2);

// // 3
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/;
// let result3 = petRegex.test(petString);
// // console.log(result3);

// 4
// let myString = "freeCodeCamp";
// let fccRegex = /Freecodecamp/i; // Change this line (i) flag no case sensitive 
// let result = fccRegex.test(myString);
// console.log(result);

// 5
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // if coding not exites return null 
// let result = extractStr.match(codingRegex); 

// console.log(result);


// 6
// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/g;  // g flag search write all reapted words
// console.log(testStr.match(ourRegex));
// testStr.match(ourRegex);

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/ig;
// let result = twinkleStar.match(starRegex); 

// console.log(result);


let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./; // it search start hu.
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // it search for .un
let result = unRegex.test(exampleStr);
let result2 = exampleStr.match(unRegex)

console.log(result);
