// Given a sentence interchange the between the word 'and'.

const readline = require('readline');
const inp = readline.createInterface({
  input:process.stdin
});

const n = [];

inp.on("line", (data) => {
	n.push(data);
});

inp.on("close", () => {
	var s=n[0].split(" "),v=[...s];
	for(var i=0;i<s.length-1;i++){
	    if(s[i]==="and"){
	        v[i-1]=s[i+1];
	        v[i+1]=s[i-1];
	    }
	}
	console.log(v.join(" "));
});
