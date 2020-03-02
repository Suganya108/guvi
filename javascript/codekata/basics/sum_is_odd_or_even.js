// Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[],s;
  a=n[0].split(" ");
  s=a[0]+a[1];
  if(s%2==0){
    console.log("even")}
  else{
    console.log("odd")}
});
