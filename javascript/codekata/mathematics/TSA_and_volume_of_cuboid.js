/* Write a program to calculate the total surface area and volume of cuboid. 
Input contains three space separated positive integers L, B, H denoting the length,
width and height of cuboid respectively. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),s,v;
  let l=parseInt(a[0]),b=parseInt(a[1]),h=parseInt(a[2]);
  s= 2*((l* b)+(l*h)+(b*h));
  v=l*b*h;
  console.log(s,v);
});
