// Given a string S consisting of only '(' and ')', print 'yes' if it is balanced otherwise print 'no'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),c=0,o=0,d=0;
  for(var i=0;i<a.length;i++){
    if(a[i]==="(")c+=1;
    else if(a[i]===")")o+=1;
    else d=1;
  }
  if(c===o && d===0)console.log("yes");
  else console.log("no");
});
