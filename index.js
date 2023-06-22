let check = document.querySelector(".check");
let senha = document.querySelector(".senha");
let inputSenha = document.querySelector(".inputSenha");

check.addEventListener('click' , ()=>{
    if(check.checked){
       senha.style.display="block";
       inputSenha.style.display="inline-block";
    } else{
        senha.style.display="none";
        inputSenha.style.display="none";
    }
});