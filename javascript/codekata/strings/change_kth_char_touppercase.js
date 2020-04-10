// Given a string and a number K, change every kth character to uppercase from beginning in string.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var l=n[0].split(" "),a=l[0],b=parseInt(l[1]),s="";
  for(var i=0;i<a.length;i++){
    if((i+1)%b===0)s+=l[0][i].toUpperCase();
    else s+=a[i];
  }
  console.log(s);
});
