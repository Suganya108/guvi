/* Given an arraylist A of string type which has name#mark1#mark2#mark3 format.
Retrieve the name of the student who has scored max marks(total of three). */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("#"),b=n[1].split("#");
  var s1=parseInt(a[1])+parseInt(a[2])+parseInt(a[3]);
  var s2=parseInt(b[1])+parseInt(b[2])+parseInt(b[3]);
  if(s1>s2) console.log(a[0]);
  else console.log(b[0]);
});
