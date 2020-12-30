// 1. Kiritilgan songa mos hafta kunini chiqarib beruvchi dastur tuzilsin

let kun = Math.floor(Math.random() * 8);
switch(kun){
   case 0:
      console.log("1.  Dushanba");
      break;
   case 1:
      console.log("1.  Seshanba");
      break;
   case 2:
      console.log("1.  Chorshanba");
      break;
   case 3:
      console.log("1.  Payshanba");
      break;
   case 4:
      console.log("1.  Juma");
      break;
   case 5:
      console.log("1.  Shanba");
      break;
   case 6:
      console.log("1.  Yakshanba");
      break;
   default:
      console.log("1.  Haftaning bunday kuni yo'q")
}

// 2. Baho natijalarini chiqaruvchi dastur tuzilsin

let baho = Math.floor(Math.random() * 5 + 1);
switch(baho){
   case 1:
      console.log("2.  Yomon");
      break;
   case 2:
      console.log("2.  Qoniqarsiz");
      break;
   case 3:
      console.log("2.  Qoniqarli");
      break;
   case 4:
      console.log("2.  Yaxshi");
      break;
   case 5:
      console.log("2.  A'lo");
      break;
   default:
      console.log("2.  Xato")
}

// 3. Oy raqami kiritilganda qaysi faslga tegishliligi chiqsin

let oy = Math.floor(Math.random() * 12 + 1);
switch(oy){
   case 1:
   case 2:
      console.log("3.  Qish fasli");
      break;
   case 3:
   case 4:
   case 5:
      console.log("3.  Bahor fasli");
      break;
   case 6:
   case 7: 
   case 8: 
      console.log("3.  Yoz fasli");
      break;
   case 9:
   case 10:
   case 11: 
      console.log("3.  Kuz fasli");
      break;
   case 12:
      console.log("3.  Qish fasli");
      break;
   default:
      console.log("3.  Xato");
      break;
}

// 4. Berilgan oyda necha kun borligini aniqlang

let kunlarSoni = Math.floor(Math.random() * 11 + 1);
switch(kunlarSoni){
   case 1:
   case 3:
   case 5:
   case 7:
   case 8:
   case 10:
   case 12:
      console.log("4.  Bu oyda 31 kun mavjud");
      break;
   case 2:
      console.log("4.  Bu oyda 28 yoki 29 kun mavjud");
      break;
   case 4:
   case 6:
   case 9:
   case 11:
      console.log("4.  Bu oyda 30 kun mavjud");
      break;
   default:
      console.log("4.  Xatolik");
      break;
}

// 5. Berilgan sonlar ustida arifmetik amal bajaruvchi dastur tuzilsin

let A = 10;
let B = 20;
let amal = Math.floor(Math.random() * 4 + 1);
switch(amal){
   case 1:
      console.log("5.  Sonlar qo'shildi: " + (A + B));
      break;
   case 2:
      console.log("5.  Sonlar ayirildi: " + (B - A));
      break;
   case 3:
      console.log("5.  Sonlar bo'lindi: " + (B / A));
      break;
   case 4:
      console.log("5.  Sonlar ko'paytirildi: " + (A * B));
      break;
   default:
      console.log("5.  Bunday qiymat mavjud emas");
      break;
}

// 6. Kesma uzunligini uzunlik birliklarida ifodalang

let kesmaUzunligi_sm = Math.floor(Math.random() * 100 + 1);
let birliklar = Math.floor(Math.random() * 5 + 1);
switch(birliklar){
   case 1:
      console.log("6.  Kesma uzunligi: " + (kesmaUzunligi_sm / 10) + " detsimetr");
      break;
   case 2:
      console.log("6.  Kesma uzunligi: " + (kesmaUzunligi_sm / 100000) + " kilometr");
      break;
   case 3:
      console.log("6.  Kesma uzunligi: " + (kesmaUzunligi_sm / 100) + " metr");
      break;
   case 4: 
      console.log("6.  Kesma uzunligi: " + (kesmaUzunligi_sm / 0.1) + " millimetr");
      break;
   case 5:
      console.log("6.  Kesma uzunligi: " + (kesmaUzunligi_sm / 1) + " santimetr");
      break;
   default:
      console.log("6.  Xatolik");
      break;
} 

// 7. Berilgan massani og'irlik birliklarida ifodalang

let ogirlikBirliklari = Math.floor(Math.random() * 5 + 1);
let berilganMassa_kg = Math.floor(Math.random() * 100 + 1);
switch(ogirlikBirliklari){
   case 1:
      console.log("7.  Berilgan massa: " + (berilganMassa_kg / 1) + " kg");
      break;
   case 2:
      console.log("7.  Berilgan massa: " + (berilganMassa_kg * Math.pow(10, 6) + " milligramm"));
      break;
   case 3: 
      console.log("7.  Berilgan massa: " + (berilganMassa_kg * 1000) + " gramm");
      break;
   case 4: 
      console.log("7.  Berilgan massa: " + (berilganMassa_kg / 1000) + " tonna");
      break;
   case 5:
      console.log("7.  Berilgan massa: " + (berilganMassa_kg / 100) + " sentner");
      break;
   default:
      console.log("7.  Xatolik");
      break;
}

// 8. Sanani ifodalovchi 2 ta butun son berilgan. Berilgan sanani ifodalovchi dastur tuzing

