
const myEamil = "ami@gmail.com";
const myPassword = 123456;

const emailErro = document.getElementById("emailErro");
const passwordErro = document.getElementById("passwordErro");


const submit = document.getElementById("submit")

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if(email=='' || !email.includes(`@`)){
        emailErro.textContent = `please enter valide email`;
    }else{
        emailErro.textContent =``;
    }
    document.getElementById('email').value = '';
    if(password==``){
        passwordErro.textContent = `please enter curret password`;
    }else{
        passwordErro.textContent = ``;
    }

    if( myEamil==email && myPassword==password){
        window.location.assign(`../game.html`)
    }else{
        alert("please curred url")
    }

})