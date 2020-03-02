// Given a string S consisting of 2 words reverse the order of two words .

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[];
  a=n[0].split(" ");
  console.log(a[1],a[0]);
  });
