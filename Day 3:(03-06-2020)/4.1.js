//4.1. Print odd numbers in an array
var array=[1,2,3,4,5,6,7,8,9,10];
//arrow function to filter odd numbers
var oddNumber=array.filter(num=>(num%2)!==0);
console.log(oddNumber)//[ 1, 3, 5, 7, 9 ]
