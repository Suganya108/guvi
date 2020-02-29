// Write a program to enter a number and print its reverse.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const a=[];
inp.on("line",(data)=>{
  a.push(data);});
inp.on("close",()=>{
  var n=a[0].split(""),s='';
  for(var i=n.length-1;i>=0;i--){
      s+=n[i]
  }
  console.log(s)
});
