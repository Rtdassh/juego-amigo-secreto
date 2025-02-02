// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSorteado;
let listadoAmigos = [];
let listadoAmigosSorteados = [];

function validacionTexto(inputTextBox) {
    let amigoIngresado = inputTextBox.trim();

    if (amigoIngresado === "") {
        alert("Por favor, escribe un nombre.");
        return false;
    }

    if (validacionDatoRepetido(amigoIngresado)) {
        alert("El nombre ya está en la lista.");
        return false;
    }
    return true;
}

function validacionDatoRepetido(amigoIngresado) {
    return listadoAmigos.includes(amigoIngresado);
}


function agregarAmigo(){
    let inputTextBox = document.getElementById('amigo').value;

    if(validacionTexto(inputTextBox)) {
        listadoAmigos.push(inputTextBox);
        actualizarLista();
        document.getElementById('amigo').value = "";
    }

}

function activarSorteo(){
    document.getElementById('caja-sorteo').style = "Display: flex;"
    document.getElementById('main-text').innerText = "Adivina el Amigo Secreto";
    document.getElementById('secondary-text').innerText = "Intenta escribiendo el nombre de un amigo";
}

function sortearAmigo(){
    if (listadoAmigos.length >= 3){ 
        activarSorteo();
        document.getElementById('ingresar-datos').style = "Display: none";
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
} else alert("Debes ingresar tres amigos por lo menos"); 
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