var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation("Denver");
      expect(zoo.location).toEqual("Denver")
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open();
      expect(zoo.status).toEqual("open")
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.status = "open";
      expect(zoo.status).toEqual("open")
    });
    it('should see if the zoo is closed', function(){
      zoo.isOpen();
      zoo.status = "closed";
      expect(zoo.status).toEqual("closed")
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([])
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.status = "open";
      zoo.addAnimal(lion);
      expect(zoo.animals).toContain(lion);
    });
    it('should add an animal to the animals array', function(){
      goat = new Animal("billy", 5, "goat")
      zoo.animals = [];
      zoo.status = "open"
      zoo.addAnimal(goat);
      expect(zoo.animals.length).toBe(1);
    });

    it('should only add instances of animals', function(){
      goat = new Animal("billy", 5, "goat")
      zoo.status = "open"
      zoo.addAnimal(goat);
      expect(zoo.animals).toContain(goat);
    });

    it('should not add duplicates', function(){
      zoo.animals = [goat, lion, pig]
      expect(zoo.addAnimal(goat)).toBe(false);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.status = "open"
      zoo.animals = [goat, lion, pig]
      expect(zoo.removeAnimal(goat)).toBe(true);
    });
  });
});


