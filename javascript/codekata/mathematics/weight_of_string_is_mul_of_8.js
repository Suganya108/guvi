/*  You are given a ‘true’ string. String is called true if weight of string is multiple of 8. 
Your task is to tell whether a string can be declared True or Not.
Weight of string is the sum of ASCII value of Vowel character(s) present in the string. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],sum=0;
  for (var i = 0; i < a.length; i++) {
  sum+=a.charCodeAt(i);}
  if(sum%8===0)console.log("1");
  else console.log("0");
});
