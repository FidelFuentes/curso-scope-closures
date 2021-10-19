var a = "hello";

function hello() {
  let b = "hello world";
  const c = "hello world!";
  if (true) {
    let d = "hello world!!";
    debugger;
  }
}

hello();

// un closure es la combinacion de una funcion y el ambito lexico en el que ha sido declarado

// un closure recuerda el ambito donde ha sido creado
// recuerda valores

const moneyBox = () => {
  debugger;
  var saveCoins = 0;
  const countCoins = (coins) => {
    debugger;
    saveCoins += coins;
    console.log(`money box: ${saveCoins}`);
  };
  return countCoins;
};

let myMoney = moneyBox();

myMoney(4);
myMoney(6);
myMoney(10);

// debugger nos permite entender como se esta ejecutando nuestro codigo
