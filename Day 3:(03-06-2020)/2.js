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
