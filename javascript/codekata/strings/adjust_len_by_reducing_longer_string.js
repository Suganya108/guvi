/* Given 2 strings S1 and S2,work on the strings such that both string has the same number of characters.
To adjust the length reduce number of exceeding characters from longer string. */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split(" "),b=a[0].length,c=a[1].length,s1="",s2="";
  if(b<c)
    for(var i=0;i<b;i++){
      s1+=a[0][i];
      s2+=a[1][i];
    }
  else if(c<b)
    for(var i=0;i<c;i++){
      s1+=a[0][i];
      s2+=a[1][i];
    }
  else{s1=a[0];s2=a[1];}
  console.log(s1+s2);
});
