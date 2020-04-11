// Given a number N, print the kth digit from the given position p(given order N P K).

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),p=+a[1],k=+a[2];
  console.log(a[0][p-1+k]);
});
