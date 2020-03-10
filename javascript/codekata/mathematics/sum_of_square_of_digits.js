// Given a number N, print the sum of squares of all its digits.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),sum=0;
  for(var i=0;i<a.length;i++){
    sum+=parseInt(a[i])*parseInt(a[i]);
  }
  console.log(sum);
});
