//function declaration
/*function one() {
    return "one"
}
console.log(one()); */


/*const two = () => {
    return 2;
}
console.log(two()); */
// const shortenedTwo = () => 2;



/*function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 2);
}
console.log(areBothEven(3, 7));

 

let maria = getDevObject("Maria", "HTML", "CSS", "JavaScript", "jQuery");

function getDevObject(name) {
  let skills = [];
  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }
  return { devName: name, jobSkills: skills };
}
console.log(getDevObject(maria)) */




const areaOfTriangle= (width, height) => {
    let area= width*height/2;
    console.log(`The area of a triangle with a width of ${width} and a height of ${height} is ${area} aquare units.`);
}

areaOfTriangle(3, 4)

const plantHasWater=(planet) => {
    if (planet ==="Earth" || planet ==="Mars"){
        return true;
    } else {
        return false;
    }
    
} 
console.log(plantHasWater('Earth'));