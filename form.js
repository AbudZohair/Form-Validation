const form = document.querySelector('.register-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#pass');
const namePattern = /^[a-zA-Z]{3,}$/;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordPattern =    /^(?=.{8,30}$).*/; 



name.addEventListener('keyup', () => {

    check(name, namePattern, hint('Enter a valid Name in English letters only'));
});

email.addEventListener('keyup', () =>{
    check(email, emailPattern, hint('Enter a valid email e.g(test@example.com)'));
})
password.addEventListener('keyup', () =>{
    check(password, passwordPattern, hint('Password must be (8 t0 30) characters'));
})

form.addEventListener('submit', (e) =>{

    if(!namePattern.test(name.value) || !emailPattern.test(email.value) || !passwordPattern.test(password.value)){
        e.preventDefault();
    }
});

// Hint Creator Function
function hint(msg) {

    let hintMsg = document.createElement('p');
    hintMsg.className = 'hint';
    hintMsg.innerHTML = msg;

    return hintMsg;
}


// Pattern Checker and Hint appearance
function check(input, pattern, hint) {

    if (input.parentElement.lastChild.nodeName == "P") {
        input.parentElement.lastChild.remove();
    }

    if (!pattern.test(input.value)) {
        input.parentElement.appendChild(hint);
        input.style.borderBottom = "1px solid crimson";
        input.labels[0].style.color = 'crimson'

    } else{
        input.style.borderBottom = "1px solid greenyellow";
        input.labels[0].style.color = 'greenyellow';
    }
}

