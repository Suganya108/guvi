// Given a number N, print its factors.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]),f=[];
  for(let i=0;i<=a;i++){
    if(a%i===0)
      f.push(i);
  }
  console.log(f.join(" "));
});
