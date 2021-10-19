var hello = "hello";
let world = "hello world";
let world = "he";
const helloworld = "hello world";
// nos permite acceder de forma global

// scope es el alcance de las variables que asignamos

const anotherFuntion = () => {
  console.log(hello);
  console.log(world);
  console.log(helloworld);
};

anotherFuntion();
// todo esto es scopre global , independientemente  si es const var o let

// con let y const no podemos volver a asignar un valor a diferencia de var

const helloworld = () => {
  globalVar = "im global";
};

helloworld();
console.log(globalVar);
// mala practica por que puedo acceder de foma global

const otherFuntion = () => {
  var localvar = (globalVar = "im global");
};
otherFuntion();
console.log(globalVar);

// tengo que llamar a la funcion para poder realizar el console.log
