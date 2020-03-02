// Write a program to print the sum of the first K natural numbers.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const a=[];
inp.on("line",(data)=>{
  a.push(data);});
inp.on("close",()=>{
  var n=a[0],sum=0;
  for(var i=1;i<=n;i++){
      sum+=i;}
      console.log(sum);
});
