//Find Sum of Multiples
let n=3;
let k=10;
let y=5;
let sum = 0;

for(let i=1; i<=k; i++){
  let multiple = n*i;
  if(multiple%y == 0){
    sum += multiple;
  }
}
console.log(sum);