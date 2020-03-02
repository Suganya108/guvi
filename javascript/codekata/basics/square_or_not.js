//Check whether the given 4 points form a square or not.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var p1=[],p2=[],p3=[],p4=[],a,b;
  p1=n[0].split(" ");
  p2=n[1].split(" ");
  p3=n[2].split(" ");
  p4=n[3].split(" ");
  a=parseInt(p1[0])+parseInt(p2[0])+parseInt(p3[0])+parseInt(p4[0]);
  b=parseInt(p1[1])+parseInt(p2[1])+parseInt(p3[1])+parseInt(p4[1]);
  if(a===b){
    console.log("yes")}
  else{
    console.log("no")}
});
