//2. Do the below programs in anonymous function

//2.1. Print odd numbers in an array
var array=[1,2,3,4,5,6,7,8,9,10];
//anonymous function to filter odd numbers
var oddNumber=function findOddNumber(array){
    var newArray=[];
    for(var i=0;i<array.length;i++){
    if((array[i]%2)!==0)newArray.push(array[i]);
    }
    return newArray;
};
console.log(oddNumber(array))//[ 1, 3, 5, 7, 9 ]

//2.2. Convert all the strings to title caps in a string array
var array=["apple","bat","cat","dog"];
//anonymous function to Convert all the strings to title caps
var titleCaps=function convertTitltCaps(word){
    var arrayString=[];
    for(var i=0;i<word.length;i++){
   var string = word[i][0].toUpperCase();
   for(var j=1;j<word[i].length;j++){
       string+=word[i][j].toLowerCase();
    }
    arrayString.push(string);
    }
   return arrayString;
    
};
console.log(titleCaps(array))//[ 'Apple', 'Bat', 'Cat', 'Dog' ]

//4.3. Sum of all numbers in an array

var array=[1,2,3,4,5,6,7,8,9,10];
//anonymous function to find sum of all numbers in an array
var sumOfArray=function findSumOfArray(array){
    return array.reduce((a, b) => a + b)};
console.log(sumOfArray(array))//55
