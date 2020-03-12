// Given a number N, print the even factors of N.If the even factor does not exists for N print '-1'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]),f=[];
  for(let i=0;i<=a;i+=2){
    if(a%i===0)
      f.push(i);
  }
  if(f.length>0)
  console.log(f.join(" "));
  else
  console.log("-1");
});
