var Car = function(model, noise) {
  this.model = model;
  this.noise = noise;
  this.number_wheels = 4;
};

  Car.prototype.makeNoise = function(){
    console.log(this.noise);
  };

var opel = new Car("Astra","Brumm");
var fiat = new Car("Punto", "RumRumRum");
var ferrari = new Car("Inpreza","BRRROOOMMM");

opel.makeNoise();
fiat.makeNoise();
console.log(opel.model);

  Car.prototype.makeNoise = function(){
    console.log(this.noise + "!!!!!");
  };

opel.makeNoise();
fiat.makeNoise();

