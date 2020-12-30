// 1. Santimetrni metrga aylantiring

let santimetr = 123;
let metr = santimetr / 100;
console.log("1.  123 santimetr: " + metr + " metr");

// 2. Kilogramni tonnaga aylantiring

let kilogram = 12345;
let tonna = kilogram / 1000;
console.log("2.  12345 kilogram: " + tonna + " tonna");

// 3. Faylning hajmini kilobaytlarda ifodalang

let bayt = 4096;
let kilobayt = bayt / 1024;
console.log("3.  4096 bayt " + kilobayt + " kilobayt");

// 4. A kesmada B kesma necha marta joylashgan 

let A = 123;
let B = A / 3;
console.log("4.  A kesmada B kesmani " + B + " marta joylashtirish mumkin");

// 5. A kesmada C kesmaning joylashmay qolgan qismini aniqlang

let C = 4;
let qolganQismi = A%C;
console.log("5.  Joylashmay qolgan qismning uzunligi " + qolganQismi);

// 6. Berilgan raqamni o'nliklar va birliklarga ajrating

let son = 78;
let onlarXonasi = Math.floor(78 / 10);
let birliklarXonasi = son%10;
console.log("6.  O'nlar xonasidagi raqam: " + onlarXonasi + " birliklar xonasidagi raqam: " + birliklarXonasi);

// 7. Ikki xonali sonlarning raqamlari yig'indisini aniqlang

let raqamlarYigindisi = onlarXonasi + birliklarXonasi;
console.log("7.  Raqamlar yig'indisi: " + raqamlarYigindisi);

// 8. Ikki xonali sonning raqamlari o'rni almashishidan hosil bo'lgan sonni toping

console.log("8.  Raqamlari almashishidan hosil bo'lgan son " + birliklarXonasi + onlarXonasi);

// 9. 3 xonali sonning yuzlar xonasidagi raqamni aniqlang

let uch_xonali_son = 987;
let yuzlar_xonasidagi_raqam = Math.floor(uch_xonali_son / 100);
console.log("9.  Yuzlar xonasidagi raqam: " + yuzlar_xonasidagi_raqam);

// 10. Uch xonali sonning avval birliklar xonasidagi so'ngra yuzliklar xonasidagi raqamni chiqaring

let birlar_xonasidagi_raqam = Math.floor(uch_xonali_son % 10);
console.log("10. Uch xonali sonning birlar xonasidagi raqam: " + birlar_xonasidagi_raqam + " , yuzliklar xonasidagi raqam: " + yuzlar_xonasidagi_raqam);

// 11. Uch xonali sonning raqamlari yig'indisini aniqlang

let onlar_xonasidagi_raqam = (Math.floor(uch_xonali_son % 100) - birlar_xonasidagi_raqam) / 10;
let yigindi = onlar_xonasidagi_raqam + yuzlar_xonasidagi_raqam + birlar_xonasidagi_raqam;
console.log("11. Uch xonali sonning raqamlari yig'indisi: " + yigindi);

// 12. Uch xonali sonning raqamlari o'rni almashgandan hosil bo'lgan sonni aniqlang

console.log("12. Raqamlar o'nrni almashgandan hosil bo'lgan son: " + birlar_xonasidagi_raqam + onlar_xonasidagi_raqam + yuzlar_xonasidagi_raqam);

// 13. Uch xonali sonning chap tarafidagi raqamni o'ng tarafidan yozishdan hozil bo'lgan sonni toping

console.log("13. Hosil bo'lgan son: " + onlar_xonasidagi_raqam + birlar_xonasidagi_raqam + yuzlar_xonasidagi_raqam);

// 14. Uch xonali sonning o'ng tarafidagi raqamni chap tarafidan yozishdan hozil bo'lgan sonni toping

console.log("14. Hosil bo'lgan son: " + birlar_xonasidagi_raqam + yuzlar_xonasidagi_raqam + onlar_xonasidagi_raqam);

// 15. Uch xonali sonning o'nliklar va yuzliklar xonasidagi raqam almashishidan hosil bo'lgan sonni toping

console.log("15. Hosil bo'lgan son: " + onlar_xonasidagi_raqam + yuzlar_xonasidagi_raqam + birlar_xonasidagi_raqam);

// 16. Uch xonali sonning o'nliklar va birliklar xonasidagi raqam almashishidan hosil bo'lgan sonni toping

console.log("16. Hosil bo'lgan son: " + yuzlar_xonasidagi_raqam + birlar_xonasidagi_raqam + onlar_xonasidagi_raqam);

// 17. 999 dan katta sonning yuzliklar xonasidagi raqamni aniqlang

let son2 = 12345;
let butunQism = Math.floor(son2 / 100);
let yuzlarXonasidagiRaqam = butunQism % 10;
console.log("17. Yuzlar xonasidagi raqam: " + yuzlarXonasidagiRaqam);

