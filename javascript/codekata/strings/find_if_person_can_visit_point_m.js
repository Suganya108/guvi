/* Given 2 numbers n and m, n pairs of numbers a and b are given. 
In each pair 'a' means a person can start moving from point 'a' in the 
x axis to point 'b'(he can visit any point in between). Find if he can visit point m. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var l=n[0].split(" ").map(x=>+x),a=[],b=[],c=0;
  for(var i=1;i<=l[0];i++){
    var s=n[i].split(" ").map(x=>+x);
    a.push(s[0]);
    b.push(s[1]);
  }
  for(var i=0;i<l[0];i++){
    for(var j=a[i];j<=b[i];j++){
      if(l[1]===j){c=1;break;}
    }
  }
  if(c===1)console.log("yes");
  else console.log("no");
});
