// 1. Kvadratning tomoni a berilgan . Uning perimetri aniqlansin

let a = 5;
let kvadratPerimetri  = 4 * a;
console.log('1.  Kvadratning perimetri: ' + kvadratPerimetri);

// 2. Kvadratning tomoni a berilgan. Uning yuzasi aniqlansin

let kvadratYuzasi = Math.pow(a, 2);
console.log('2.  Kvadratning yuzasi: ' + kvadratYuzasi);

// 3. To'g'ri to'rtburchakning tomonlari a va b berilgan. Uning yuzasi va perimetrini aniqlang

let b = 6; 
let tortburchakningYuzi = a * b;
let tortburchakningPerimetri = 2 * (a + b);
console.log("3.  To'rtburchakning yuzi: " + tortburchakningYuzi + " va to'rtburchakning perimetri: " + tortburchakningPerimetri);

// 4.Aylananing uzunligi aniqlansin

let d = 7;
let aylananingUzunligi = Math.floor(Math.PI * d);
console.log("4.  Aylananing uzunligi: " + aylananingUzunligi);

// 5.Kubning hajmi va to'la sirti aniqlansin

let kubningHajmi = Math.pow(a, 3);
let kubningTolaSirti = 6 * Math.pow(a, 2);
console.log("5.  Kubning hajmi: " + kubningHajmi + " va kubning to'la sirti: " + kubningTolaSirti);

// 6.Parallelepipedning hajmi va to'la sirtini toping

let c = 8;
let parallelepipedningHajmi = a * b * c;
let parallelepipedningTolaSirti = 2 * (a * b + b * c + a * c);
console.log("6.  Parallelepipedning hajmi: " + parallelepipedningHajmi + " va parallelepipedning to'la sirti: " + parallelepipedningTolaSirti);

// 7.Doiraning uzunligi va yuzasi aniqlansin

let r = 9;
let doiraningUzunligi = Math.floor(2 * Math.PI * r);
let doiraningYuzasi = Math.floor(Math.PI * Math.pow(r, 2));
console.log("7.  Doiraning uzunligi: " + doiraningUzunligi + " va doiraning yuzasi: " + doiraningYuzasi);

// 8.Ikki sonning o'rta arifmetigini aniqlang

let ortaArifmetigi = (a + b) / 2;
console.log("8.  O'rta arifmetik qiymat: " + ortaArifmetigi);


// 9.Ikkita sonning o'rta geometrigini aniqlang

let ortaGeometrik = Math.sqrt(a * b);
console.log("9.  O'rta geometrigi: " + ortaGeometrik);

// 10.Ikkita sonning yig'indisi, ko'paytmasi va kvadratlari aniqlansin

let yigindi = a + b;
let kopaytma = a * b;
let aNingKvadrati = Math.pow(a, 2);
let bNingKvadrati = Math.pow(b, 2);
console.log("10. Sonlarning yig'indisi: " + yigindi + " , ko'paytmasi: " + kopaytma + " , a ning kvadrati: " + aNingKvadrati + " , b ning kvadrati: " + bNingKvadrati);

// 11.Ikkita sonning modulini aniqlang

let modulA = Math.abs(a);
let modulB = Math.abs(b);
console.log("11. A sonining moduli: " + modulA + " va B ning moduli: " + modulB);

// 12.Uchburchak gipotenuzasi va perimetrini aniqlang

let gipotenuza = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
let uchburchakningPerimetri = a + b + c;
console.log("12. Uchburchakning gipotenuzasi: " + gipotenuza + " va uchburchakning perimetri: " + uchburchakningPerimetri);

// 13.Ikkita aylananing yuzalari ayirmasini aniqlang

let r2 = 7;
let aylanalarYuzalariAyirmasi = Math.PI * (r - r2);
console.log("13. Aylanalar yuzalari ayirmasi: " + aylanalarYuzalariAyirmasi);

// 14.Aylananing yuzasi va radiusi aniqlansin

let l = 62.8;
let aylananingRadiusi = l / (2 * Math.PI);
let aylananingYuzasi = Math.PI * Math.pow(aylananingRadiusi, 2);
console.log("14. Aylananing radiusi: " + aylananingRadiusi + " va yuzasi: " + aylananingYuzasi);

