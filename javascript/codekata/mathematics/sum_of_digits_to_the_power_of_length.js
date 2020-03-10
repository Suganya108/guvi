// Given a number 'N' print the sum of each digit to the power of number of digits in given input.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),sum=0;
  for(let i=0;i<a.length;i++)
    sum+=Math.pow(parseInt(a[i]),a.length);
  console.log(sum);
  });
