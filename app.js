// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadoAmigos = [];


function agregarAmigo(){
    let inputTextBox = document.getElementById('amigo').value;

    if (inputTextBox.trim() === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }
    listadoAmigos.push(inputTextBox);
    console.log("Amigo añadido: " + inputTextBox);
    document.getElementById('amigo').value = "";
}

function sortearAmigo(){
   
}


function asignarTexto(objeto, texto) {
    let objetoHTML = document.querySelector(objeto);
    objetoHTML.innerHTML = texto;
    return;
}
