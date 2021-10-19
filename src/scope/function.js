const fruits = () => {
  var fruit = "apple";
  console.log(fruit);
};
fruits(); // me devuelve apple
console.log(fruit); // no se puede acceder al ser definida dentro de la funcion

const anotherFuntion = () => {
  var x = 1;
  var x = 2; // var si me reasigna el valor
  //let y = 1;
  let y = 2; // me va a decir que y no puede ser igual a dos por que no puede ser reasignada
  console.log(x, y);
};
anotherFuntion();
