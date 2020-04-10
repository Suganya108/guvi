// Given a string/sentence print its corresponding camelcase convention.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" ");
  for(var i=0;i<a.length;i++){
    var s=a[i][0].toUpperCase();
    for(var j=1;j<a[i].length;j++)s+=a[i][j];
    var v="";
    v+=s;
  }
  console.log(v);
});
