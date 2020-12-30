const person = [
   {firstName: "Jahongir", age: 24, gender: "male", nation: "uzbek"},
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

// ------------------------------------------------------------------------------------------------------------
// filter funksiyasi yordamida ro'yxatni saralash
// ------------------------------------------------------------------------------------------------------------

// let personFilter = person.filter(item => item.age > 45);
// console.log(new Object({
//    personFilterLength: personFilter.length,
//    personFilter
// }))

// ------------------------------------------------------------------------------------------------------------
// class va for loopdan foydalangan holda ro'yxatni saralash
// ------------------------------------------------------------------------------------------------------------

// class saralash{
//     constructor(list, fGender, pAge){
//       this.list = list
//       this.fGender = fGender
//       this.pAge = pAge
//    }
//    byAge(){
//       let result = 0;
//       let arr = [];
//       for(let i = 0; i < this.list.length; i++){
//          if(this.list[i].age > this.pAge && this.list[i].gender == this.fGender){
//             result += 1;
//             arr.push(this.list[i].firstName);
//          }
//       }
//       return console.log(new Object({
//          result,
//          Names: arr
//       }))
//    }
// }
   
// const run = new saralash(person, "female", 40);
// run.byAge()
   
// ------------------------------------------------------------------------------------------------------------
// class va filter funksiyasidan foydalangan holda ro'yxatni saralash
// ------------------------------------------------------------------------------------------------------------
   
// class xarita{
//    constructor(one, two){
//       this.one = one
//       this.two = two
//    }
//    byAge(){
//       const yosh = this.one.filter(item => item.age < this.two);
//       return console.log(new Object({
//          Soni: yosh.length,
//          Royxat: yosh
//       }))
//    }
// }

// const per = new xarita(person, 25);
// per.byAge()

// ------------------------------------------------------------------------------------------------------------
// class va find funksiyasidan foydalangan holda ro'yxatni saralash
// ------------------------------------------------------------------------------------------------------------

// class top{
//    constructor(list, one){
//       this.list = list
//       this.one = one
//    }
//    byGender(){
//       const jins = this.list.find(item => item.gender == this.one);
//       return console.log(new Object({
//          Royxat: jins
//       }))
//    }
// }

// const jinsOrqali= new top(person, "female");
// jinsOrqali.byGender()

// ------------------------------------------------------------------------------------------------------------
// class va map funksiyasi yordamida ro'yxatdan yangi ro'yxat shakllantirish
// ------------------------------------------------------------------------------------------------------------

// class maps{
//    constructor(list){
//       this.list = list
//    }
//    byMap(){
//       const xarita = this.list.map(item => item.age * 2);
//       return console.log(new Object({
//          Yosh: xarita
//       }))
//    }
// }

// const yangiMap = new maps(person);
// yangiMap.byMap();

// ------------------------------------------------------------------------------------------------------------
// class va some funksiyasi orqali ro'yxatni saralash
// ------------------------------------------------------------------------------------------------------------

// class yoki{
//    constructor(list, one){
//       this.list = list
//       this.one = one
//    }
//    bySome(){
//       const yokiOrqali = this.list.some(item => item.age < this.one);
//       return console.log(yokiOrqali);
//    }
// }

// const yokiFunc = new yoki(person, 17);
// yokiFunc.bySome();

// ------------------------------------------------------------------------------------------------------------
// class va every funksiyasi yordamida ro'yxatni saralash
// ------------------------------------------------------------------------------------------------------------

// class va{
//    constructor(list, one){
//       this.list = list
//       this.one = one
//    }
//    byVa(){
//       const vaOrqali = this.list.every(item => item.age < this.one);
//       return console.log(vaOrqali);
//    }
// }

// const vaFunc = new va(person, 57);
// vaFunc.byVa();