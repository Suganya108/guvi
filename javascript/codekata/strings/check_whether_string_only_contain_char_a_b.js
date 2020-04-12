// Given a string S, check whether it contains only the characters 'a' and 'b' or only 'a' or only 'b'

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),c=1;
  for(var i=0;i<a.length;i++){
    if(a[i]==="a" || a[i]==="b")c*=1;
    else c*=0;
  }
  if(c===1)console.log("yes");
  else console.log("no");
});
