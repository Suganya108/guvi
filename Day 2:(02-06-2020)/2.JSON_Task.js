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
