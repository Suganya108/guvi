/* Given a number N and an array of N strings,Print yes, 
if all strings have atleast one vowel in them otherwise print no. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]),c=0,m=/[AEIOUaeiou]/g;
  for(var i=1;i<=a;i++){
    var s=n[i];
    if(s.match(m))c+=1;
  }
  if(c===a)console.log("yes");
  else console.log("no");
});
