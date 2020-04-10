// Given 2 numbers N,K and an array of N strings, find if any K consecutive strings are same.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ").map(x=>+x),l=[],p=0;
  for(var i=1;i<a[0];i++)l.push(n[i]);
  for(var i=0;i<a[0];i++){
    var s=l[i],c=0;
    for(var j=0;j<a[0];j++){
      if(l[i]===s)c+=1;
    }
    if(c===a[1])p=1;
  }
  if(p===1)console.log("yes");
  else console.log("no");
});
