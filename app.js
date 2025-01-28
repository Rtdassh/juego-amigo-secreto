// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadoAmigos = [];


function agregarAmigo(){
    let inputTextBox = document.getElementById('amigo').value;

    if (inputTextBox.trim() === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }
    listadoAmigos.push(inputTextBox);
    actualizarLista();
    document.getElementById('amigo').value = "";  
}

function sortearAmigo(){
   alert("test");
}


function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listadoAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    })}