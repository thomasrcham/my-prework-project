
function bunnyMove() {
    const bunny1 = document.querySelector("span img")
    bunny1.setAttribute("id", "bunny-2")
    bunny1.setAttribute("onmouseover", "bunnyMove2()" )
    document.getElementById("heading").innerText = "Well that was rude."
    document.getElementById("p").innerText = "He's way the heck down there now! Go get him!"
}          

function bunnyMove2() {
    const bunny1 = document.querySelector("span img")
    bunny1.setAttribute("id", "bunny-3")
    bunny1.setAttribute("onmouseover", "bunnyMove3()" )
    document.getElementById("heading").innerText = "Oh for Pete's sake!"
    document.getElementById("p").innerText = "GRAB THAT BUNNY!"
}

function bunnyMove3() {
    const bunny1 = document.querySelector("span img")
    document.getElementById("bunny-5").style.visibility = "visible";
    bunny1.setAttribute("id", "bunny-4")
    bunny1.removeAttribute ("onmouseover")
    bunny1.setAttribute("onclick", "success()")
    document.getElementById("heading").innerText = "Now there's two of them??"
    document.getElementById("p").innerText = "Click the correct bunny and save my info!"
}

function bunnyMove4() {
    const bunny5 = document.querySelector("#bunny-5")
    bunny5.setAttribute("src", "./images/bunny-3.png")
}

function success() {
    document.getElementById("heading").innerText = "You did it! You saved my info!"
    document.getElementById("p").innerText = "Finally I can tell you that my name is Reese and I live in Austin. Isn't that exciting??"
}
