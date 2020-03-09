//Given a number N, print the product of the digits.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),p=1;
  for(let i=0;i<a.length;i++)
    p*=parseInt(a[i]);
  console.log(p);
  });
