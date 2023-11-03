
const myEamil = "ami@gmail.com";
const myPassword = 123456;
// const myNumber = '01781996007'

const emailErro = document.getElementById("emailErro");
const passwordErro = document.getElementById("passwordErro");
// const numberdErro= document.getElementById("numberdErro");


const submit = document.getElementById("submit")

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // const number = document.getElementById("number").value;

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

    // if(number ==``){
    //     numberdErro.textContent =`please enter curret number`;
    // }
    // else if(number.length > 11 || number.length < 11){
    //     numberdErro.textContent = `Imporper Number!`;
    // }
    // else{
    //     numberdErro.textContent = '';
    // }
    // document.getElementById("number").value ='';

    if( myEamil==email && myPassword==password){
        window.location.assign(`https://my-protfolio-blush.vercel.app/`)
    }else{
        alert("please curred url")
    }

})