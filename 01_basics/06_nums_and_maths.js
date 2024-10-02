const score=400
const score1=new Number(500);
console.log(score)
console.log(score1)
console.log(score1.toString().length);
console.log(score1.toFixed(1));

const otherNumber=23.8966;
console.log(otherNumber.toPrecision(4));
const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++  Maths  ++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5452));
console.log(Math.ceil(4.5435));
console.log(Math.floor(4.5));


console.log((Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);