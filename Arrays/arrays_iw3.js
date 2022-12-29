let numbers = [6, 10, 77, 32, 53, 21, 84, 14, 91];
let sumOfEvenNumbers = 0;
let countOfEvenNumbers = 0;

for(let i=0; i<numbers.length; i++){
  if(i%2 == 0){
    sumOfEvenNumbers = sumOfEvenNumbers + numbers[i];
    countOfEvenNumbers++;
  }
}

console.log("Average of all even numbers in the array is " + (sumOfEvenNumbers/countOfEvenNumbers));