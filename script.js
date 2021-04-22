/** open modal sign-up */
let btnSignIn = document.getElementById("sign-in");
btnSignIn.addEventListener("click", function () {
    let modalSignUp = document.getElementById("sign-up");
    modalSignUp.style.display = "block";
});

/** close modal sign-up */
let btnModalClose = document.getElementById("close-sign");
btnModalClose.addEventListener("click", function () {
    let modalclose = document.getElementById("sign-up");
    modalclose.style.display = "none";
});

/** close modal sign-up and open modal connect */
let btnConnect = document.getElementById("link-connect");
btnConnect.addEventListener("click", function (event) {
    event.preventDefault;
    let modalclose = document.getElementById("sign-up");
    modalclose.style.display = "none";
    let modalConnect = document.getElementById("connect");
    modalConnect.style.display = "block";
});

/** close modal connect */
let btnModalCloseConnect = document.getElementById("close-connect");
btnModalCloseConnect.addEventListener("click", function () {
    let modalclose = document.getElementById("connect");
    modalclose.style.display = "none";
});