// 18. 999 dan katta sonning mingliklar xonasidagi raqamni aniqlang

let butunQism2 = Math.floor(son2 / 1000);
let minglarXonasidagiRaqam = butunQism2 % 10;
console.log("18. Minglar xonasidagi raqam: " + minglarXonasidagiRaqam);

// 19. Kun boshidan boshlab o'tgan daqiqalar sonini aniqlang

let soniyalar = 80000;
let daqiqalar = Math.floor(soniyalar / 60);
console.log("19. Kun boshidan boshlab o'tgan daqiqalar: " + daqiqalar);

// 20. Kun boshidan boshlab o'tgan soatlar sonini aniqlang

let soatlar = Math.floor(soniyalar / 3600);
console.log("20. Kun boshidan boshlab o'tgan soatlar: " + soatlar);

// 21. Kun boshidan boshlab o'tgan daqiqa va soniyalar sonini aniqlang

let soniyalar2 = soniyalar % 60;
console.log("21. Kun boshidan boshlab " + daqiqalar + " daqiqa va " + soniyalar2 + " soniya o'tdi");

// 22. Kun boshidan boshlab o'tgan soatlar va soniyalar sonini aniqlang

let soniyalar3 = soniyalar % 3600;
console.log("22. Kun boshidan boshlab " + soatlar + " soat va " + soniyalar3 + " soniya o'tdi");

// 23. Kun boshidan boshlab o'tgan soat, minut va soniyalar soni qancha

let daqiqalar2 = Math.floor(soniyalar3 / 60 );
let soniyalar4 = soniyalar3 % 60;
console.log("23. Kun boshidan boshlab " + soatlar + " soat, " + daqiqalar2 + " daqiqa va " + soniyalar4 + " soniya o'tdi");

// 24. 0-yakshanba 1-dushanba 2-seshanba 3-chorshanba 4-payshanba 5-juma 6-shanba. Tanlangan K kun qaysi kunga to'g'ri keladi

let kunRaqami = 200;
let kun = kunRaqami % 7;
let haftaKuni = ['dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba', 'yakshanba'];
console.log("24. Tanlangan kun " + haftaKuni[kun]);

// 25. 0-yakshanba 1-dushanba 2-seshanba 3-chorshanba 4-payshanba 5-juma 6-shanba. Tanlangan K kun qaysi kunga to'g'ri keladi

let haftaKuni2 = ['payshanba', 'juma', 'shanba', 'yakshanba', 'dushanba', 'seshanba', 'chorshanba'];
console.log("25. Tanlangan kun " + haftaKuni2[kun]);

// 26. 0-yakshanba 1-dushanba 2-seshanba 3-chorshanba 4-payshanba 5-juma 6-shanba. Tanlangan K kun qaysi kunga to'g'ri keladi

let haftaKuni3 = ['seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba', 'yakshanba', 'dushanba'];
console.log("26. Tanlangan kun " + haftaKuni3[kun]);

// 27. 0-yakshanba 1-dushanba 2-seshanba 3-chorshanba 4-payshanba 5-juma 6-shanba. Tanlangan K kun qaysi kunga to'g'ri keladi

let haftaKuni4 = ['yakshanba', 'dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba'];
console.log("27. Tanlangan kun " + haftaKuni4[kun]);

// 28. 0-yakshanba 1-dushanba 2-seshanba 3-chorshanba 4-payshanba 5-juma 6-shanba. Tanlangan K kun qaysi kunga to'g'ri keladi

let haftaKuni5 = ['yakshanba', 'dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba'];
console.log("28. Tanlangan kun " + haftaKuni[kun]);

// 29. Tomoni A va B bo'lgan to'g'ri to'rtburchakka tomoni C bo'lgan kvadrat nechta joylashadi va qancha joy qoladi

let tortburchakningATomoni = 20;
let tortburchakningBTomoni = 10;
let kvadratningTomoni = 7;
let kvadratSoni = Math.floor(tortburchakningATomoni / kvadratningTomoni) * Math.floor(tortburchakningBTomoni / kvadratningTomoni);
let qolganQismiYuzasi = (tortburchakningATomoni * tortburchakningBTomoni) - kvadratSoni * (kvadratningTomoni ** 2);
console.log("29. To'g'ri to'rtburchakka joylashishi mumkin bo'lgan kvadratlar soni: " + kvadratSoni + " va qolgan qismning yuzasi: " + qolganQismiYuzasi);

// 30. Berilgan yilning qaysi yuz yillikka kirishini aniqlang

let berilganYil = 1995;
let yuzYillik = Math.floor(berilganYil / 100) + 1;
console.log("30. Berilgan yil " + yuzYillik + " - yuz yillikning boshi");