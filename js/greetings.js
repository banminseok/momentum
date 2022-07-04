const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");
function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저 기본동작을 막아준다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    //greeting.innerText = "Hello " + username;
    paintGreetings(username);
}
function onLoginBtnClick() {
    //console.dir(loginInput);
    //console.log(loginInput.value);
    /*const username = loginInput.value;
    if (username==="") {
        alert("Please write your name");        
    }else if(username.length > 15){
        alert("Your name is too long.");      
    }*/
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//loginButton.addEventListener("click",onLoginBtnClick);


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername===null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings(savedUsername);
}