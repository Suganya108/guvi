// Given a string S change upper case to lowercase and lowercase to uppercase.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],s="";
  for(var i=0;i<a.length;i++){
    if(a[i]===a[i].toUpperCase())s+=a[i].toLowerCase();
    else s+=a[i].toUpperCase();
  }
  console.log(s);
});
