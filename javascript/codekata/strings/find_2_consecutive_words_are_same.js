// Given a number N and an array of N strings, find if two consecutive words are same.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]),l=[],c=0;
  for(var i=1;i<=a;i++)l.push(n[i]);
  for(var j=1;j<=a;j++)
    if(l[j-1]===l[j]){c=1;break;}
  if(c===1)console.log("yes");
  else console.log("no");
});
