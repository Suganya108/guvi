// Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[],s,c=0;
  a=n[0].split(" ");
  var N=parseInt(a[0]),M=parseInt(a[1]);
  var p=N*M;
  for(var i=1;i<=N;i++){
    s=Math.pow(i,2);
    if(s==p)
      c+=1;
  }
  if(c==1)
    console.log("yes");
  else
    console.log("no");
});
