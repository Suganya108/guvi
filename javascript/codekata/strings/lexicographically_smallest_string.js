// Given a number N and an array of N strings, find the lexicographically smallest string.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=+n[0],l=[],s=[];
  for(var i=1;i<=a;i++){
    s.push(n[i]);
    l.push(n[i].length);
  }
  var b=[...l],m;
  b.sort(function(x,y){return x+y});
  m=b.pop();
  console.log(s[l.indexOf(m)]);
});
