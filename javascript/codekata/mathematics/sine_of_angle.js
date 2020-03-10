// Given an angle A, print the sine of the given angle.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]);
  console.log(Math.sin(a*Math.PI/180).toFixed(1));
});
