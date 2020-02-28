//Remove all the whitespaces and then print the length of the remaining string.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],s
  s=a.split(" "). join("")
  console.log(s.length)
  
  
});
