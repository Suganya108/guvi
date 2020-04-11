// Given 2 strings and a number K, check whether they differ exactly by K characters.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),c=0,k=parseInt(a[2]);
  for(var i=0;i<a[0].length;i++)
    if(a[0][i]===a[1][i])c+=1;
  if(c===a[0].length-k)console.log("yes");
  else console.log("no");
});
