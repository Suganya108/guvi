// Given a string S ,print the vowels first and then consonants in the same order as they have occurred in the string.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],v=/[aeiouAEIOU]/g,s1="",s2="";
  for(var i=0;i<a.length;i++){
    if(a[i].match(v))s1+=a[i];
    else s2+=a[i];
  }
  console.log(s1+s2);

});
