// Given base(B) and height(H) of a triangle find its area.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[];
  a=n[0].split(" ")
  console.log((a[0]*a[1])/2);
});
