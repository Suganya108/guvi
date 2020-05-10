
// Print 'yes' if the given string is balanced and no if it is not


const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(""),f1=0;f2=0,a1=0,a2=0,s1=0,s2=0;
  for(var i=0;i<a.length;i++){
    if(a[i]=='{')f1+=1;
    else if(a[i]=='}')f2+=1;
    else if(a[i]=='[')a1+=1;
    else if(a[i]==']')a2+=1;
    else if(a[i]=='(')s1+=1;
    else if(a[i]==')')s2+=1;
  }
  if(f1===f2 && a1===a2 && s1===s2)
    console.log("yes");
  else
    console.log("no");
});
