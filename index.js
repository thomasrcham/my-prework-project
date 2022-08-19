
function bunnyMove() {
    /*document.getElementById("bunny-1").onmouseover = bunnyMove2();*/
    /*document.getElementById("bunny-1").style.left = "200px"*/
    const bunny1 = document.querySelector("span img")
    bunny1.setAttribute("id", "bunny-2")
    bunny1.setAttribute("onmouseover", "bunnyMove2()" )
    document.getElementById("heading").innerText = "Well that was rude."
    /*document.getElementById("bunny-1").style.visibility = "hidden";
    document.getElementById("bunny-2").style.visibility = "visible";
    document.getElementById("bunny-3").style.visibility = "hidden";
    document.getElementById("bunny-4").style.visibility = "hidden";*/
}          

function bunnyMove2() {
    const bunny1 = document.querySelector("span img")
    bunny1.setAttribute("id", "bunny-3")
    bunny1.setAttribute("onmouseover", "bunnyMove3()" )
    document.getElementById("heading").innerText = "Wait now there's two of them??"
    document.getElementById("bunny-4").style.visibility = "visible";
    /*document.getElementById("bunny-2").style.visibility = "hidden";    
    document.getElementById("bunny-4").style.visibility = "visible";*/
}

function bunnyMove3() {
    document.getElementById("heading").innerText = "check"
}