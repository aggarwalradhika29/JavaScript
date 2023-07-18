var btn = document.getElementById("button-click");
var mainDiv = document.querySelector("header div");
// console.log(mainDiv);
// console.log(btn);
function onBtnClick() {
    // alert("Button Clicked");
    mainDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
}
btn.addEventListener('click', onBtnClick);