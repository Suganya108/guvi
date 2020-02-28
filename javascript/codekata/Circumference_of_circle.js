// Calculate and print the Circumference of the circle corresponding to the input radius up to two decimal places.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0];
  if(a<0){
    console.log("Error")}
  else{
    var v=a*2*3.142
    console.log(v.toFixed(2))}
});
