/* Roman Reigns want to identify the repeated letters in two given 
strings and capitalize it.Help him to achieve it. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var b=n[0].toLowerCase();
  var a=b.split(""),s=[...a];
  for(var i=0;i<a.length;i++){
    for(var j=0;j<a.length;j++){
      if(i!==j && a[i]===a[j]){
        s[i]=a[i].toUpperCase();
        s[j]=a[j].toUpperCase();
      }
    }
  }
  console.log(s.join(""));
});
