// Object ma'lumotlarini filtrlash

// ------------------------------------------------------------------------------------------------------

let person = [
   {firstfirstName: "Jahongir", age: 24, gender: "male", nation: "uzbek"},
   {firstName: "Sara", age: 20, gender: "female", nation: "english"},
   {firstName: "Amelia", age: 33, gender: "female", nation: "english"},
   {firstName: "Santiago", age: 16, gender: "male", nation: "spanish"},
   {firstName: "Eloise", age: 54, gender: "female", nation: "french"},
   {firstName: "Chen", age: 27, gender: "female", nation: "chinese"},
   {firstName: "Alexandr", age: 41, gender: "male", nation: "czech"},
   {firstName: "Ahmed", age: 19, gender: "male", nation: "arabic"},
   {firstName: "Sophia", age: 30, gender: "female", nation: "american"},
   {firstName: "Aisha", age: 25, gender: "female", nation: "arabic"},
   {firstName: "Li Jie", age: 56, gender: "male", nation: "chinese"},
   {firstName: "Josua", age: 43, gender: "male", nation: "french"},
   {firstName: "Oliver", age: 48, gender: "male", nation: "english"},
   {firstName: "Anushka", age: 17, gender: "female", nation: "indian"},
   {firstName: "Fernanda", age: 22, gender: "female", nation: "brazilian"},
   {firstName: "Dima", age: 18, gender: "male", nation: "russian"},
   {firstName: "Isabella", age: 36, gender: "female", nation: "spanish"},
   {firstName: "Benjamin", age: 32, gender: "male", nation: "american"},
   {firstName: "Carlos", age: 21, gender: "male", nation: "brazilian"},
   {firstName: "Emily", age: 20, gender: "female", nation: "english"},
   {firstName: "Lorenzo", age: 46, gender: "male", nation: "italian"},
   {firstName: "Tomas", age: 22, gender: "male", nation: "slovak"},
   {firstName: "Bella", age: 24, gender: "female", nation: "italian"},
   {firstName: "Daniella", age: 34, gender: "female", nation: "czech"},
   {firstName: "Daleka", age: 35, gender: "female", nation: "slovak"},
   {firstName: "Vera", age: 44, gender: "female", nation: "russian"},
   {firstName: "Mia", age: 19, gender: "female", nation: "german"},
   {firstName: "Ariana", age: 40, gender: "female", nation: "italian"},
   {firstName: "Leon", age: 30, gender: "male", nation: "german"},
   {firstName: "Marcello", age: 20, gender: "male", nation: "italian"}
]

let result = new Object({
   count : 0,
   firstName: []
});

function filter(age, gender){
   for(let i = 0; i < person.length; i++){
      if(person[i].age < age && person[i].gender === gender){
         result.count += 1;
         result.firstName.push(person[i].firstName)
      }
   }
}

filter(23, "female")

console.log(result)


// --------------------------------------------------------------------

let str1 = "Anglay olsang, har nafasing baxt...";
class String{
   constructor(str){
      this.string = str;
   }
   Length(){
      return this.string.length;
   }
}

let Str = new String(str1);
console.log(Str.Length())

// --------------------------------------------------------------------

let toshkent = "toShKent";
class tosh{
   constructor(abc){
      this.toshkent = abc;
   }
   upperCase(){
      let one = this.toshkent.toLowerCase();
      return one[0].toUpperCase() + one.slice(1);
   }
}

let upperCase = new tosh(toshkent);
console.log(upperCase.upperCase())

// ---------------------------------------------------------------------

let str = " shaHzOd ziYODullaYEv "
class trueName{
   constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
   }
   upperCase(){
      let name = (this.firstName.trim()).toLowerCase();
      let Name = name.slice(0, name.indexOf(' '));
      let Last = name.slice(name.indexOf(' ') + 1, name.length);
      let one = Name[0].toUpperCase() + Name.slice(1);
      let two = Last[0].toUpperCase() + Last.slice(1);
      return one + " " + two
   }
}

let Case = new trueName(str);
console.log(Case.upperCase())

// --------------------------------------------------------------------

class sana{
   constructor(yil, oy, sana){
      this.years = yil;
      this.month = oy;
      this.date = sana;
   }
   qolganVaqt(){
      let next = new Date(this.years, this.month, this.date);
      let previous = new Date();
      let qoldi = next - previous;
      let kun = Math.floor(qoldi / 1000 / 60 / 60 / 24);
      let soat = Math.floor((qoldi / 1000 / 60 / 60) % 24);
      let daqiqa = Math.floor((qoldi / 1000 / 60) % 60);
      let soniya = Math.floor((qoldi / 1000) % 60);
      return kun + " kun " + soat + " soat " + daqiqa + " daqiqa " + soniya + " soniya qoldi";
   }
}

let qoldi = new sana(2021, 0, 1);
console.log(qoldi.qolganVaqt())