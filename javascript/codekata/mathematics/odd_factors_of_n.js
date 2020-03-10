// Given a number N, print the odd factors for the N.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]),f=[];
  for(var i=1;i<=a;i+=2)
    if(a%i===0)
      f.push(i);
  console.log(f.join(" "));
});
