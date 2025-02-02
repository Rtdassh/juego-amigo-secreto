// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSorteado = null;
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

function agregarAmigo() {
    let inputTextBox = document.getElementById('amigo').value;

    if (validacionTexto(inputTextBox)) {
        listadoAmigos.push(inputTextBox);
        actualizarLista();
        document.getElementById('amigo').value = "";
    }
}

function activarSorteo() {
    document.getElementById('caja-sorteo').style.display = "flex";
    document.getElementById('main-text').innerText = "Adivina el Amigo Secreto";
    document.getElementById('secondary-text').innerText = "Intenta escribiendo el nombre de un amigo";
    document.getElementById('ingresar-datos').style.display = "none";
    
}

function sortearAmigo() {
    
    activarSorteo();
    if(amigoSorteado === null){
        do {
            amigoSorteado = listadoAmigos[Math.floor(Math.random() * listadoAmigos.length)];
        } while (listadoAmigosSorteados.includes(amigoSorteado));
    
        listadoAmigosSorteados.push(amigoSorteado); 
    } else alert("Ya se ha sorteado un amigo");
    
    if (listadoAmigos.length < 2) {
        alert("Debes ingresar al menos dos amigos para sortear.");
        return;
    }

    if (listadoAmigos.length === listadoAmigosSorteados.length) {
        alert("Todos los amigos han sido sorteados.");
        return;
    }

}

function verificarIntento() {
    let nombreIngresado = document.getElementById('amigo-sorteado').value.trim();

    if(amigoSorteado === null) {
        alert("Por favor, sortea un amigo");
        return;
    }
    if (nombreIngresado === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (nombreIngresado === amigoSorteado) {
        alert("¡Acertaste! " + amigoSorteado + " era el amigo secreto.");
        document.getElementById('amigo-sorteado').value = "";
        listadoAmigos = listadoAmigos.filter(amigo => amigo !== amigoSorteado);
        actualizarLista();
        amigoSorteado = null;
        if(listadoAmigos.length <=1) {
            document.getElementById("caja-sorteo").style.display = "none";
            document.getElementById("botonReinicio").style.display = "flex";
            document.getElementById("botonSorteo").style.display = "none";
        }
    } else {
        alert("Fallaste. Intenta de nuevo.");
    }
}

function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listadoAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function reiniciarJuego() {
    amigoSorteado = null;
    listadoAmigos = [];
    listadoAmigosSorteados = [];
    
    document.getElementById('amigo').value = "";
    document.getElementById('amigo-sorteado').value = "";
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('caja-sorteo').style.display = "none";
    document.getElementById('ingresar-datos').style.display = "flex";
    document.getElementById('botonReinicio').style.display = "none";
    document.getElementById('botonSorteo').style.display = "flex";
    document.getElementById('main-text').innerText = "Ingresa los nombres de los amigos";
    document.getElementById('secondary-text').innerText = "Luego presiona el botón de sorteo";
}

