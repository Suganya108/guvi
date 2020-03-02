// Given 3 numbers A,B,C process and print 'yes' if they can form the sides of a triangle otherwise print 'no'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=[];
  a=n[0].split(" ");
  if(a[0]+a[1]>a[2] && a[1]+a[2]>a[0] && a[2]+a[0]>a[1]){
    console.log("yes")}
  else{
    console.log("no")}
});
