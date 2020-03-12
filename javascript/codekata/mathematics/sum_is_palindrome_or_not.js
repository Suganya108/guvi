// Given a number N, check if the sum of the digits is a Palindrome. Print 'yes' or 'no' accordingly.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),sum=0,r,s="";
  for(var i=0;i<a.length;i++){
    sum+=parseInt(a[i]);
  }
    s+=sum;
  r=s.split("").reverse().join("");
  if(s===r)console.log("yes");
  else console.log("no")
});
