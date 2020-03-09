// Given a number N and an array of N integers, find the sum of all the negative numbers in the array.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]),sum=0,l=[];
  l=n[1].split(" ");
  for(let i=0;i<a;i++){
    if(parseInt(l[i])<0)sum+=parseInt(l[i]);
  }
  console.log(sum)
});
