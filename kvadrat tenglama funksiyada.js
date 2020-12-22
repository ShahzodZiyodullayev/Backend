function kvadratTenglama(param1, param2, param3){
   let x1;
   let x2;
   let diskreminant = Math.pow(param2, 2) - 4 * param1 * param3;
   if(diskreminant < 0){
      console.log("tenglaman yechimga ega emas");
   }else if(diskreminant === 0){
      x1 = - param2 / (2 * param1);
      console.log("tenglamaning yechimi: " + x);
   }else{
      x1 = (- param2 + Math.sqrt(diskreminant)) / (2 * param1);
      x2 = (- param2 - Math.sqrt(diskreminant)) / (2 * param1);
      console.log("tenglamaning yechimlari: x1 " + x1 + " va x2 " + x2);
   }
}

kvadratTenglama(1, 1, -6)