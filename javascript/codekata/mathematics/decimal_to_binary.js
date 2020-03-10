// Given a number N in decimal convert it into binary value.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]),s="",q,r;
  while(a!==0){
    q=parseInt(a/2);
    r=a%2;
    s+=r;
    a=q;
  }
  console.log(s.split("").reverse().join(""));
});
