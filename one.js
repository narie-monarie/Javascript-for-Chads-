let num = 12.1;
let strNum = 'fd10.4';
// console.log(Number(strNum));
// console.log(parseInt(strNum));

// console.log(Math.pow(2,3));
// console.log(`The result is ${10 + 20}`)


//TODO: OBJECTS

const person = {
  name : 'Conor',
  course: 'FrontEnd Expert',
};

for(const key in person){
  // console.log(key, person[key])
}
//JSON to object = JSON.parse()
//Object to JSON = JSON.stringify()

person.name = 'Mutiso';
// console.log(JSON.stringify(person));

const map = new Map();
map.set(123, 'hello');
// console.log(map.get(123));

const set = new Set();
set.add('Hello');
set.add('World');

//set.has, set.size, set.has, set.delete

// console.log(set.has('Hello World'))

const arr = [1,2,3];
//arr.length, arr.push, arr.shift, arr.unshift

function addTwo(num) {
  return num + 2;
}

for(const value of 'abc'){
  // console.log(value)
}

arr.forEach(element => {
 // console.log(element) 
});


const myNum = 2;

// switch (myNum) {
//   case 1:
//     console.log('Its One')
//     break;
//   default:
//   console.log('Its 2')
//     break;
// }

const numBer = 10;
console.log(numBer > 5 ? 'Greater than 5' : 'Less Than 5');

console.table([[1,2,3],['Hello', 'world', 'Again']])
