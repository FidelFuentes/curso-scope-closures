const fruits = () => {
  if (true) {
    var fruits1 = "apple"; // si se puede acceder fuera del bloque
    let fruits2 = "banana"; // no se puede fuera
    const fruits3 = "kiwi"; // no se puede
    console.log(fruits2, fruits3);
  }
  console.log(fruits1);
};
fruits();

let x = 1;

{
  let x = 2;
  console.log(x); //2
}

console.log(x); //1

var x1 = 1;

{
  var x1 = 2;
  console.log(x1); //2
}

console.log(x1); //2 el valor asignado a x se transmite a la variable global a diferencia del let que no pasa

const anotherFuntion = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i); // nos va a mostrar diez veces el numero diez
    }, 1000);
  }
};

anotherFuntion();

const anotherFuntion1 = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i); // nos va a mostrar  0 1 2 3 4 5 6 ...
    }, 1000);
  }
};

anotherFuntion1();
// esta es la diferencia de var y let a la hora de estar un dentro de un bloque de codigo
