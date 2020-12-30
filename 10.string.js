// Berilgan satrda elementlar sonini aniqlovchi dastur tuzing

let str1 = "Anglay olsang, har nafasing baxt...";
let obj = new Object();
obj.string = "";
for(let i = 0; i < str1.length; i++){
   if(str1[i] !== " "){
      obj.string += str1[i];
   }
}
console.log(obj.string.length)


// “toshkent“ so`zidagi asosiy harfni bosh harfda chiqaruvchi funksiya tuzing

let toshkent = "toshkent";
let Toshkent = toshkent[0].toUpperCase();
console.log(Toshkent + toshkent.slice(1))

// Ism, familiyani kichik harflarda kiritganda uni bosh harflarda yozuvchi dastur tuzing

let str = " shaHzOd ziYODullaYEv "
function upperCase(name1){
   let name = (name1.trim()).toLowerCase();
   let firstName = name.slice(0, name.indexOf(' '));
   let lastName = name.slice(name.indexOf(' ') + 1, name.length);
   let one = firstName[0].toUpperCase() + firstName.slice(1);
   let two = lastName[0].toUpperCase() + lastName.slice(1);
   return console.log(new Object({
      result: one + " " + two
   }))
}
upperCase(str)
// Berilgan vaqtdan keladigan sanagacha qolgan kunlarni aniqlovchi dastur tuzing

let next = new Date(2021, 0, 1);
let previous = new Date();
let qoldi = next - previous;
let kun = Math.floor(qoldi / 1000 / 60 / 60 / 24);
let soat = Math.floor((qoldi / 1000 / 60 / 60) % 24);
let daqiqa = Math.floor((qoldi / 1000 / 60) % 60);
let soniya = Math.floor((qoldi / 1000) % 60);
console.log(kun + " kun " + soat + " soat " + daqiqa + " daqiqa " + soniya + " soniya qoldi");