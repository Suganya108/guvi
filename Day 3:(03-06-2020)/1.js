//Write a function called “addFive”.

var num = 10;
// Function to returns 5 added to that number
function addFive(num) {
    if(num<0)return num-5;
    else return num+5;
}
var result = addFive(num) //15
addFive(5); //10
addFive(0); //5
addFive(-5); //-10
console.log(addFive(-5))

//Write a function called “getOpposite”.

var num = 5;
// Function to return its opposite
function getOpposite(num) {
    if(num===0)return 0;
    if(num % 1 === 0)return -num;
    else return -1;
}
var result = getOpposite(num)//-5
getOpposite(0);//0
getOpposite(-5);//5
getOpposite('5a');//-1
getOpposite(5.5);//-1
console.log(getOpposite(0));//0

//Fill in your code that takes an number minutes and converts it to seconds.

var min = 5;
//Function to covert min to sec
function toSeconds(min) {
    console.log(min*60);
    return min*60;
}
var secs = toSeconds(min)
toSeconds(5) //300
toSeconds(3) //180
toSeconds(2) //120

//Create a function that takes a string and returns it as an integer.

var mystr = "5";
// Function to convert string to Number
function toInteger(mystr) {
    console.log(Number(mystr));
    return Number(mystr);
}
var myint = toInteger(mystr);//5
toInteger('6') //6
toInteger('1000') //1000
toInteger('12') //12

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

var myint = 0;
// Function to add 1 to a integer
function nextNumber(myint) {
    console.log(myint+1);
    return myint+1;
}
var myNextint = nextNumber(myint);//1
nextNumber(0) //1
nextNumber(9) //10
nextNumber(-3)// -2

//Create a function that takes an array and returns the first element.

var arr = [1, 2, 3];
// Function to return 1st element of an array
function getFirstElement(arr) {
    console.log(arr[0]);
    return arr[0]
}
var data = getFirstElement(arr)//1
getFirstElement([80, 5, 100]) //80
getFirstElement([-500, 0, 50]) //-500

//Write a function that converts hours into seconds.

var hrs = 5;
//Function to covert hrs to sec
function hourToSeconds(hrs) {
    console.log(hrs*3600);
    return hrs*3600;
}
var secs = hourToSeconds(hrs)//18000
hourToSeconds(2) //7200
hourToSeconds(10) //36000
hourToSeconds(24) //8400

//Create a function that takes height and width and finds the perimeter of a rectangle.

//Functio to find Perimeter of a Rectangle
function findPerimeter(num1,num2) {
    var perimeter=2*(num1+num2);
    console.log(perimeter);
    return perimeter;
}
var peri = findPerimeter(6,7);//26
findPerimeter(20, 10)// 60
findPerimeter(2, 9) //22

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1,num2) {
    if(num1+num2<100)return true;
    else return false;
}
var res = lessThan100(22,15)//true
console.log(lessThan100(83, 34));//false

/*There is a single operator in JavaScript, capable of providing the 
remainder of a division operation. Two numbers are passed as parameters. The
first parameter divided by the second parameter will have a remainder, 
possibly zero. Return that value. */

//function to return remainder
function remainder(num1,num2) {
    if(num1>=num2) return num1%num2;
    else return num1;
}
var res = remainder(1,3);
remainder(1, 3) //1
remainder(3, 4) //3
remainder(-9, 45) //-9
remainder(5, 5) //0
console.log(res)//1

/*The farmer has counted his animals and he gives you a subtotal for each
species. You have to implement a function that returns the total number of
legs of all the animals.*/

//function to find totalLegs
function CountAnimals(tur,horse,pigs) {
    var totalLegs=(tur*2)+(horse*4)+(pigs*4);
    console.log(totalLegs);
    return totalLegs;
}
var legs = CountAnimals(2,3,5)//36
CountAnimals(1, 2, 3) //22
CountAnimals(5, 2, 8) //50

//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

//Function to find Frames Per Second
function frames(num1,num2) {
    var numberOfFrames=num1*num2*60;
    console.log(numberOfFrames);
    return numberOfFrames;
}
var fps = frames(1,2)//120
frames(1, 1) //60
frames(10, 1) //600
frames(10, 25) //15000

//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

//Function to Check if an Integer is Divisible By Five
function divisibleByFive(num1) {
    if(num1%5===0)return true;
    else return false
}
var divisible = divisibleByFive(5)//true
divisibleByFive(-55) //true
divisibleByFive(37) //false
console.log(divisible)

//Given a number, “isEven” returns whether it is even.

//function to check num is even or not
function isEven(num){
    if(num===Number(num)){
        if(num%2===0)return true;
        else return false;
    }
    else return -1;
}
var even = isEven(5)
isEven(12);//true
isEven(0);//true
isEven(11);//false
isEven(“11h”);//-1
console.log(even)//false

//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

//function to find both numbers are odd or not
function areBothOdd(num1, num2){
    if((num1+num2)%2===0 && num1>0 && num2>0)return true;
    else return false;
}
var odd=areBothOdd(1, 3);//true
var odd=areBothOdd(1, 4);//false
var odd=areBothOdd(2, 3);//false
var odd=areBothOdd(0, 0);//false
console.log(odd);//false

//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

