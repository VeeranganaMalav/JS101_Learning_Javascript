//Masai Divisors
let left = 1;
let right = 10;
let k = 3;
let count = 0;

for(let i=left; i<=right; i++){
  if(i%k == 0){
    count++;
  }
}

console.log(count);