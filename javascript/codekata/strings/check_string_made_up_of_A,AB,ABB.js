/* You are given a string ‘s’.Determine whether the string given is made up of either

A
AB
ABB

If the string given is made up of any frequency occurrence of the above Print 1 else 0 */


const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],m=/[AB]/g,c=1;
  for(var i=0;i<a.length;i++){
    if(a[i].match(m))c*=1;
    else c*=0;
  }
  console.log(c);
});
