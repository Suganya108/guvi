/* Prateek finds it difficult to judge the minimum element in the list of elements given to him. 
Your task is to develop the algorithm in order to find the minimum element. */


const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]),l=[],s=[];
  l=n[1].split(" ");
  for(var i=0;i<a;i++)
    s[i]=parseInt(l[i]);
  s.sort();
  console.log(s[0]);
  
})
