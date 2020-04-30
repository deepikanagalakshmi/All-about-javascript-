const numbers=["one","two","three","four","five","six"]
console.log(numbers);
numbers[0]="something"

//Methods used at starting position of array
console.log("START");
//shift() removes one element at beginning of array
console.log(numbers.shift())
console.log(numbers)

//unshift() adds one element at beginning of array

numbers.unshift("one")
console.log(numbers)

//Methods used at ending position of an array
console.log("END");

//pop() removes last element of an array
console.log(numbers.pop());
console.log(numbers);

//push() adds element at end of array
numbers.push("six","seven")
console.log(numbers);

//Methods used at middle of an array
console.log("MIDDLE");

numbers.slice(3,1,"something");
console.log(numbers);
