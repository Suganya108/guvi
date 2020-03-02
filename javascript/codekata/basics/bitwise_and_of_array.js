// Given a number N and an array of N elements ,find the Bitwise AND of the array elements.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
    var a=[],and;
    a=n[1].split(" ");and=a[0];
    x=a[0];y=a[1];
    for(var i=1;i<a.length;i++)and=and&a[i];
    console.log(and);
});
