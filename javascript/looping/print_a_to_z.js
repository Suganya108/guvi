// Write a program to print all alphabets from a to z. - using while loop

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const a=[];
inp.on("line",(data)=>{
  a.push(data);});
inp.on("close",()=>{
  var n=97;
  while(n<=122){
      console.log(String.fromCharCode(n));
      n+=1
      
  }
});
