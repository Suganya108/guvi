// Given a number N and a number K, check if it has all digits from 0 to k in it.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),k=+a[1],c=0;
  for(var i=0;i<=k;i++){
    if(a[0].indexOf(i)!==-1)c+=1;
  }
  if(c===k+1)console.log("yes");
  else console.log("no");
});
