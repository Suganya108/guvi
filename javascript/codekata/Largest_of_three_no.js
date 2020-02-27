# You are given three numbers A, B & C. Print the largest amongst these three numbers.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],b=n[1],c=n[2]
  if(a>b && a>c){
    console.log(a)}
  else if(b>a && b>c){
	console.log(b)}
  else{
	console.log(c)}

});
