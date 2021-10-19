// un closure es la combinacion de una funcion y el ambito lexico en el que ha sido declarado

// un closure recuerda el ambito donde ha sido creado
// recuerda valores

const moneyBox = (coins1) => {
  var saveCoins = 0;
  saveCoins += coins1;
  console.log(`MoneyBox: ${saveCoins}`);
};
moneyBox(5);
moneyBox(10);

// creamos con la estructura de closure

const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`money box: ${saveCoins}`);
  };
  return countCoins;
};

let myMoney = moneyBox();

myMoney(4); //4
myMoney(6); // 10
myMoney(10); //20 va recordando la asignacion del valor anterior, eso es un closure
