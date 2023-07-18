// var btn = document.getElementById("button-click");
// var mainDiv = document.querySelector("header div");
// // console.log(mainDiv);
// // console.log(btn);
// function onBtnClick() {
//     // alert("Button Clicked");
//     mainDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
// }
// btn.addEventListener('click', onBtnClick);

// var mainHeading = document.getElementById("main-heading");
// var btn = document.getElementById('button-click');
// var sidebar = document.getElementById()
// mainHeading.classList.add('big');

// btn.addEventListener('click', function() {
//     mainHeading.classList.remove('big');
// });
// setTimeout(function() {
    
// }, 1500);

var username = document.getElementById('username');
username.addEventListener('input', function(event) {
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    console.log(currentValue);
    username.value = currentValue;
});

username.addEventListener('focus', function() {
    console.log("Element focused!");
});
username.addEventListener('blur', function() {
    console.log('Lost focus!');
});

var loginForm = document.getElementById("login-form");
loginForm.addEventListener('submit', function(e) {
    alert('Submit button clicked!');
    e.preventDefault();
});