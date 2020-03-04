let score1=localStorage.getItem("Score1");
let score2=localStorage.getItem("Score2");
let x=parseInt(score1);
let y=parseInt(score2);
//document.getElementById("res").addEventListener("click",act);
let a="TEAM A WIN THE MATCH";
let b="TEAM B WIN THE MATCH";
let c="Draw";
//document.getElementById("t").value="TEAM A WIN"

//function act(){
if(x>y){let s=x-y;alert(a+" BY "+s+" RUNS");
    //document.getElementById("res").style="background-color:LightPink;";
    //document.getElementById("t").value="TEAM A WIN"
}
else if(x<y){let s=y-x;alert(b+" BY "+s+" RUNS");
    //document.getElementById("res").style="background-color:Cyan;";
    //document.getElementById("t").value = b;
}
else{alert(c);
    //document.getElementById("res").style="background-color:Blue;";
    //document.getElementById("t").value = c;
}
//}
