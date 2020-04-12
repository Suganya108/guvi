// Given a date(DD-MM-YYYY),print the month in words.

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=n[0].split("-").map(x=>+x),m=a[1];
  if(m===3)console.log("March");
  else if(m===1)console.log("January");
  else if(m===2)console.log("February");
  else if(m===4)console.log("April");
  else if(m===5)console.log("May");
  else if(m===6)console.log("June");
  else if(m===7)console.log("July");
  else if(m===8)console.log("August");
  else if(m===9)console.log("September");
  else if(m===10)console.log("October");
  else if(m===11)console.log("November");
  else if(m===12)console.log("December");
});
