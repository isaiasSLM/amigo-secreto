let listaGeral = [];

function adicionar() {
let nomeAmigo = document.getElementById('nome-amigo');
if (nomeAmigo.value == '') {
    alert('Por favor digite um nome!');
    return;
} 
if (listaGeral.includes(nomeAmigo.value)) {
    alert('Amigo já adicionado!');
    return;
}
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
    if (listaGeral.length < 4) {
    alert('Por favor adicione pelo menos 4 amigo!');
    return;
    }
embaralha(listaGeral);
let Sorteo = document.getElementById('lista-sorteio');


for (let i = 0; i < listaGeral.length; i++) {
    if (i == listaGeral.length - 1) {
        Sorteo.innerHTML = Sorteo.innerHTML + listaGeral[i] + '-->' + listaGeral[0] + '<br>';

    } else {
        Sorteo.innerHTML = Sorteo.innerHTML + listaGeral[i] + '-->' + listaGeral[i + 1] + '<br>';

    }
}
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
    listaGeral = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}