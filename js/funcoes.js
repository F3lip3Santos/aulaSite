
var usu = "Felipe";
var curso = "Javascript";

/*alert("Ola seja bem vindo " + usu + " ao curso de " + curso);*/

//var nome = prompt("Ola seja bem vindo " + usu + " ao curso de " + curso);
//document.write("Seja bem vindo " + nome);

function mensagem(){
    alert("Curioso!!!");
}

function validar(){

    var nome=form_user.nome.value;
    var email=form_user.email.value;
    var senha=form_user.senha.value;  

    if(nome == ""){
        alert("O preenchiemnto é obrigatorio");
        form_user.nome.focus();
        return false;
    }

    if(email == "" || email.indexOf('@')==-1){
        alert("Email incorreto");
        form_user.email.focus();
        return false;
    }

    if(senha == "" || senha.length<=5){
        alert("A senha deve ter no minimo 6 caracteres");
        form_user.senha.focus();
        return false;
    }
}