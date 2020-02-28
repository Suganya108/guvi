// You are provided with a number check whether its odd or even. 

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  if(a%2==0){
    console.log("Even")}
  else if(a==0){
    console.log("Zero")}
  else{
    console.log("Odd")}
});
