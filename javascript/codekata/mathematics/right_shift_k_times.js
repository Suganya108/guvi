// Given two numbers N,K followed by an array of N elements, print the array after doing right shift K times (in cyclic manner).

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),m;
  var b=n[1].split(" ");
  var k=parseInt(a[1]);
  for(var i=0;i<k;i++){
    m=b.pop();
    b.unshift(m);
  }
  console.log(b.join(" "));
});
