// 3x2 + 2x - 6 = 0

let a = 3;
let b = 2; 
let c = -6;
let x1;
let x2;
// let kvadratTenglama = a * Math.pow(x, 2) + 2 * x - 6;
let diskreminant = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
if(diskreminant < 0){
   console.log("tenglaman yechimga ega emas");
}else if(diskreminant === 0){
   x1 = - b / (2 * a);
   console.log("tenglamaning yechimi: " + x);
}else{
   x1 = (- b + diskreminant) / (2 * a);
   x2 = (- b - diskreminant) / (2 * a);
   console.log("tenglamaning yechimlari: x1 " + x1 + " va x2 " + x2);
}