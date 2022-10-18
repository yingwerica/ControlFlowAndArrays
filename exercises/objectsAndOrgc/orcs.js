// const adventurer = {
//     name: 'timothy',
//     hitpoints: 10,
//     belongings: ['sword','potion','tums'],
//     companion: {
//         name: 'peanut',
//         type: 'corgi'
//     }
// }

// console.log(adventurer.belongings[0]);

// for (let i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i])
    
// }

// console.log(adventurer.companion.name)

class Character {
    constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || true;
    }
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
    smite () {
      console.log('I smite thee you vile person');
    }
  }
  
  const me = new Character('Arthur', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
  console.log(me);
  me.setHair('red');
  console.log(me);

  class Hobbit extends Character {
    constructor (name, age, eyes, hair) {
      super(name, age, eyes, hair);
      this.skills = ["thievery", "speed", "willpower"];
    }
    steal () {
      console.log('lets get away!');
    }
    greet (otherCharacter) {
      console.log('Greetings ' + otherCharacter);
    }
    smite () {
      super.smite();
      this.steal();
    }
  }
  const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
  console.log(frodo);

  class Factory {
    constructor (company) {
      this.company = company;
      this.cars = [];
    }
    generateCar () {
      const newCar = new Car(this.company, this.cars.length);
      this.cars.push(newCar);
    }
    findCar (index) {
      return this.cars[index];
    }
  }
  const tesla = new Factory('Tesla');
  tesla.generateCar();
  tesla.generateCar();
  tesla.generateCar();
  tesla.generateCar();
  console.log(tesla);
  console.log(tesla.findCar(0));