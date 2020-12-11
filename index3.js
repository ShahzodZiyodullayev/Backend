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
if(d === 0){
   d = 10;
   console.log("3. Berilgan son 0 ga teng bo'lganligi uchun 10 ga almashtirildi: " + d);
}else if(d > 0){
   d = d + 1;
   console.log("3. Berilgan son musbat ekanligi uchun 1 ga oshirildi: " + d);
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

// 5. 3 ta butun sondan nechtasi musbat va manfiy ekanligini aniqlang

let q = 2; 
let w = -3; 
let e = -1;
let musbat = 0;
if(q > 0){
   musbat += 1;
}
if(w > 0){
   musbat += 1;
}
if(e > 0){
   musbat += 1;
}
if(musbat !== 0){
   console.log("5. Berilgan 3 ta sondan " + musbat + " tasi musbat " + (3 - musbat) + " tasi manfiy");
}else{
   console.log("5. Berilgan 3 ta sonning hammasi manfiy");
}

// 6. Ikkita butun sondan kattasini aniqlang

let r = 10;
let t = 20;
if(r > t){
   console.log("6. Birinchi son katta");
}else if(r === t){
   console.log("6. Ikkala son o'zaro teng");
}else{
   console.log("6. Ikkinchi son katta");
}

// 7. Ikkita butun sondan kichigining tartibini aniqlovchi dastur tuzing

let y = 3; 
let u = 5;
if(y > u){
   console.log("7. Birinchi raqam katta");
}else{
   console.log("7. Ikkinchi raqam katta");
}

// 8. Ikkita butun sondan avval kattasini keyin kichigini ekranga chiqaruvchi dastur tuzilsin

let i = 4;
let o = 5;
if(i > o){
   console.log("8. Kattasi " + i + " kichigi " + o);
}else{
   console.log("8. Kattasi " + o + " kichigi " + i);
}

// 9. Ikkita son berilgan. Ularni shunday o'zgartiringki A son kichik B son katta bo'lsin

let AA = Math.floor(Math.random() * 10);
let BB = Math.floor(Math.random() * 10);
let f
if(AA === BB){
   BB += 1;
   console.log("9. AA o'zgaruvchisi har doim BB dan kichik: " + " AA: " + AA + " BB: " + BB)
}
if(AA > BB){
   f = AA;
   AA = BB;
   BB = f;
   console.log("9. AA o'zgaruvchisi har doim BB dan kichik: " + " AA: " + AA + " BB: " + BB)
}else{
   console.log("9. AA o'zgaruvchisi har doim BB dan kichik: " + " AA: " + AA + " BB: " + BB)
}

// 10. Berilgan 2 ta son o'zaro teng bo'lmasa ularning yig'indisi, aks holda 0 ni o'zlashtirsin

let g = Math.floor(Math.random() * 10);
let h = Math.floor(Math.random() * 10);
if(g !== h){
   let yigindi = g + h;
   g = yigindi;
   h = yigindi;
   console.log("10. Sonlarning qiymati teng emas va yig'indisiga almashtirildi: " + g + "  " + h);
}else{
   g = 0;
   h = 0;
   console.log("10. Sonlarning qiymati o'zaro teng va qiymati 0 ga almashtirildi: " + g + "  " + h);
}