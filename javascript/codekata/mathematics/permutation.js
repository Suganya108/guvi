// Given 2 numbers N,K print the value of nPk(P-Permutation).

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const m=[];
inp.on("line",(data)=>{
  m.push(data);});
inp.on("close",()=>{
  var a=m[0].split(" "),n,k,p;
  n=parseInt(a[0]);
  p=n;
  k=parseInt(a[1]);
  for(var i=1;i<k;i++)
    p*=n-i;
  console.log(p)
});
