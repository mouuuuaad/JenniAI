let menu = document.getElementById("menu");
let Xmark = document.getElementById("Xmark");
let header = document.querySelector("header")
menu.onclick = function(){
    menu.style.display="none";
    Xmark.style.display="block";
    header.style.display="block";
}
Xmark.onclick = function(){
    menu.style.display="block";
    Xmark.style.display="none";
}