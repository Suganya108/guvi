// Given a hexadecimal number convert it into decimal.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),sum=0,p=1;
  for(var i=a.length-1;i>=0;i--){
    sum+=parseInt(a[i])*p;
    p*=16;
  }
  console.log(sum);
});
