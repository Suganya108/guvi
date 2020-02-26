
# Convert country name to capital letter using map function

const conname=dummy.map((item)=>{
    return (item.name).toUpperCase()})
console.log(conname)

# Filter the datas of country with captital with 5 or less letters

const cplen=dummy.filter((item)=>{
    return (item.capital).length<=5})
console.log(cplen)

# Find a data of a country by using find method

const finditem=dummy.find((item)=>{
    return item.name==='India'})
console.log(finditem)

# Sum of all nos. in an array using reduce method

var a=[1,2,3,4,5,6,7,8,9,10]
var sum=a.reduce(function(accumulator,currentvalue,index){
    return accumulator+currentvalue;
});
console.log(sum)

# Sum of odd nos. in an array using reduce method

var a=[1,2,3,4,5,6,7,8,9,10]
var sum=a.reduce(function(accumulator,currentvalue,index){
if(currentvalue%2!=0){
    return accumulator+currentvalue;}
    return accumulator
});
console.log(sum)
