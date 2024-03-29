class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOzn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);


boundTurnOn(); // should say "Turning on a lamp"


Function.prototype.myBind = function(context){
  
  return () =>{
    this.apply(context);
  };
};



const myBoundTurnOn = turnOn.myBind(lamp);
myBoundTurnOn(); // should say "Turning on a lamp"