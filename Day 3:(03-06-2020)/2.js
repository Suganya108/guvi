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

//2.3. Sum of all numbers in an array

var array=[1,2,3,4,5,6,7,8,9,10];
//anonymous function to find sum of all numbers in an array
var sumOfArray=function findSumOfArray(array){
    return array.reduce((a, b) => a + b)};
console.log(sumOfArray(array))//55

//2.4. Return all the prime numbers in an array
var array=[1,2,3,4,5,6,7,8,9]
//anonymous function to Return all the prime numbers from an array
var primeArray=function prime(array){
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
}
console.log(primeArray(array));

//2.5 Return all the palindromes in an array

var array=["eye","apple","abba","guvi"];
//anonymous function to filter palindrome
var palindromeArray=function palindrome(array){
    var newArray=array.filter(str=>{
        var reverseStr=str.split("").reverse().join("");
        if(str===reverseStr)return str});
    return newArray}
console.log(palindromeArray(array))//[ 'eye', 'abba' ]

//2.7. Remove duplicates from an array

var array=["eye","apple","abba","guvi","geek","apple","abba"];
//anonymous function to Remove duplicates from an array
var uniqeArray=function removeDuplicates(array){
    var newArray=[...new Set(array)];
    return newArray;
}
console.log(uniqeArray(array));//[ 'eye', 'apple', 'abba', 'guvi', 'geek' ]
