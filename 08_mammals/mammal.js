function Mammal(name){
  this.name = name;
  this.offspring =[];
  // this.sayHello = function(){return "My name is " + this.name + ", I'm a Mammal";
  // }
  // this.haveBaby = function(){
  //   var baby = new Mammal("Baby " + this.name)
  //   this.offspring.push(baby);
  //   return baby;
  // }
}

Mammal.prototype.sayHello = function(){
  return "My name is " + this.name + ", I'm a Mammal";
}

Mammal.prototype.haveBaby = function(){
    var baby = new Mammal("Baby " + this.name)
    this.offspring.push(baby);
    return baby;
  }

function Cat(name, color){
  //this.name = name;
  Mammal.call(this, name);
  this.color = color;
}

// Cat.prototype = new Mammal();
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;
  // using constructor will ensure that the prototype is not Mammal
Cat.prototype.haveBaby = function(color){
  var baby = new Cat("Baby " + this.name)
  baby.color = color;
  this.offspring.push(baby);
  return baby;
}
