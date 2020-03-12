function hid() {
    document.getElementById("qb").style.display = "none";
}

function question() {
    document.getElementById("qb").style.display = "";

}

function addQuestion() {
    let ques = document.getElementById("q").value;
    document.getElementById("q1").innerHTML = ques;
    let ans = document.getElementById("a").value;
    document.getElementById("a1").innerHTML = ans;
    document.getElementById("fc").style.display = "";
    document.getElementById("qb").style.display = "none";


}

function edit() {
    let ques = document.getElementById("q1").value;
    document.getElementById("q").innerHTML = ques;
    let ans = document.getElementById("a1").value;
    document.getElementById("a").innerHTML = ans;
    document.getElementById("qb").style.display = "";
    document.getElementById("fc").style.display = "";

}

function del() {
    document.getElementById("fc").style.display = "none"
}

function sh() {
    var x = document.getElementById("a1");
    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}
