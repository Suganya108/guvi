//4. Do the below programs in arrow functions

//4.1. Print odd numbers in an array
var array=[1,2,3,4,5,6,7,8,9,10];
//arrow function to filter odd numbers
var oddNumber=array.filter(num=>(num%2)!==0);
console.log(oddNumber)//[ 1, 3, 5, 7, 9 ]

//4.2. Convert all the strings to title caps in a string array
var array=["apple","bat","cat","dog"];
//arrow function to Convert all the strings to title caps
var titleCaps=array.map(word=>{
   var string = word[0].toUpperCase();
   for(var i=1;i<word.length;i++)string+=word[i].toLowerCase();
   return string;
    
});
console.log(titleCaps)//[ 'Apple', 'Bat', 'Cat', 'Dog' ]

//4.3. Sum of all numbers in an array

var array=[1,2,3,4,5,6,7,8,9,10];
//arrow function to find sum of all numbers in an array
var sumOfArray=array.reduce((a, b) => a + b);
console.log(sumOfArray)//55
