// Print the table of nine with single space between the elements till the number that is input.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],s='';
  if(a==0){
    console.log("NULL")}
  else{
    for(var i=1;i<a+1;i++){
    if(i<a){
    s+=9*i+" "
    }
      else{
      s+=9*i
      break}
    }
    console.log(s)
  }
});
