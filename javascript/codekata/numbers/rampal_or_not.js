/*Rampal is a number in which the sum of last two digits of that number is multiple of 4.
Your teacher has given you the task to make a list of rampal numbers.
Your task is to tell whether the number is rampal or not. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],sum;
  if(parseInt(a)<0){
    sum=parseInt(a[2])+parseInt(a[a.length-1]);
  }
  else{
    sum=parseInt(a[a.length-2])+parseInt(a[a.length-1]); 
  }
  if(sum%4===0)console.log("yes");
  else console.log("no");
});
