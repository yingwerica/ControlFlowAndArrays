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