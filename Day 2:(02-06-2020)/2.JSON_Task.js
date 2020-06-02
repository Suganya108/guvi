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
