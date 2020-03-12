// Print YES if N is divisible by 11, NO otherwise.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]);
  if(a%11===0)console.log("YES");
  else console.log("NO");
});
