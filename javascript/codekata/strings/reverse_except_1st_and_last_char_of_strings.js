/* Given a string S consisting of a sentence, the task is to reverse every 
word of the sentence except the first and last character of the words. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),b=[];
  for(var i=0;i<a.length;i++){
    var s=a[i].split("").reverse();
    s[0]=a[i][0];
    s[s.length-1]=a[i][s.length-1];
    b.push(s.join(""));
  }
  console.log(b.join(" "));
});
