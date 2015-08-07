var Animal = require("./animal");

function Zoo(name, location) {
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];
}


//changeLocation() - a method that updates the location of the zoo
Zoo.prototype.changeLocation = function(location) {
  this.location = location;
};


//open() - a method that changes the status to "open"
Zoo.prototype.open = function() {
  if (this.status === "closed") {
    return (this.status = "open");
  }
};


//close() - open - a method that changes the status to "closed"
Zoo.prototype.close = function() {
  if (this.status === "open") {
    return (this.status = "closed");
  }
};


//isOpen() - a method that returns "Open!" if the zoo is not closed
Zoo.prototype.isOpen = function () {
  if (this.status !== "closed") {
    return "Open!";
  }
}


// addAnimal() - a method that adds an animal to the animals array ONLY if the zoo is open, the animal is an instance of the Animal class AND the animal is not already in the animals array.
Zoo.prototype.addAnimal = function(animal) {
  if (this.status === "open") {
    if (this.animals.indexOf(animal) === -1 && animal instanceof Animal) {
        this.animals.push(animal);
        return true;
    }
  } else {
    return false;
  }
};


//removeAnimal() - a method that removes an animal from the animals array ONLY if the zoo is open
Zoo.prototype.removeAnimal = function(animal){
  if(this.status === 'open' && this.animals.indexOf(animal) !== -1) {
    this.animals.splice(this.animals.indexOf(animal, 1));
    return true;
  }
  else {
    return false;
  }
}



module.exports = Zoo;