// 15.Aylananing diametr aniqlansin

let aylananingDiametri = Math.sqrt((4 * aylananingYuzasi) / Math.PI);
console.log("15. Aylananing diametri: " + aylananingDiametri);

// 16.Son o'qidagi 2 nuqta orasidagi masofa aniqlansin

let nuqtalarOrasidagiMasofa = Math.sqrt(Math.pow((a - b), 2) + Math.pow((c - d), 2));
console.log("16. Nuqtalar orasidagi masofa: " + nuqtalarOrasidagiMasofa);

// 17.Kesmalar uzunligini toping

let kesmalarUzunligi = Math.sqrt(Math.pow((a - b), 2) + Math.pow((c - d), 2)) + Math.sqrt(Math.pow((r - r2), 2) + Math.pow((l - d), 2));
console.log("17. Kesmalar uzunliklari yig'indisi: " + kesmalarUzunligi);

// 18.Kesmalar uzunligining ko'paytmasi topilsin

let kesmalarKopaytmasi = Math.sqrt(Math.pow((a - b), 2) + Math.pow((c - d), 2)) * Math.sqrt(Math.pow((r - r2), 2) + Math.pow((l - d), 2));
console.log("18. Kesmalar uzunliklari ko'paytmasi: " + kesmalarKopaytmasi);

// 19.To'g'ri to'rtburchakning yuzasi va perimetri

let togriTortburchakPerimetri = 2 * (Math.abs(a - b) + Math.abs(c - d));
let togriTortburchakYuzasi = Math.abs(a - b) * Math.abs(c - d);
console.log("19. To'g'ri to'rtburchakning perimetri: " + togriTortburchakPerimetri + " va yuzasi: " + togriTortburchakYuzasi);

// 20.Tekislikdagi ikki nuqta orasidagi masofa

let nuqtalarOrasidagMasofa = Math.sqrt(Math.pow((a - b), 2) + Math.pow((c - d), 2));
console.log("20. Nuqtalar orasidagi masofa: " + nuqtalarOrasidagMasofa);

// 21.Uchburchakning yuzasini toping

let p = (a + b + d) / 2;
let uchburchakningYuzasi = Math.sqrt(p * (p -a) * (p - b) * (p - c));
console.log("21. Uchburchakning yuzasi: " + uchburchakningYuzasi);

// 22.Berilgan A va B sonlarning qiymatlarini almashtiring

let A = 1;
let B = 2;
[A, B] = [B, A];
console.log("22. A sonining qiymati: " + A + " va B sonining qiymati: " + B);

// 23.Berilgan A, B va C sonlarning qiymati almashtirilsin

let C = 3;
[A, B, C] = [B, C, A];
console.log("23. Berilgan A sonning qiymati: " + A + "  , B sonning qiymati: " + B + " va C sonning qiymati: " + C);

// 24.Berilgan sonlarning qiymatlari almashtirilsin

[A, B, C] = [C, A, B];
console.log("24. Berilgan A sonning qiymati: " + A + "  , B sonning qiymati: " + B + " va C sonning qiymati: " + C);

// 25.Funksiyaning qiymati aniqlansin

let x = 2;
let F = 3 * Math.pow(x, 5) - 6 * Math.pow(x, 2) - 7;
console.log("25. Berilgan funksiyaning qiymati: " + F);

// 26.Funksiyaning qiymati aniqlansin

let F2 = 4 * Math.pow((x-3), 5) - 7 * Math.pow((x -3), 3) + 2;
console.log("26. Berilgan funksiyaning qiymati: " + F2);

// 27.a sonining kvadrati, 4 va 5-darajalarini aniqlang

let sonning_kvadrati, sonnning_4_darajasi, sonning_5_darajasi;
sonning_kvadrati = Math.pow(a, 2);
sonnning_4_darajasi = Math.pow(a, 4);
sonning_5_darajasi = Math.pow(a, 5);
console.log("27. a sonining kvadrati: " + sonning_kvadrati + " , 4-darajasi: " + sonnning_4_darajasi + " va 5-darajasi: " + sonning_5_darajasi);

