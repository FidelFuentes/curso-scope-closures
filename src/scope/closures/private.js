const person = () => {
  var saveName = "name";
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

//console.log(saveName); // me dice que savename no esta definida
newPerson = person();
console.log(newPerson.getName());
newPerson.setName("oscar");
console.log(newPerson.getName());
