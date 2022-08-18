/*let bunnySpace1;*/

/*function bunnySpace1 (src, alt){
    currentScene = 1;
    var img = document.createElement("img");
    img.src = src;
    img.width = 100;
    img.height = 200;
    img.alt = alt;
    img.className = "bunny-1";
    document.body.appendChild(img)
}*/

 

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        document.getElementById("img").style.left = "200px";
    }
})

bunnySpace1 ("./images/bunny-1.png", "bunny");
