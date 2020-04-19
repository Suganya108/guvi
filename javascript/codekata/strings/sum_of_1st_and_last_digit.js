// Given a number N, print the sum of its first and last digit.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("").map(x=>+x);
  console.log(a[0]+a[a.length-1]);
});
