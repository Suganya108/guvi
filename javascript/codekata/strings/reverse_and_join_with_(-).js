// Given a input string S, reverse the given string by appending each character of the string with '-'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("").reverse().join("-");
  console.log(a);
});
