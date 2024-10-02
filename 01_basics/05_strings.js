const name="hitesh";
const repoCount=50;
// console.log(name+repoCount+" value");  //not a  good practice now a days use `` instead of ""


console.log(`Hello my name is ${name}`);

const gameName= new String('hitesh');
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newstring=gameName.substring(0,4);
console.log(newstring);


const anotherstring=gameName.slice(-8,5);
console.log(anotherstring);

const newStringone="    hitesh    "
console.log(newStringone.trim());

const url="https://hitesh.com/%3432/";
console.log(url.replace('%3432','badaldiya'));

console.log(url.includes('https'));


const rough='asdfasf-asdfasf-basfsas-fasdfasf';
console.log(rough.split('-',2));