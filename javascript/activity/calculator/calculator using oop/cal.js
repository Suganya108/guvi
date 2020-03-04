
class calculator{
    constructor(){}
do(val){
    document.getElementById("ans").value+=val;
}

result(){
    let x = document.getElementById("ans").value;
    let y = eval(x);
    document.getElementById("ans").value=y;
}

clr(){
    document.getElementById("ans").value="";
}
}
let c = new calculator();
