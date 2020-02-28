// You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenheit. 

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],f;
  f=(a*9/5)+32
  console.log(f.toFixed(2))
});
