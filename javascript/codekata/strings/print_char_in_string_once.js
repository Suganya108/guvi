// Given a string S, retain the character(s) once irrespective of number of times it occurs in the given string.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),b=[...new Set(a)];
  console.log(b.join(""));
});
