// Write a program to calculate product of digits of a number.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const a=[];
inp.on("line",(data)=>{
  a.push(data);});
inp.on("close",()=>{
  var n=a[0].split(""),pro=1;
  for(var i=0;i<n.length;i++){
      pro*=parseInt(n[i])
  }
  console.log(pro)
});
