const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0],pn=[],p1=[],p2=[],p3=[];
  for(var i=2;i<a;i++){
      c=false
      for(var j=2;j<i;j++){
          if(i%j===0){
              c=true;
          }}
          if(c===false){
              pn.push(i);
              break
              
          }
  }
  for(var i=0;i<pn.length;i++){
      for(var j=i+1;j<pn.length;j++){
          for(var k=j+1;k<pn.length;k++){
              if(pn[i]+pn[j]+pn[k]==a){
              p1.push(pn[i]);
              p2.push(pn[j]);
              p3.push(pn[k]);
              break;
              }
              
              
          }
      }
  }console.log(p1[0],p2[0],p3[0])
});
