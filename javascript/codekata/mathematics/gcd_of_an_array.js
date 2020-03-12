/* You are given an array size ‘n’.Next line contains n space separated numbers.
Your task is to print the gcd of number */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[1].split(" "),b=[],c=1;
  for(let i=0;i<a.length;i++){
      if(a[i]!==""){
          b.push(parseInt(a[i]));
      }
  }
  b.sort(function(x,y){return x-y;});
  for(var j=1;j<b.length;j++){
      if(b[j]%b[0]===0)
      c*=1;
      else c=0
  }
  if(c===1)console.log(b[0]);
});
