// Given a binary number convert it into octal format.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],o=parseInt(a, 2).toString(8);
  console.log(o);
});
