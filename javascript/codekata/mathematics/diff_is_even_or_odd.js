//Given 2 numbers N,M. Find their difference and check whether it is even or odd.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  let x=parseInt(a[0])-parseInt(a[1])
  if(x%2===0){
    console.log("even")}
  else{
    console.log("odd")}
  

});
