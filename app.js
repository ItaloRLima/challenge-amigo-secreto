//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeDosAmigos = [];

function limparInput(){
    valor = document.querySelector('input');
    valor.value = '';
}

function atualizarLista(amigo){
    var nomeLista = document.createElement('li'); //Cria o elemento da lista

    nomeDosAmigos.push(amigo); //Adiciona o nome dos amigos a lista inicial
    nomeLista.innerHTML = amigo; //Adiciona o nome do amigo ao html da <li> criada
    listaAmigos.appendChild(nomeLista); //Utiliza o id da <ul> listaAmigos para acrescentar o nome ao html
}

function limparListaHTML(){
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = " ";
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * nomeDosAmigos.length);
}

function amigoEscolhido(numero){
    var nomeGanhador = document.getElementById('resultado');
    
    textoGanhador = `O amigo secreto sorteado é: ${nomeDosAmigos[numero]}`;
    nomeGanhador.innerHTML = textoGanhador;
}

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if(nome){
        atualizarLista(nome);
    }else{
        alert('Por favor, insira um nome.');
    }
    limparInput();
}

function sortearAmigo(){
    if (nomeDosAmigos.length > 0){
        let numero = gerarNumeroAleatorio();
        amigoEscolhido(numero);
        limparListaHTML();
        nomeDosAmigos = [];
    } else{
        alert("Adicione alguém à lista primeiro.")
    }
    limparInput();
}