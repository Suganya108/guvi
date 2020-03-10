const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]),c=1,p=2;
  while(c===1){
    p=Math.pow(p,2);
    if(p>=a){
    c=0;
    break;}
  }
  if(p===a)console.log("yes");
  else console.log("no");
});
