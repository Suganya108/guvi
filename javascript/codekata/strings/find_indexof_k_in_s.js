/* Given a string 'S' and a character 'K', find at what position 
the character 'K' occurs for the first time in 'S'.(Assume the index 
of string starts at 1).If the character is not found in 'S' then print -1 */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  if(a[0].indexOf(a[1])!==-1)
    console.log(a[0].indexOf(a[1])+1);
  else
    console.log("-1");
});
