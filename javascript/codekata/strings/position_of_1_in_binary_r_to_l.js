// Print the position of first 1 from right to left, in binary representation of an Integer.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=+n[0],b=a.toString(2);
  console.log(b.length-b.lastIndexOf(1));
});
