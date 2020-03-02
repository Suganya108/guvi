// Given a number N, print 'yes' if it is composite else print 'no'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],c=0;
  if(a>1){
      for(var i=2;i<a;i++){
          if((a%i)==0){
            console.log("yes");
            c=1;
            break
              
          }}
          if(c==0){
              console.log("no",end="")
              
          
          
      }
      
  }
  else {console.log("yes");}
});
