// Given a number N and an array of N elements, print the prefix sum array.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=+n[0],l=n[1].split(" ").map(x=>+x),sum=0,b=[];
  for(var i=0;i<a;i++){
    sum+=l[i];
    b[i]=sum;
  }
  console.log(b.join(" "));
});
