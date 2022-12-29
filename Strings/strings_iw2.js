//Given an array of string count the overall total number of characters

let stringArray = ["apple", "orange", "banana"];
let characterCount = 0;

for(let i=0; i<stringArray.length; i++){
  characterCount += stringArray[i].length;
}

console.log(characterCount);