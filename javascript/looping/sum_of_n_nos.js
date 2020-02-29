// Write a program to find sum of all natural numbers between 1 to n.

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
