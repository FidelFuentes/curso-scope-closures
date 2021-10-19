const helloWorld = () => {
  const hello = "hello";
  console.log(hello);
};

helloWorld();
console.log(hello); // no se puede acceder por que esta definida localmente

var scope = "im global";

const functionScope = () => {
  var scope = "im local";
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
// ambito lexico , tiene acceso a esa variable sobre la funcion que estoy trabajando
console.log(scope);
// no rescribe la variable global
