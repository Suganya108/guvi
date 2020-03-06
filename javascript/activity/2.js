//print odd nos. in array

a=[1,2,3,4,5,6,7,8,9,10]
var odd=a.map(function(n){if((n%2)!=0){console.log(n)}})

//print palindromes in array

var arr=['11','121','123','1221','2346']
var pal=arr.filter(function(n){
    return n==n.split("").reverse().join("");})
console.log(pal)

//Prime numbers

var a=[1,2,3,4,5,6,7,8,9,10]
var primeno=a.filter(function(n){
    for( var i=2;i<n;i++){
        if(n%i==0) return false
    }
    return n!==1})
console.log(primeno)
//Convert all the strings to title caps in a string array
var a=["raja","bala","ravi","suba","sundar"];
var ar=function(){
    for (var i = 0; i < a.length; i++) {
        console.log(a[i][0].toUpperCase()+ a[i].substr(1));
    }}
//Sum of all numbers in an array
var a=[1,2,4,5,2,8,9];
var ar=function(){var sum=0;for(var i=0;i<a.length;i++)sum+=a[i];
console.log(sum)};

