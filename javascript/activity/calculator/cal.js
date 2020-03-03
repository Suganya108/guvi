document.getElementById("1").addEventListener("click", doSomething);
document.getElementById("2").addEventListener("click", doSomething);
document.getElementById("3").addEventListener("click", doSomething);
document.getElementById("4").addEventListener("click", doSomething);
document.getElementById("5").addEventListener("click", doSomething);
document.getElementById("6").addEventListener("click", doSomething);
document.getElementById("7").addEventListener("click", doSomething);
document.getElementById("8").addEventListener("click", doSomething);
document.getElementById("9").addEventListener("click", doSomething);
document.getElementById("0").addEventListener("click", doSomething);
document.getElementById("*").addEventListener("click", doSomething);
document.getElementById(".").addEventListener("click", doSomething);
document.getElementById("/").addEventListener("click", doSomething);
document.getElementById("+").addEventListener("click", doSomething);
document.getElementById("-").addEventListener("click", doSomething);
document.getElementById("c").addEventListener("click", clr);
document.getElementById("%").addEventListener("click", doSomething);
document.getElementById("=").addEventListener("click", result);

function doSomething(){
    var val=this.value;
    document.getElementById("ans").value+=val;
}

function result(){
    let x = document.getElementById("ans").value;
    let y = eval(x);
    document.getElementById("ans").value=y;
}

function clr(){
    document.getElementById("ans").value="";
}
