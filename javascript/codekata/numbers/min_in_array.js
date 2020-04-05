//Print the minimum element

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],l=n[1].split(" ").map(x=>+x),min;
  min=Math.min(...l);
  console.log(min);
});
