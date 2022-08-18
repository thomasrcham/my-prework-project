
function bunnyMove() {
    document.getElementById("bunny-1").onmouseover = bunnyMove2();
    document.getElementById("bunny-1").style.visibility = "hidden";
    document.getElementById("bunny-2").style.visibility = "visible";
    document.getElementById("heading").innerText = "Well that was rude."
}          

function bunnyMove2() {
    document.getElementById("heading").innerText = "check"
}

