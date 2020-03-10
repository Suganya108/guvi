// Given a number N, check whether it is prime or not.Print 'yes' if it is prime else print 'no'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  let a=parseInt(n[0]),c=0;
if(a>1){
    for(let i=2;i<a/2+1;i++){
        if((a%i)===0){
            console.log("no");
            c=1;
            break}
    }
    if(c!==1){
        console.log("yes")}
    
}
else{
    console.log("no")}

});
