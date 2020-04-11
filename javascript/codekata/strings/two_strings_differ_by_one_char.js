/* Given 2 strings check whether they differ exacly by one character.
If yes then print 'yes' otherwise print 'no' */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),c=0;
  for(var i=0;i<a[0].length;i++)
    if(a[0][i]===a[1][i])c+=1;
  if(c===a[0].length-1)console.log("yes");
  else console.log("no");
});
