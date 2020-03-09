/* In a world cup tournament,no of goals scored by each team is given to you. 
Your task is to calculate net goal rate of each team.
Net goal rate of team is calculated
No of goals(team)- sum of(no of goals by last 3 teams) */

const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  let a=n[1].split(" "),b=parseInt(n[0]),l=0,r=[];
  for(var i=b-1;i>b-4;i--)
    l+=parseInt(a[i]);
  for(var i=0;i<b;i++)
    r.push(parseInt(a[i])-l);
  console.log(r.join(" "));

});
