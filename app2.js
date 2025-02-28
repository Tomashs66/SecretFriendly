let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // CORREGIDO

    if (nombre === "") { // CORREGIDO
        alert("Por favor digite un nombre válido");
        return;
    }

    amigos.push(nombre); // CORREGIDO

    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();
}

function actualizarLista() {
    const listaAmigosUl = document.getElementById("listaAmigos");
    listaAmigosUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor agrega nombres primero");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
}

// Manejando eventos desde JavaScript (evita conflictos con `onclick`)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar")?.addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear")?.addEventListener("click", sortearAmigo);
});