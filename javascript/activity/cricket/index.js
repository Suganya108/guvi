let s=[],w=[],b=[],o=[],score1=0,score2=0,p=[1,1];
w=[0,0];b=[36,36];o=[0,0];p=[1,1];
function play1(){
    if(w[0]>=10 || b[0]<=0){
        localStorage.setItem("Score1",score1);
        alert("Game Over");
        return 0;
    }
    o[0]+=1;
    let r= Math.floor(Math.random() * 7);
    document.getElementById("r1").value=r;
    score1+=parseInt(r);
    document.getElementById("s1").value=score1;
    document.getElementById("p1").value=p[0];
    if(r==0){w[0]+=1;}
    document.getElementById("w1").value=w[0];
    let bl1=document.getElementById("b1").value;
    b[0]=parseInt(bl1)-1;
    document.getElementById("b1").value=b[0];
    if(o[0]==6 || r==0){o[0]=0;p[0]+=1;}
    
}
function play2(){
    if(w[1]>=10 || b[1]<=0){
        localStorage.setItem("Score2",score2);
        alert("Game Over");
        return 0;
    }
    o[1]+=1;
    let r= Math.floor(Math.random() * 7);
    document.getElementById("r2").value=r;
    score2+=parseInt(r);
    document.getElementById("s2").value=score2;
    document.getElementById("p2").value=p[1];
    if(r==0){w[1]+=1;}
    document.getElementById("w2").value=w[1];
    let bl1=document.getElementById("b2").value;
    b[1]=parseInt(bl1)-1;
    document.getElementById("b2").value=b[1];
    if(o[1]==6 || r==0){o[1]=0;p[1]+=1;}
    
}
