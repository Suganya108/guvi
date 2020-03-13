// First line contains two number ‘n’ and ‘k’.Next line contains n space separated numbers.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),l=n[1].split(" "),s,d;
  s=parseInt(a[1]);
  for(var i=0;i<s;i++){
    d=l.pop();
    l.unshift(d);
  }
  console.log(l.join(" "));
});
