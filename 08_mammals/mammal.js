function Mammal(name){
  this.name = name;
  this.offspring =[];
  this.sayHello = function(){return "My name is " + name + ", I'm a Mammal";}
}