// Write a program to find sum of all even numbers between 1 to n.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const a=[];
inp.on("line",(data)=>{
  a.push(data);});
inp.on("close",()=>{
  var n=a[0],i=2,sum=0;
  while(i<=n){
      sum+=i
      i+=2;
  }
  console.log(sum);

});
