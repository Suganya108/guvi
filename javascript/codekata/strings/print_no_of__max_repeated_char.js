/* Given a string S,count the maximum number of times a character
repeated in the string.If no character is repeated print '0'. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],c=1,l=[];
  for(var i=0;i<a.length;i++){
    for(var j=0;j<a.length;j++)
      if(i!==j && a[i]===a[j])c+=1;
    l.push(c);
    c=1;
  }
  l.sort(function(x,y){return x-y});
  if(l.length>0)console.log(l.pop());
  else console.log("0");
});
