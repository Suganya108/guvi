//Given the values of a,b and x in the equation ax + b = y. Find the value of y.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),y;
  y=(parseInt(a[0])*parseInt(a[2]))+parseInt(a[1]);
  console.log(y);
});
