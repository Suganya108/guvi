// Given a number N in decimal, print the length of the corresponding binary digit.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]),b=a.toString(2);
  console.log(b.length);
  
});
