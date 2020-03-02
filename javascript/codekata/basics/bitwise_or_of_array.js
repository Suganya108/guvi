// Given a number N and an array of N elements, find the Bitwise OR of the array elements.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
    var a=[],or;
    a=n[1].split(" ");or=a[0];
    x=a[0];y=a[1];
    for(var i=1;i<a.length;i++)or=or|a[i];
    console.log(or);
});
