let bunnySpace;

function bunnySpace1 (src, width, height, alt){
    currentScene = 1;
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img)
}

bunnySpace1 ("./images/bunny-1.png", 100, 100, "bunny");