//function to get Full Name
function getFullName(firstName, lastName){
    console.log('"'+firstName+""+lastName+'"');
    return '"'+firstName+""+lastName+'"';
}
getFullName('GUVI', 'GEEK');//"GUVIGEEK"
getFullName('GUVI', '');//"GUVI"
getFullName('', 'GEEK');//"GEEK"
getFullName('', '');//""

//Given a word, “getLengthOfWord” returns the length of the given word.

//function called “getLengthOfWord” to find length
function getLengthOfWord(word1){
    if(typeof(word1)==="string")return word1.length;
    else return -1;
}
var wordLength=getLengthOfWord('GUVI');//4
wordLength=getLengthOfWord('');//0
wordLength=getLengthOfWord();//-1
wordLength=getLengthOfWord(9);//-1
console.log(wordLength)

//Given two words, “isSameLength” returns whether the given words have the same length.

//function called “isSameLength” to check words length are same
function isSameLength(word1, word2){
    if(word1.length===word2.length)return true;
    else return false;
}
var isSame=isSameLength('GUVI', 'GEEK');
console.log(isSame)//true

//Create a function to calculate the distance between two points defined by their x, y coordinates

//function to find distance between 2 points
function getDistance(x1, y1, x2, y2)
{
 var distance=Math.sqrt((Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2)));
 return distance;
}
console.log(getDistance(100, 100, 400, 300));//360.5551275463989

/*Given an array and an integer, “getNthElement” returns the element at the
given integer, within the given array. If the array has a length of 0, it
should return ‘undefined’.*/

//function to get nth element of array
function getNthElement(array,n){
    console.log(array[n])
    return array[n];
}
getNthElement([1, 3, 5], 1);//Int32Array
getNthElement([],1)//undefined

//Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

//function to get last element of array
function getLastElement(array){
    var len=array.length-1;
    if(len<0)return -1;
    else return array[len];
}
console.log(getLastElement([1, 2, 3, 4]));//4
console.log(getLastElement([]));//-1

/*Given an object and a key, “getProperty” returns the value of the property
at the given key. If there is no property at the given key, it should return
undefined.*/

var obj = {
 mykey: 'value'
};
//function to get property
function getProperty(obj, key) {
    if(typeof(obj[key])=="undefined")return "NA"
    return obj[key];
}
console.log(getProperty(obj,'mykey'));//value
console.log(getProperty(obj,'dummykey'));//NA

//Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.

var obj = {
 mykey: 'value'
};
//function to add property
function addProperty(obj, key){
    obj[key]=true;
}
addProperty(obj,"myProperty")
console.log(obj)//{ mykey: 'value', myProperty: true }

//Given an object and a key, “removeProperty” removes the given key from the given object.


//function to remove property
function removeProperty(obj, key){
    delete obj[key];
}
removeProperty(obj, 'mykey');
console.log(obj)//{ myProperty: true }

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
//function to count positive and negative numbers
function countPositivesSumNegatives(arr) {
    var positiveArray=arr.filter((num)=>num>0);
    var negativeArray=arr.filter((num)=>num<0);
    return [positiveArray.length,negativeArray.length]
}
var ar2=countPositivesSumNegatives(arr);
console.log(ar2);//[5,3]

//Create a function that receives an array of numbers and returns an array containing only the positive numbers

//function to get possitive numbers in new array
function getPositives(ar)
{
    var positiveArray=arr.filter((num)=>num>0);
    return positiveArray
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);//[ 10, 12, 5, 90, 1 ]

//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

//function to return return list of all powers of 2 from 0 to n
function powersOfTwo(n){
    var res=[];
    for(var i=0;i<=n;i++)res.push(Math.pow(2,i));
  console.log(res.join(","))
  return res;
}
powersOfTwo(0)//1
powersOfTwo(1)//1,2
powersOfTwo(2)//1,2,4

//Find the maximum number in an array of numbers

//function to Find the maximum number in an array of numbers
function findMax(ar)
{
var max=Math.max(...ar);
return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log('Max: ', max);//Max:  90

//Print the first 100 prime numbers

var primes = [2];
//function to print prime numbers
function printPrimes(n)
{
for (var i=3;i<n;i+=2){
    var isPrime = true;
    for (var j = 0;j<primes.length;j++){
        if (i%primes[j]===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){primes.push(i)}
}
}
printPrimes(100);//[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]

//Reverse a string

//function to Reverse a string

function reverseString(s)
{
    return s.split("").reverse().join("");
}
var s = reverseString("JavaScript");
console.log(s);//tpircSavaJ

//Create a function that will merge two arrays and return the result as a new array

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
//function to merge 2 arrays
function mergeArrays(ar1, ar2)
{
 var result = [...ar1,...ar2];
 return result;
}
var ar = mergeArrays(ar1, ar2);
console.log(ar);//[ 1, 2, 3, 4, 5, 6 ]

//Calculate the sum of numbers received in a comma delimited string

//Runction to Calculate the sum of numbers received in a comma delimited string

function sumCSV(s)
{
    var arr=s.split("");
    arr.shift();
    arr.pop();
    s=arr.join("");
    arr=s.split(", ").map(x=>+x);
    return arr.reduce((a, b) => a + b);

}
console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));//55.4
