// Divide two given integers A and B without using multiplication, division and mod operator. If it is overflow, return MAX_INT.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),b=parseInt(a[0]),c=parseInt(a[1]),q=0,r=b;
  if(c>b)console.log(b/c);
  else{
    while(r>c || r!==0){
      r-=c;
      q+=1;
    }
  console.log(q);}
});
