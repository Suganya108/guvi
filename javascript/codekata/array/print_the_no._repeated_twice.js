// Print the number which is repeated twice


const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=+n[0],l=n[1].split(" ").map(x=>+x),c=0,b=[];
  for(var i=0;i<a;i++){
    for(var j=0;j<a;j++){
      if(l[i]===l[j])c+=1;
    }
    if(c===2)b.push(l[i]);
    c=0;
  }
  var p=[...new Set(b)];
  console.log(p.join(" "));
});
