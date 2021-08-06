var btn = document.getElementsByClassName("BtnColor");
for (var i = 0; i < btn.length; i++) {
    console.log(btn[i]);
    btn[i].addEventListener('click', commonListener);
}
function commonListener(event) {
    if (event.target.id == 'btnRed') {
        document.body.style.backgroundColor = "red";
        return;
    }
    document.body.style.backgroundColor = "blue";
}