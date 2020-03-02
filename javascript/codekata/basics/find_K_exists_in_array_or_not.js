// Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[],b=[],x,m;
  a=n[1].split(" ");
  m=n[0].split(" ");
  x=a.indexOf(m[1]);
  if(x==-1)console.log("no");
  else console.log("yes");
});
