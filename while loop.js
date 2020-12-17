// 1

// let a = 22;
// let b = 3;
// let qolganQism; 
// let i = b;
// while(i <= a){
//    qolganQism = a - i;
//    i = i + b;
// }
// console.log(qolganQism)

// 2

// let a = 22;
// let b = 3;
// let sum = 0;
// let i = b; 
// while(i <= a){
//    sum += 1;
//    i = i + b;
// }
// console.log(sum)

// 3

// let a = 24;
// let b = 3;
// let qolganQism;
// let butunQismi = 0;
// let i = b;
// while(i <= a){
//    qolganQism = a - i;
//    butunQismi += 1;
//    i = i + b;
// }
// console.log(qolganQism, butunQismi);

// 4

// let n = 27;
// let asos = 3;
// let i = 0;
// let txt = "";
// while(i < n){
//    if(Math.pow(asos, i) === n){
//       txt = "3 - ning darajasi";
//    }else{
//       txt = "3 - ning darajasi emas";
//    }
//    i++
// }
// console.log(txt);

// 5

// let n = 128;
// let asos = 2;
// let txt;
// let i = 0;
// while(i < n){
//    if(Math.pow(asos, i) === n){
//       txt = i;
//    }else{
//       txt = "N 2 ning darajasi emas";
//    }
//    i++;
// }
// console.log(txt);

// 6

let n = 5;
let sum = 1;
let x = n;
let i = 1;
while(i < (n / 2)){
   x = n - (2 * i - 1);
   sum *= x;
   i++;
}
console.log(sum)