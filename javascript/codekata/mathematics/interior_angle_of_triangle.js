/* Given 3 angles A,B,C find if they can be interior angles of a triangle.
If they form an interior triangle for the given angle,print 'yes' otherwise print 'no'. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  if(parseInt(a[0])+parseInt(a[1])+parseInt(a[2])===180)
    console.log("yes");
  else
    console.log("no");
  
});
