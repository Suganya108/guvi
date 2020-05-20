var body = document.getElementsByTagName('body')[0];
var b = document.createElement('button');
b.id = 'b1'
b.style.width = '10%';
b.style.height = '30px';
b.innerHTML = 'Random';
b.style.align = 'center';
b.style.backgroundColor = 'pink';
body.appendChild(b);
var t = document.createElement('h1');
t.style.textAlign = 'center';
t.id = 't1';
body.appendChild(t);

function random() {
    var a = [];
    while (a.length < 5) {
        var v = Math.floor(Math.random() * 10);
        if (a.every((x) => x !== v)) {
            a.push(v);
        }
    }
    document.getElementById("t1").innerHTML = a.join("");
}

document.getElementById("b1").onclick = random;
