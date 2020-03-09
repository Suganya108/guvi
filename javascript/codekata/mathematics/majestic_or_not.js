/* You are given given task is to print whether array is ‘majestic’ or not.
A ‘majsetic’ array is an array whose sum of first three number is equal to last three number. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  let a=n[1].split(" "),b=parseInt(n[0]),f=0,l=0;
  for(var i=0;i<3;i++)
    f+=parseInt(a[i]);
  for(var i=b-1;i>b-4;i--)
    l+=parseInt(a[i]);
  if(f===l)console.log("1");
  else console.log("0");

});
