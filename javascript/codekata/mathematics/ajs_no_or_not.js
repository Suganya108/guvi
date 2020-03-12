/* You are given a number ‘n’.
Your task is to develop an algorithm to tell whether the number is ‘ajs’ or not.
An ‘ajs’ number is a number whose sum of first two digits is present in given number ‘n’ */


const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],i,num;
  num=parseInt(a[0])+parseInt(a[1]);
  i=a.indexOf(num);
  if(i!==-1) console.log("1");
  else console.log("0");
});
