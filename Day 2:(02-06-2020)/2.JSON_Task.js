// Problem 0 : Part A

var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}

//1.Add height and weight to Fluffy

//function to add height and width
var addHeigthtWidth=function(height,width){
    cat["height"]=height;
    cat["width"]=width;
}
//call function addHeigthtWidth
addHeigthtWidth(23,23);
console.log(cat);

//2.Fluffy name is spelled wrongly. Update it to Fluffyy

//function to update cat name
var updateName=function(name){cat.name=name};
//cal function updateName
updateName("Fluffyy");
console.log(cat.name);

//3.List all the activities of Fluffyy’s catFriends.

//function to list activitis of catFriends
var catFriendsActivities=function(){
    for(var i=0;i<cat.catFriends.length;i++){
    for(var j=0;j<cat.catFriends[i].activities.length;j++){
    console.log(cat.catFriends[i].activities[j]);}}
}
//call function catFriendsActivities
catFriendsActivities();

//4.Print the catFriends names.

// function to print catFriends name
var catFriendsName=function(){
    for(var i=0;i<cat.catFriends.length;i++){
    console.log(cat.catFriends[i].name);}
}
//call function catFriendsName
catFriendsName();

//5.Print the total weight of catFriends

// function to print catFriends total weight
var catFriendsTotalWeight=function(){
    var weight=0
    for(var i=0;i<cat.catFriends.length;i++){
    weight+=cat.catFriends[i].weight;
    }
    console.log(weight);
}
//call function catFriendsTotalWeight
catFriendsTotalWeight();

//6.Print the total activities of all cats (op:6)

// function to print total activities of all cats
var catsActivitiesCount=function(){
    var count=cat.activities.length;
    for(var i=0;i<cat.catFriends.length;i++){
    count+=cat.catFriends[i].activities.length;
    }
    console.log(count);
}
//call function catsActivitiesCount
catsActivitiesCount();

//7.Add 2 more activities to bar & foo cats

// function to add 2 more activities to bar & foo cats
var addCatFriendsActivities=function(activity1,activity2){
    for(var i=0;i<cat.catFriends.length;i++){
    cat.catFriends[i].activities[cat.catFriends[i].activities.length]=activity1;
    cat.catFriends[i].activities[cat.catFriends[i].activities.length]=activity2;
    console.log(cat.catFriends[i].activities);
    }
}
//call function addCatFriendsActivities
addCatFriendsActivities("play","eat");

//8.Update the fur color of bar

//function to update fur color of bar
var updateFurColor=function(color){
    cat["furcolor"]=color
    console.log(cat.furcolor);
};
//cal function updateFurColor
updateFurColor("bar");
console.log(cat);

//Problem 0 : Part B

var myCar = {
 make: 'Bugatti',
 model: 'Bugatti La Voiture Noire',
 year: 2019,
 accidents: [
 {
 date: '3/15/2019',
 damage_points: '5000',
 atFaultForAccident: true
 },
 {
 date: '7/4/2022',
 damage_points: '2200',
 atFaultForAccident: true
 },
 {
 date: '6/22/2021',
 damage_points: '7900',
 atFaultForAccident: true
 }
 ]
}

//1. Loop over the accidents array. Change atFaultForAccident from true to false.

//function to change atFaultForAccident from true to false.
function changeAtFaultForAccident(){
    for(var i=0;i<myCar.accidents.length;i++){
        myCar.accidents[i].atFaultForAccident=false;
    }
    console.log(myCar.accidents)
}
//call function changeAtFaultForAccident
changeAtFaultForAccident();

//2. Print the dated of my accidents

//function to print accidents dates
function printDateOfAccidents(){
    for(var i=0;i<myCar.accidents.length;i++){
    console.log(myCar.accidents[i].date);
    }
}
////call function printDateOfAccidents
printDateOfAccidents();

//Problem 1

//Write a function called “printAllValues” which returns an newArray of all the input object’s values.

