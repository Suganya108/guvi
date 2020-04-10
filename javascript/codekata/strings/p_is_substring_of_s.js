/* Given a String S and a string P, find if P is a substring of S. 
Print 'yes' if it is a substring else 'no'. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  if(a[0].indexOf(a[1])!==-1)console.log("yes");
  else console.log("no");
});
