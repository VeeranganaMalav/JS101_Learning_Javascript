//reverse string from mid
// school   ->    hcsloo
let str = "school";
let reversedStr = "";

let mid = str.length/2;
let i = mid-1;
let j = str.length-1;

while(i >= 0){
    reversedStr = reversedStr + str[i];
    i--;
}

while(j >= mid){
    reversedStr = reversedStr + str[j];
    j--;
}

console.log(reversedStr);