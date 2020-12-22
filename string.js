// Berilgan satrda elementlar sonini aniqlovchi dastur tuzing

let str = "Anglay olsang, har nafasing baxt...";
let arr = [];
for(let i = 0; i < str.length; i++){
   if(str[i] !== " "){
      arr.push(str[i])
   }
}
console.log(arr.length)
console.log(str.length)


// “toshkent“ so`zidagi asosiy harfni bosh harfda chiqaruvchi funksiya tuzing

let toshkent = "toshkent";
let Toshkent = toshkent[0].toUpperCase();
console.log(Toshkent + toshkent.slice(1))

// Ism, familiyani kichik harflarda kiritganda uni bosh harflarda yozuvchi dastur tuzing

let fullName = "shaHzOd ziYODullaYEv";
let array = fullName.split(" ");
let trueName = "";
for(let i = 0; i < array.length; i++){
   trueName += array[i][0].toUpperCase() + array[i].slice(1).toLocaleLowerCase() + " "
}
console.log(trueName)

// Berilgan vaqtdan keladigan sanagacha qolgan kunlarni aniqlovchi dastur tuzing

let next = new Date(2021, 0, 1);
let previous = new Date();
let qoldi = next - previous;
let kun = Math.floor(qoldi / 1000 / 60 / 60 / 24);
let soat = Math.floor((qoldi / 1000 / 60 / 60) % 24);
let daqiqa = Math.floor((qoldi / 1000 / 60) % 60);
let soniya = Math.floor((qoldi / 1000) % 60);
console.log(kun + " kun " + soat + " soat " + daqiqa + " daqiqa " + soniya + " soniya qoldi");