let person = [
   {name: "Jahongir", age: 24, gender: "male", nation: "uzbek"},
   {name: "Sara", age: 20, gender: "female", nation: "english"},
   {name: "Amelia", age: 33, gender: "female", nation: "english"},
   {name: "Santiago", age: 16, gender: "male", nation: "spanish"},
   {name: "Eloise", age: 54, gender: "female", nation: "french"},
   {name: "Chen", age: 27, gender: "female", nation: "chinese"},
   {name: "Alexandr", age: 41, gender: "male", nation: "czech"},
   {name: "Ahmed", age: 19, gender: "male", nation: "arabic"},
   {name: "Sophia", age: 30, gender: "female", nation: "american"},
   {name: "Aisha", age: 25, gender: "female", nation: "arabic"},
   {name: "Li Jie", age: 56, gender: "male", nation: "chinese"},
   {name: "Josua", age: 43, gender: "male", nation: "french"},
   {name: "Oliver", age: 48, gender: "male", nation: "english"},
   {name: "Anushka", age: 17, gender: "female", nation: "indian"},
   {name: "Fernanda", age: 22, gender: "female", nation: "brazilian"},
   {name: "Dima", age: 18, gender: "male", nation: "russian"},
   {name: "Isabella", age: 36, gender: "female", nation: "spanish"},
   {name: "Benjamin", age: 32, gender: "male", nation: "american"},
   {name: "Carlos", age: 21, gender: "male", nation: "brazilian"},
   {name: "Emily", age: 20, gender: "female", nation: "english"},
   {name: "Lorenzo", age: 46, gender: "male", nation: "italian"},
   {name: "Tomas", age: 22, gender: "male", nation: "slovak"},
   {name: "Bella", age: 24, gender: "female", nation: "italian"},
   {name: "Daniella", age: 34, gender: "female", nation: "czech"},
   {name: "Daleka", age: 35, gender: "female", nation: "slovak"},
   {name: "Vera", age: 44, gender: "female", nation: "russian"},
   {name: "Mia", age: 19, gender: "female", nation: "german"},
   {name: "Ariana", age: 40, gender: "female", nation: "italian"},
   {name: "Leon", age: 30, gender: "male", nation: "german"},
   {name: "Marcello", age: 20, gender: "male", nation: "italian"},
]

let result = new Object();
result.count = 0;
result.name = [];

function filter(age, gender){
   for(let i = 0; i < person.length; i++){
      if(person[i].age < age && person[i].gender === gender){
         result.count += 1;
         result.name.push(person[i].name)
      }
   }
}

filter(30, "female")

console.log(result)