// Given length L and breadth B of a farm, print the area of the farm upto 5 decimal decimals.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),A;
  A=parseFloat(a[0])*parseFloat(a[1]);
  console.log(A.toFixed(5));
});
