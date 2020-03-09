/* You are given an array of numbers. Print the least occurring element. 
If there is more than 1 element print all of them in decreasing order of their value. */
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]),l=n[1].split(" "),d=[],c=0,r=[],f=[];
  for(let i=0;i<a;i++){
      for(let j=i+1;j<a;j++){
          if(l[i]===l[j]){
              c=1;
          }
          
      }
      if(c!=1)d.push(l[i]);
      else r.push(l[i])
      c=0;
  }
        for(let k=0;k<d.length;k++){
          if(r.indexOf(d[k])===-1){f.push(d[k]);}
      }

  console.log(f.sort().reverse().join(" "));
});
