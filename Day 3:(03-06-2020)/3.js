//3. Write a callback which is called

//3.1. if the give number is even
//function to check even number
function even(num){
if((num%2)===0) return true;
else return false}
//callback function
var evenNumber=((num,fun)=>fun(num));
console.log(evenNumber(2,even))//true

//3.2. if the given number is prime

//function to check prime number
function prime(n){
    if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
//callback function
var primeNumber=((num,fun)=>fun(num));
console.log(primeNumber(11,prime))//true

//3.3. if the number is palindrome

//function to check palindrome or not
function palindrome(str) {
    var reverseStr=str.split("").reverse().join("");
    if(str===reverseStr)return true;
    else return false;
}
//callback function
var isPalindrome=((str,fun)=>fun(str));
console.log(isPalindrome("eye",palindrome))//true
