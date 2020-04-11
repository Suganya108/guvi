/* Given 2 strings S and X print the word position of X in S.(word count starts from 1).
If the given word doesn't exists in S print '-1'. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),b=n[1];
  if(a.indexOf(b)!==-1)console.log(a.indexOf(b)+1);
  else console.log("-1");
});
