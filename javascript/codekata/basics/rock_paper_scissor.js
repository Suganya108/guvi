// Let P represent Paper, R represent Rock and S represent Scissors. Given 2 out of the 3 determine which one wins.
// If its a draw print 'D'.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
    var a=[],x,y;
    a=n[0].split(" ");
    x=a[0];y=a[1];
    if((x=='R' && y=='P')||(x=='P' && y=='R')){
        console.log('P');}
    else if((x=='S' && y=='P') || (x=='P' && y=='S')){
        console.log('S',end="");}
    else if((x=='R' && y=='S') || (x=='S' && y=='R')){
        console.log('R');}
    else{
        console.log('D');}

});
