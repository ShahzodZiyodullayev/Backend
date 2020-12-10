// 1. A soni musbatmi?

let A = 1;
if(A < 0){
   console.log("1. Berilgan son manfiy");
}else{
   console.log("1. Berilgan son musbat");
}

// 2. Berilgan son toqmi? 

let B = 3;
let toq = B % 2;
if(toq !== 0){
   console.log("2. Berilgan son toq");
}else{
   console.log("2. Berilgan son juft");
}

// 3. Berilgan son juftmi? 

let C = 6; 
let juft = C % 2;
if(juft === 0){
   console.log("3. Berilgan son juft");
}else{
   console.log("3. Berilgan son toq");
}

// 4. Jumlani rostlikka tekshiring: "A > 2 va B <= 3"

let booleanOne = (A > 2 && B <= 3) ? "4. Rost" : "4. Yolg'on";
console.log(booleanOne);

// 5. Jumlani rostlikka tekshiring: "A >= 0 yoki B < -2"

let booleanTwo = (A >= 0 || B < -2) ? "5. Rost" : "5. Yolg'on";
console.log(booleanTwo)

// 6. Jumlani rostlikka tekshiring: "A <= B <= C"

let booleanThree = (A <= B && B <= C)? "6. Rost" : "6. Yolg'on";
console.log(booleanThree);

// 7. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi"

let booleanFour = (B > A && C > B) ? "7. Rost" : "8. Yolg'on";
console.log(booleanFour);

// 8. A va B sonlar toqmi? 

let A_Toqmi = A % 2;
let B_Toqmi = B % 2;
let A_va_B_Toqmi = (A_Toqmi !== 0 && B_Toqmi !== 0) ? "8. Ha" : "8. Yo'q";
console.log(A_va_B_Toqmi);

// 9. 