//4.3. Sum of all numbers in an array
var array=[1,2,3,4,5,6,7,8,9,10];
//arrow function to find sum of all numbers in an array
var sumOfArray=array.reduce((a, b) => a + b);
console.log(sumOfArray)//55
