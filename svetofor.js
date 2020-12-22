let qizil = document.getElementById('roundOne')
let sariq = document.getElementById('roundTwo')
let yashil = document.getElementById('roundThree')

function red(){
   setInterval(() => {
      qizil.style.backgroundColor = 'red'
      setTimeout(() => {
         qizil.style.backgroundColor = 'rgb(114, 37, 37)'
      }, 1000);
   }, 2000);
}
function yellow(){
   setInterval(() => {
      sariq.style.backgroundColor = 'yellow'
      setTimeout(() => {
         sariq.style.backgroundColor = 'rgb(112, 112, 49)'
      }, 1000);
   }, 2000);
}
function green(){
   setInterval(() => {
      yashil.style.backgroundColor = 'green'
      setTimeout(() => {
         yashil.style.backgroundColor = 'rgb(29, 73, 29)'
      }, 1000);
   }, 2000);
}

setInterval(red(), 2000);


