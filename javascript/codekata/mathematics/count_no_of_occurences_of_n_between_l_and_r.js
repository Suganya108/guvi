// Given three numbers L,R,N, print the count of numbers with occurences of the number N in [L,R].

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const m=[];
inp.on("line",(data)=>{
  m.push(data);});
inp.on("close",()=>{
  var c=0,a=m[0].split(" "),l=parseInt(a[0]),r=parseInt(a[1]),n=a[2];
  for(var i=l;i<=r;i++){
      var s="";
      s+=i;
    var d=s.indexOf(n);
    if(d!==-1)c+=1;
  }
  console.log(c);
});