var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
//function to return a new array of input object values
function printAllValues(obj) {
    var newArray=[];
    for(var i in obj){
        newArray.push(obj[i]);
    }
    return newArray;
}
//print return value of function printAllValues
console.log(printAllValues(obj));

//Problem 2

//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.

var obj = {name : 'RajiniKanth', age : 25, hasPets : true};
//function to return a new array of input object keys
function printAllKeys(obj) {
    var newArray=[];
    for(var i in obj){
        newArray.push(i);
    }
    return newArray;
}
//print return value of function printAllKeys
console.log(printAllKeys(obj));

//Problem 3

//Write a function called “convertObjectToList” which converts an object literal into an array of arrays.

var obj = {name : 'ISRO', age : 35, role: 'Scientist'};
//function to return a new array  converts an object literal into an array of arrays
function convertListToObject(obj) {
    var newArray=[];
    for(var i in obj){
        newArray.push([i,obj[i]]);
    }
    return newArray;
}
//print return value of function convertListToObject
console.log(convertListToObject(obj));

//Problem 4

//Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object

var arr = ['GUVI', 'I', 'am', 'Geek'];
//function to convert array first element into key and last element to value of an object
function transformFirstAndLast(arr) {
    var object={}
    object[arr[0]]=arr[arr.length-1];
    return object;
}
//print return value of function transformFirstAndLast
console.log(transformFirstAndLast(arr));

//Problem 5

/*Write a function “fromListToObject” which takes in an array of arrays, and
returns an object with each pair of elements in the array as a key-value pair.*/

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
//function to convert subarray first element into key and second element to value of an object
function fromListToObject(arr) {
    var object={}
    for(var i=0;i<arr.length;i++)
    object[arr[i][0]]=arr[i][1];
    return object;
}
//print return value of function fromListToObject
console.log(fromListToObject(arr));

//Problem 6

//Write a function called “transformGeekData” that transforms some set of data from one format to another.

var arr = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
//function to convert subarray first element into key and second element to value of an object
function transformGeekData(arr) {
    var object=[];
    for(var i=0;i<arr.length;i++){
    var subObject={};
    for(var j=0;j<arr[i].length;j++){
    subObject[arr[i][j][0]]=arr[i][j][1];
    }
    object.push(subObject);
    }
    return object;
}
//print return value of function transformGeekData
console.log(transformGeekData(arr));

//Problem 7

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
//function to detects that two objects are equal
function assertObjectsEqual(actual, expected, testName){
var flag=1;
 for(var i in expected){
     if(expected[i]===actual[i])flag*=1;
     else flag*=0;
 }
 if(flag===1)console.log("Passed");
 else{
     console.log("FAILED [my test] Expected ",expected,"but got", actual);
 }
}
//call function assertObjectsEqual
assertObjectsEqual(actual, expected, 'detects that two objects are equal');

//Problem 8

/*I have a mock data of security Questions and Answers. You function
should take the object and a pair of strings and should return if the
quest is present and if its valid answer
*/
var securityQuestions = [
 {
 question: "What was your first pet’s name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
]
//function to check security Questions and Answers
function chksecurityQuestions(securityQuestions,ques,ans) {
    for(var i=0;i<securityQuestions.length;i++){
        if(securityQuestions[i].question===ques && securityQuestions[i].expectedAnswer===ans)return true;
        
    }
return false;
}
//Test case1:
var ques = "What was your first pet’s name?";
var ans  =  "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true
//Test case2:
var ques = "What was the model year of your first car?";
var ans  =  "1985";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true
//Test case3:
var ques = "What was your first pet’s name?";
var ans  =  "DufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // flase

//Problem 9

//Write a function to return the list of characters below 20 age

var students = [
 {
 name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
 {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
 {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
 {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
 {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
 {name: "Devdas",age: 56} 
 ];
//function to return the list of characters below 20 age
var returnMinors=students.filter((item)=>{
    return item.age<20});
console.log(returnMinors)
