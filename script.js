const cardConteiner = document.querySelector(".card-conteiner");
const buscaInput = document.querySelector("input[type='text']");
const mensagemSemResultado = document.querySelector(".sem-resultado");

let dados = [];

function renderCards(dados) {
    cardConteiner.innerHTML = ""; // Limpa os cards existentes
    for( let dado of dados){
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.ano}</p>
        <p>${dado.Description}</p>
        <p>${dado.Streamings}</p>
        `

        cardConteiner.appendChild(article);
    }
}

function iniciar() {
    const termoBuscado = buscaInput.value.toLowerCase();

    const dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBuscado) || 
        dado.Description.toLowerCase().includes(termoBuscado)
    );

    if (dadosFiltrados.length === 0) {
        cardConteiner.innerHTML = ""; // Limpa os cards
        mensagemSemResultado.style.display = "block"; // Mostra a mensagem
    } else {
        mensagemSemResultado.style.display = "none"; // Esconde a mensagem
        renderCards(dadosFiltrados);
    }
}

async function carregarDados() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderCards(dadosFiltrados);
}

carregarDados();
