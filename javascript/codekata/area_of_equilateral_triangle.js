// Find the area of the equilateral triangle and print the answer up to 2 decimal places after rounding off.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],s,t;
  s=Math.sqrt(3)
  t=(1/4)*a*a*s
  console.log(t.toFixed(2))
});
