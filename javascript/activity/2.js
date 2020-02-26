//print odd nos. in array

a=[1,2,3,4,5,6,7,8,9,10]
var odd=a.map(function(n){if((n%2)!=0){console.log(n)}})

//print palindromes in array

var arr=['11','121','123','1221','2346']
var pal=arr.filter(function(n){
    return n==n.split("").reverse().join("");})
console.log(pal)
