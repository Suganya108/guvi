//Do the below programs in anonymous function & IIFE
//Print odd numbers in an array 
var a=[1,2,4,5,2,8,9];
(function(){for(var i=0;i<a.length;i++){if((a[i]%2)!=0){console.log(a[i])}}})();
//Convert all the strings to title caps in a string array
var a=["raja","bala","ravi","suba","sundar"];
(function(){
    for (var i = 0; i < a.length; i++) {
        console.log(arr[i][0].toUpperCase()+ arr[i].substr(1));
    }})();