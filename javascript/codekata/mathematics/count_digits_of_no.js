//Count the number of digits of a given number N.Size of the integer ranges from 1.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  console.log(a.length)
});
