let listaGeral = [];

function adicionar() {
let nomeAmigo = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');

listaGeral.push(nomeAmigo.value);
if (lista.textContent == '') {
    lista.textContent = nomeAmigo.value;
} else {
    lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
}
nomeAmigo.value = '';


}
function sortear() {
embaralha(listaGeral);
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {

}