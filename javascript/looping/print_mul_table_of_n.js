// Write a program to print multiplication table of any number.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const a=[];
inp.on("line",(data)=>{
  a.push(data);});
inp.on("close",()=>{
  var n=a[0],i=1;
  while(i<=10){
      console.log(i+" x "+n+"= "+n*i);
      i+=1
      
  }
});
