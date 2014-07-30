function Mammal(name){
  this.name = name;
  this.offspring =[];
  this.sayHello = function(){return "My name is " + name + ", I'm a Mammal";}
  this.haveBaby = function(){
    var baby = new Mammal("Baby " + this.name)
    this.offspring.push(baby);
    return baby;
  } // not sure what this is asking
}

function Cat(name, color){
  this.name = name;
  this.color = color;
}

// Cat.prototype = Object.create(Mammal.prtotype);
// Cat.prototype.constructor = Mammal;

Cat.prototype = new Mammal();
Cat.prototype.constructor = Cat;
Cat.prototype.haveBaby = function(color){
  var baby = new Mammal("Baby " + this.name)
  baby.color = color;
  this.offspring.push(baby);
  return baby;
}
