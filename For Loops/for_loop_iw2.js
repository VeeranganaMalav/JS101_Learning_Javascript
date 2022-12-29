//Divisibly by K2
let num = 7;
let k = 2;
let sum=0;

for(let i=1; i<=num; i++){
  if(i%k == 0){
    sum = sum + i;
  }
}
console.log(sum);