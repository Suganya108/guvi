/* Given a number N and K followed by N elements and K elements. 
Now insert the given K elements one by one into the array and
print the maximum in the array after each insertion . */

const readline = require("readline");
var ar=[]
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
  ar.push(data)
});
inp.on("close", () => {
  var l1=ar[1].split(" ").map(x=>+x),l2=ar[2].split(" ").map(x=>+x),r=[];
  for(var i=0;i<l2.length;i++){
    l1.push(l2[i]);
    l1.sort((x,y)=>x-y);
    r.push(l1[l1.length-1]);
  }console.log(r.join(" "));
});
