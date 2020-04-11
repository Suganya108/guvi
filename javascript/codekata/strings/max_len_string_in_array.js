/* Find the word having maximum length in a given sentence and print it. 
If two words are of same length return the first occuring word of max-length. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),l=[];
  for(var i=0;i<a.length;i++){
    l.push(a[i].length);
  }
  var b=[...l],m;
  b.sort(function(x,y){return x-y});
  m=b.pop();
  console.log(a[l.indexOf(m)]);
});
