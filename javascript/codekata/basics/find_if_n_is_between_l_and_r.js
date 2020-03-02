// Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[],m;
  a=n[1].split(" ");
  m=n[0];
  if(a[0]<m && m<a[1])
    console.log("yes");
  else
    console.log("no");
});
