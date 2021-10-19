// hoisting es el levantamiento de las declaraciones
a = 2;
var a;
console.log(a); //2

// el hoisting eleva las declaraciones, al momento de compilar ( accedemos a un valor que previamente no ha sido declarado)

console.log(b);
var b = 2; // undefined => no nos lo devuelve por que js usa hoisting solo declaraciones y no en inicializaciones

console.log(c); // undefined
c = 3;
let c;

nameofDog("fidel");
function nameofDog(name) {
  console.log(name); // nos devuelve fidel
}
