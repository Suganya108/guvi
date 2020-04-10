// Given a number N,check whether it has repeating digits in it.print 'yes' if it has repeating digits otherwise print 'no'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),c=0;
  for(var i=0;i<a.length;i++)
    for(var j=0;j<a.length;j++)
      if(i!==j && a[i]===a[j]){c=1;break;}
  if(c===1)console.log("yes");
  else console.log("no");
});