let sana = Math.floor(Math.random() * 40 + 1);
let oyRaqami = Math.floor(Math.random() * 15 + 1);
if(sana < 32 && oyRaqami < 13){
   switch(oyRaqami){
      case 1:
         console.log("8.  Berilgan sana " + sana + " - yanvar");
         break;
      case 2:
         if(sana > 28){
            console.log("8.  Berilgan qiymatlar bo'yicha sana mavjud emas");
         }else{
            console.log("8.  Berilgan sana " + sana + " - fevral");
         }
         break;
      case 3:
         console.log("8.  Berilgan sana " + sana + " - mart");
         break;
      case 4:
         if(sana > 30){
            console.log("8.  Berilgan qiymatlar bo'yicha sana mavjud emas");
         }else{
            console.log("8.  Berilgan sana " + sana + " - aprel");
         }
         break;
      case 5:
         console.log("8.  Berilgan sana " + sana + " - may");
         break;
      case 6:
         if(sana > 30){
            console.log("8.  Berilgan qiymatlar bo'yicha sana mavjud emas");
         }else{
            console.log("8.  Berilgan sana " + sana + " - iyun");
         }
         break;
      case 7:
         console.log("8.  Berilgan sana " + sana + " - iyul");
         break;
      case 8:
         console.log("8.  Berilgan sana " + sana + " - avgust");
         break;
      case 9:
         if(sana > 30){
            console.log("8.  Berilgan qiymatlar bo'yicha sana mavjud emas");
         }else{
            console.log("8.  Berilgan sana " + sana + " - sentyabr");
         }
         break;
      case 10:
         console.log("8.  Berilgan sana " + sana + " - oktyabr");
         break;
      case 11:
         if(sana > 30){
            console.log("8.  Berilgan qiymatlar bo'yicha sana mavjud emas");
         }else{
            console.log("8.  Berilgan sana " + sana + " - noyabr");
         }
         break;
      case 12:
         console.log("8.  Berilgan sana " + sana + " - dekabr");
         break;
      default:
         console.log("8.  Berilgan qiymatlar bo'yicha sana mavjud emas");
         break;
   }
}else{
   console.log("8.  Berilgan qiymatlar bo'yicha sana mavjud emas");
}

// 9. Sanani ifodalovchi 2 ta butun son berilgan. Berilgan sanadan keyingi kunni topuvchi sanani toping

if(sana < 32 && oyRaqami < 13){
   switch(oyRaqami){
      case 1:
         console.log("9.  Berilgan sana " + (sana + 1) + " - yanvar");
         break;
      case 2:
         if(sana > 28){
            console.log("9.  Berilgan qiymatlar bo'yicha sana mavjud emas");
         }else{
            console.log("9.  Berilgan sana " + (sana + 1) + " - fevral");
         }
         break;
      case 3:
         console.log("9.  Berilgan sana " + (sana + 1) + " - mart");
         break;
      case 4:
         if(sana > 30){
            console.log("9.  Berilgan qiymatlar bo'yicha sana mavjud emas");
         }else{
            console.log("9.  Berilgan sana " + (sana + 1) + " - aprel");
         }
         break;
      case 5:
         console.log("9.  Berilgan sana " + (sana + 1) + " - may");
         break;
      case 6:
         if(sana > 30){
            console.log("9.  Berilgan qiymatlar bo'yicha sana mavjud emas");
         }else{
            console.log("9.  Berilgan sana " + (sana + 1) + " - iyun");
         }
         break;
      case 7:
         console.log("9.  Berilgan sana " + (sana + 1) + " - iyul");
         break;
      case 8:
         console.log("9.  Berilgan sana " + (sana + 1) + " - avgust");
         break;
      case 9:
         if(sana > 30){
            console.log("9.  Berilgan qiymatlar bo'yicha sana mavjud emas");
         }else{
            console.log("9.  Berilgan sana " + (sana + 1) + " - sentyabr");
         }
         break;
      case 10:
         console.log("9.  Berilgan sana " + (sana + 1) + " - oktyabr");
         break;
      case 11:
         if(sana > 30){
            console.log("9.  Berilgan qiymatlar bo'yicha sana mavjud emas");
         }else{
            console.log("9.  Berilgan sana " + (sana + 1) + " - noyabr");
         }
         break;
      case 12:
         console.log("9.  Berilgan sana " + (sana + 1) + " - dekabr");
         break;
      default:
         console.log("9.  Berilgan qiymatlar bo'yicha sana mavjud emas");
         break;
   }
}else{
   console.log("9.  Berilgan qiymatlar bo'yicha sana mavjud emas");
}

// 10. Komanda bajarilgandan so'ng robotning so'ngi holatini aniqlang

let komanda = 2;
let tomon = 3;
switch(tomon){
   case 1:
      if(komanda === 1){
         console.log("10. Robotning oxirgi holati g'arbga yo'nalgan");
      }
      if(komanda === 0){
         console.log("10. Robotning oxirgi holati shimolga yo'nalgan");
      }
      if(komanda === 2){
         console.log("10. Robotning oxirgi holati sharqqa yo'nalgan");
      }
      break;
   case 2:
      if(komanda === 1){
         console.log("10. Robotning oxirgi holati sharqqa yo'nalgan");
      }
      if(komanda === 0){
         console.log("10. Robotning oxirgi holati janubga yo'nalgan");
      }
      if(komanda === 2){
         console.log("10. Robotning oxirgi holati g'arbga yo'nalgan");
      }
      break;
   case 3:
      if(komanda === 1){
         console.log("10. Robotning oxirgi holati shimolga yo'nalgan");
      }
      if(komanda === 0){
         console.log("10. Robotning oxirgi holati sharqqa yo'nalgan");
      }
      if(komanda === 2){
         console.log("10. Robotning oxirgi holati janubga yo'nalgan");
      }
      break;
   case 4:
      if(komanda === 1){
         console.log("10. Robotning oxirgi holati janubga yo'nalgan");
      }
      if(komanda === 0){
         console.log("10. Robotning oxirgi holati g'arbga yo'nalgan");
      }
      if(komanda === 2){
         console.log("10. Robotning oxirgi holati shimolga yo'nalgan");
      }
      break;
}

