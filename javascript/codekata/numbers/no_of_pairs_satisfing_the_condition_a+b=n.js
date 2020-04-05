/* You are given with a number ‘n’. You have to count the pair of 
two numbers a and b such that sum of two numbers are equal to n. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0]),c=0;
  for(var i=1;i<a;i++){
    for(var j=1;j<a;j++){
      if(i+j===a)c+=1;
    }
  }
  console.log(c);
});
