let btnSignIn = document.getElementById('sign-in');
btnSignIn.addEventListener('click', function() {
    let modalSignUp = document.getElementById('sign-up');
    modalSignUp.style.display = 'block';
});

let btnModalClose = document.getElementById('close-sign')
btnModalClose.addEventListener('click', function() {
    let modalclose = document.getElementById('sign-up');
    modalclose.style.display = 'none';
});

let btnConnect = document.querySelector('#connect');

btnConnect.addEventListener('click', function(){
    let modalclose = document.getElementById('sign-up');
    modalclose.style.display = 'none';
    let modalConnect = document.getElementsByClassName('connect');
    modalConnect.style.display = 'block';
});








