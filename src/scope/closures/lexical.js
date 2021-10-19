//asignamos valores y reasignamos

const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};
// el ambito lexico es las funciones que se ejecutan utilizando las cadenas donde estan asignadas

const myCount = buildCount(1); // trabajamos con el alcnce propio de esta function

myCount();
myCount();
myCount();

const myOtherCount = buildCount(10); // al igual que con esta, no se mezcla la memoria con la anterior
myOtherCount();
myOtherCount();
