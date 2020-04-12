// Given a string, print the run-length encoded output.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),c=1,s="",d=a[0];
  for(var i=1;i<a.length;i++){
    if(d===a[i])c+=1;
    else{
      s+=a[i-1]+c;
      d=a[i];
      c=1;
    }
    if(i===a.length-1)s+=a[i]+c;
  }
  console.log(s);
});
