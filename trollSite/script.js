var myWindow;
var windowH;
var windowW;
var sound;
function init() {
    var btn = document.getElementById("windowBtn");
    btn.addEventListener("click", openWindow);
    btn.addEventListener("click", openWindowAuto);
    windowH = screen.height;
    windowW = screen.width;
    sound = new Audio("stinky.mp3");
}
window.addEventListener("load", init);

function openWindowAuto() {
    setInterval(openWindow, 3000);
    setInterval(move, 500);
}

function openWindow() {
    myWindow = window.open("", "", "width=230, height=230, menubar=no, titlebar=no, scrollbars=no");
    myWindow.addEventListener("mouseover", move);
    sound.play();
    myWindow.document.write("<audio src='/trollSite/stinky.mp3' autoplay></audio>");
    myWindow.document.write("<img src='/trollSite/monkeh.jpg' style='width: 200px; height:200px;' >");
}

function move() {
    var randH = Math.floor(Math.random() * windowH);
    var randW = Math.floor(Math.random() * windowW);

    myWindow.moveTo(randW, randH);
}


