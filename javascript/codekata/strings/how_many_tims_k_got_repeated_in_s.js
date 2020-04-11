/* Given a string 'S' and a character 'K', find how many times 
'K' got repeated in 'S'.If 'K' is not found in 'S' print -1 */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),c=0;
  for(var i=0;i<a[0].length;i++)
    if(a[0][i]===a[1])c+=1;
  if(c!==0)console.log(c);
  else console.log("-1");
});
