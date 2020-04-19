// A number is given as input(as string). Find the maximum length of substring alternating digits of odd and even.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("").map(x=>+x),c=1,l=[];
  for(var i=0;i<a.length-1;i++){
    if((a[i]%2===0 && a[i+1]%2!=0) || (a[i]%2!=0 && a[i+1]%2===0))c+=1;
    else{l.push(c);c=1;}
  }
  l.push(c);
  l.sort(function(x,y){return x-y});
  console.log(l.pop());
});
