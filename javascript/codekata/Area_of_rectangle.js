// You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],b=n[1],c;
  c=a*b
  console.log(c.toFixed(1))
});
