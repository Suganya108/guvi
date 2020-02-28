// Find the sum of the two numbers (A + B)

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],b=n[1],c;
  c=parseInt(a)+parseInt(b);
  console.log(c)
});
