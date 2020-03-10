// Given 3 points check whether they lie on the same line.If they lie on the same line print 'yes' Otherwise print 'no'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),b=n[1].split(" "),c=n[2].split(" ");
  for(var i=0;i<2;i++){
      a[i]=parseInt(a[i]);
      b[i]=parseInt(b[i]);
      c[i]=parseInt(c[i]);
  }
  if((a[0]*(b[1]-c[1]))+(b[0]*(c[1]-a[1]))+(c[0]*(a[1]-b[1]))===0)
    console.log("yes");
  else
    console.log("no");
});