// 28.a sonining 10 va 15-darajasini aniqlang

let sonning_10_darajasi = Math.pow(a, 10);
let sonning_15_darajasi = Math.pow(a, 15);
console.log("28. a sonining 10-darajasi: " + sonning_10_darajasi + " va 15-darajasi: " + sonning_15_darajasi);

// 29.Burchakning qiymatini radianga o'tkazing

let burchak = 60;
let radian = 180 / burchak;
console.log("29. Burchakning radian qiymati: Pi/" + radian);

// 30.Radianda berilgan burchakni gradusda ifodalang

let radianQiymati = Math.PI / 3;
let burchakQiymati = radianQiymati * (180 / Math.PI);
console.log("30. Radiandagi qiymatning gradusdagi ifodasi: " + burchakQiymati);

// 31.Farengeytdan gradus selsiyga o'tkazing

let farengeyt = 40;
let selsiy = (farengeyt - 32) * (5 / 9);
console.log("31. Gradus selsiy: " + selsiy);

// 32.Selsiydan farengeytga o'tkazing

let gradusSelsiy = 10;
let gradusFarengeyt = gradusSelsiy * (9 / 5) + 32;
console.log("32. Gradus farengeyt: " + gradusFarengeyt);


// 33.X kg konfet A so'm turadi. 3 kg konfet qancha turishini aniqlang

let vazni = 10;
let narxi = 20;
let uchKilogramm = (narxi / vazni) * 3;
console.log("33. 3 kilogramm konfetning narxi: " + uchKilogramm + " so'm");

// 34.Shokolad konfetdan qancha qimmat turishini aniqlang

let shokoladningVazni = 4;
let shokoladningNarxi = 2;
let konfetningVazni = 6;
let konfetningNarxi = 12;
let narxlarFarqi = konfetningNarxi / konfetningVazni - shokoladningNarxi / shokoladningVazni;
console.log("34. Konfet shokoladddan " + narxlarFarqi + " so'm qimmat");

// 35.Qayiqning yurgan yo'lini toping

let qayiqningTezligi = 15;
let oqimningTezligi = 5;
let oqimBoyichaHarakatVaqti = 0.5;
let oqimgaQarshiHarakatVaqti = 1;
let qayiqningYoli = (15 + 5) * 0.5 + (15 - 5) * 1;
console.log("35. Qayiqning yurgan yo'li: " + qayiqningYoli);

// 36.Avtomobillar orasidagi masofani aniqlang

let birinchiTezlik = 60;
let ikkinchiTezlik = 70;
let vaqt = 2;
let boshlangichMasofa = 100;
let oradagiMasofa = boshlangichMasofa + (birinchiTezlik + ikkinchiTezlik) * vaqt;
console.log("36. Avtomobillarning orasidagi masofa: " + oradagiMasofa); 

// 37.Avtomobillar orasidagi masofani aniqlang

let oradagiMasofa2 = boshlangichMasofa - (birinchiTezlik + ikkinchiTezlik) * vaqt;
console.log("37. Avtomobillarning orasidagi masofa: " + oradagiMasofa2); 

// 38.To'g'ri chiziq tenglamasining yechimini hisoblang

let togriChiziqTenglamasi = A * x + B;
console.log("38. Tenglamaning yechimi: " + togriChiziqTenglamasi);

// 39.Kvadrat tenglamaning yechimlarini hisoblang: Ax2 + Bx - C = 0

let diskreminantIldizi = Math.sqrt(Math.pow(B, 2) - 4 * A * (C - 2 * C));
let birinchiYechim = (B - 2 * B) + diskreminantIldizi / (2 * A);
let ikkinchiYechim = (B - 2 * B) - diskreminantIldizi / (2 * A);
console.log("39. Kvadrat tenglamaning birinchi javobi: " + birinchiYechim + " va ikkinchi javobi: " + ikkinchiYechim);

// 40.Tenglamalar sistemasining yechimlarini aniqlang

let D = (A * B - a * b);
let Y = (A * C - a * c) / D;
let X = (C * B - c * b) / D;
console.log("40. D ning qiymati: " + D + " , Y ning qiymati: " + Y + " va X ning qiymati: " + X);