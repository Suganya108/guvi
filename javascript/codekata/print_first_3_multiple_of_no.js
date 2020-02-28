// Print the First 3 multiples of the number with single spaces between them as an output.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],b=2*n[0],c=3*n[0];
  console.log(a+" "+b+" "+c);
});
