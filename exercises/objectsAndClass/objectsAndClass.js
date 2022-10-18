/*const cat= {
    name: 'chester',
    age: 8,
    favortite: 'canned_food',
    french: false,
    solveRubiksCube: false,
    name: "kaka",
}
console.log(cat);*/


/*const obj = {
	salutation: 'hi',
	count:4
}
if (obj.salutation === "hi") {
	console.log('ok');
}

for (let i = 0; i < obj.count; i++) {
	console.log(i);
}*/

class Vehicle {
    constructor(vin, make, model) {
        this.vin = vin;
        this.make = make;
        this.model = model;
    }
}

const car = new Vehicle('A1234', 'aToyota','Camry');
console.log(car);


