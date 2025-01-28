// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSorteado;
let listadoAmigos = [];
let listadoAmigosSorteados = [];


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
    amigoSorteado = listadoAmigos[Math.floor(Math.random()*listadoAmigos.length)];
    console.log("test");
    if (listadoAmigos.length == listadoAmigosSorteados.length) {
        console.log("Todos los amigos han sido sorteados");
    } else {
        if (listadoAmigosSorteados.includes(amigoSorteado)) {
            return sortearAmigo();
        } else {
            listadoAmigosSorteados.push(amigoSorteado);
            return amigoSorteado;
        }
    }
}

function verificarIntento() {
    let nombreIngresado = document.getElementById('amigo-sorteado').value;
    
    if (nombreIngresado === amigoSorteado) {
        console.log("Acertaste");
    } else {
        console.log("Fallaste");
    }
    return;
}

function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listadoAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    })}