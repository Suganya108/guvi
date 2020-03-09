// Given 3 numbers A,B,C find the sum of Arithmetic Series with a=A, d=B and n=C

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),sum=0;
  for(let i=0;i<2;i++){
    if(a[i]!==a[i+1])
      sum=parseInt(a[i])+parseInt(a[i+1]);
  }
  console.log(sum);
});
