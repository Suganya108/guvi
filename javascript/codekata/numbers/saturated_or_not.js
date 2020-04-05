/* You are provided with a number ’n’. Your task is to tell whether that number is saturated.
A saturated number is a number which is made by exactly two digits. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),b=[...new Set(a)],l;
  l=b.length;
  if(l===2)console.log("Saturated");
  else console.log("Unsaturated");
});
