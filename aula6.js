// // // Operators logics

// // && => AND
// // || => OR
// // ! => NOT

// AND 

//  v v v 
//  v f f
//  f v f 
//  f f f

// =================

// OR 

// v v v 
// v f v
// f v v 
// f f f 

// =================




// criação do sistema

// criação da função

function logado(){
    let user = document.getElementById("login").value;
    let password = document.getElementById("senha").value;

    if(user == "jeferson" || password == "1234"){
        alert("Logado com sucesso");
        location.href = "home5.html"
    }else{
        alert("Usuário ou senha incorretos");
    }
}

//logica





