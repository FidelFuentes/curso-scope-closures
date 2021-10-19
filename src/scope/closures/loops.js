const anotherFuntion1 = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFuntion1();
// con var nos da el ultimo valor que tiene asignada la variable var
// podemos crear un closure de forma involuntaria, tenemos que tener cuidado
