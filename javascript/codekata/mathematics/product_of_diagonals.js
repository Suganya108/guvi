// Given a square matrix of size N x N, find the sum of the product of its diagonals.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
    var d=data.split(" ")
  n.push(d);});
inp.on("close",()=>{
  var a=n,num,b;
  a.shift();
var i=0,p=1,s=1;
for(var j=0;j<a.length;j++){
    p*=parseInt(a[j][i]);
    i+=1
}
i=a.length-1;
for(var j=0;j<a.length;j++){
    s*=parseInt(a[j][i]);
    i-=1
}

console.log(p+s)
});
