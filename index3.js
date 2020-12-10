// 1. Berilgan son musbat bo'lsa 1ga oshirilsin

let a = 1;
if(a >= 0){
   a = a + 1;
   console.log("1. Berilgan son musbat ekanligi uchun 1 ga oshirildi: " + a);
}else{
   console.log("1. Berilgan son manfiy ekanligi uchun o'zgarishsiz qoldirildi: " + a);
}

// 2. Berilgan son musbat bo'lsa 1 ga oshirilsin, aks holda 2 ga kamaytirilsin

let b = -1;
if(b >= 0){
   b = b + 1;
   console.log("2. Berilgan son musbat ekanligi uchun 1 ga oshirildi: " + b);
}else{
   b = b - 2;
   console.log("2. Berilgan son manfiy ekanligi uchun 2 ga kamaytirildi: " + b);
}

// 3. Berilgan son musbat bo'lsa 1 ga oshirilsin, aks holda 2 ga kamaytirilsin, 0 ga teng bo'lsa 10 ni o'zlashtirsin

let d = 0;
if(d > 0){
   d = d + 1;
   console.log("3. Berilgan son musbat ekanligi uchun 1 ga oshirildi: " + d);
}else if(d === 0){
   d = 10;
   console.log("3. Berilgan son 0 ga teng bo'lganligi uchun 10 ga almashtirildi: " + d);
}else{
   d = d - 2;
   console.log("3. Berilgan son manfiy ekanligi uchun 2 ga kamaytirildi: " + d);
}

// 4. 3 ta butun sondan nechtasi musbat ekanligini aniqlang

let A = 1; 
let B = -1; 
let C = 2;
let soni = 0;
if(A >= 0){
   soni += 1;
}
if(B >= 0){
   soni += 1;
}
if(C >= 0){
   soni += 1;
}
if(soni !== 0){
   console.log("4. Berilgan 3 ta sondan " + soni + " tasi musbat");
}else{
   console.log("4. Berilgan 3 ta sonning hammasi manfiy");
}