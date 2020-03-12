/* Given a number N followed by N numbers. 
Out of these N numbers some of them are repeated. 
Write a program to find the first number which is repeated. 
If no numbers are repeated print 'unique'. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[1].split(" "),c=0;
  for(var i=0;i<a.length;i++){
    for(var j=i+1;j<a.length;j++){
      if(a[i]==a[j]){
        c=a[i];
        break;
      }
    }
  }
  if(c===0)console.log("unique");
  else console.log(c);
});
