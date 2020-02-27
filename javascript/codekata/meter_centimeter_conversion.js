// Convert and print this value in meters and centimeters.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  console.log(a*1000)
  console.log(a*100000)
});
