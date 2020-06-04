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

//4.4. Return all the prime numbers in an array
var array=[1,2,3,4,5,6,7,8,9]
//arrow function to Return all the prime numbers from an array
var primeArray=prime((array)=>{
    var newArray=[];
    for(var n in array){
    for(var i=2;i<array[n];i++){
        var c=1;
        if(array[n]%i===0){c*=0;break}
        else c*=1;
    }
    if(c===1)newArray.push(array[n]);
    else if(array[n]===2)newArray.push(array[n]);
    }
    return newArray;
});
console.log(primeArray(array));

//4.5 Return all the palindromes in an array

var array=["eye","apple","abba","guvi"];
//arrow function to filter palindrome
var palindromeArray=array.filter(str=>{
    var reverseStr=str.split("").reverse().join("");
    if(str===reverseStr)return str;});
console.log(palindromeArray)//[ 'eye', 'abba' ]
