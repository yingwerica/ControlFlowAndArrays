console.log("loops!")

const array = [];
for ( let i = 1; i < 10; i=i+2) {
    array.push(i);
}
console.log(array);

const newArray = [];
for (let i = 2; i <= 20; i++){
    newArray.push(i*3);
}
console.log(newArray);

const pondArray =["#", "##", "###", "####", "#####", "######", "#######"]
let sign ="";
for (let i = 0; i < pondArray.length; i++) {
    sign = sign + pondArray[i] + "\n";
}
console.log(sign)