function Animal(name, age, kind) {
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false
};

//oink() - returns "oink!" if the instance of an animal is a pig.
Animal.prototype.oink = function() {
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};


//growUp() - a method that increases the age of the animal by one
Animal.prototype.growUp = function () {
  this.age = this.age + 1
};


//feed() - if the animal is awake, return "NOM NOM NOM"
Animal.prototype.feed = function () {
  if (this.awake === true) {
    return "NOM NOM NOM";
  } else {
    return false;
  }
};


//wakeUp() - a method that changes the awake property to true
Animal.prototype.wakeUp = function() {
  if (this.awake === false) {
    return (this.awake = true);
  } else {
    return (this.awake = false);
  }
};


//sleep() - a method that changes the awake property to false
Animal.prototype.sleep = function() {
  if (this.awake === true) {
    return (this.awake = false);
  }
};



module.exports = Animal;
