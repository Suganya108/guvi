// Write a program to calculate sum of digits of a number.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const a=[];
inp.on("line",(data)=>{
  a.push(data);});
inp.on("close",()=>{
  var n=a[0].split(""),sum=0;
  for(var i=0;i<n.length;i++){
      sum+=parseInt(n[i])
  }
  console.log(sum)
});
