/* Given a string S, check if it can be made into a palindrome by making atmost one
character replacement,if it results in palindrome print 'yes' otherwise print 'no' */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),b=[...a],r=b.reverse(),r1=b.reverse(),c=0,a1;
  for(var i=0;i<a.length/2;i++){
    r1[a.length-1-i]=a[i];
    a1=[...r1].reverse();
    if(a.join("")===r.join("") || a1.join("")===r1.join("")){c=1;break;}
    r1=b.reverse();
  }
  if(c===1)console.log("yes");
  else console.log("no");
});
