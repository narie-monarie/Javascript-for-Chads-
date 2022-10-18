const arr = [1, 2, 3, 4];

// const arr = new Array().fill(0);

// console.log(arr.length);
// console.log(arr.indexOf(2));
// console.log(arr.shift()); // shift returns the first value unshift returns the last value
// console.log(arr.lastIndexOf(3));

// arr.forEach(element => {
// console.log(element)
// });

console.log(Array.isArray(arr))

// arr.splice(1, 2, 'hello'); //Deletes from index 1 and wants 2 elements so 2 & 3 will be deleted replce with hello in that range

const newArr = arr.slice(0, 3) //return new array
console.log(newArr)
console.log(arr)

const mappedArray = arr.map(function(value, index) {
  return value + index + this.num;
}, { num: 10 })
console.log(mappedArray)


const filteredArray = arr.filter(function(value) {
  return value > this.num;
}, { num: 1 });

console.log(filteredArray)


