// Accept a string and find if it is of date format 'dd/mm/yyyy'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("/"),d=a[0],m=a[1],y=a[2];
  if((0<d && d<=31) && (0<m && m<=12) && (0<y))console.log("yes");
  else console.log("no");
});
