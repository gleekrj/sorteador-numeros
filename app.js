function sortear(){

    //Inciando das variáveis
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let numerosSorteados = [];
    let numeroSorteado;

    //Gerando os números aleatórios de acordo com a quantidade
    for (let i = 0; i < quantidade;i++){

        //Sorteando um número aleatório
        numeroSorteado  = obterNumeroAleatorio(de, ate);

        //Caso seja repetido, ignorar o número e sortear outro
        while (numerosSorteados.includes(numeroSorteado)){
            numeroSorteado  = obterNumeroAleatorio(de, ate);
        }

        numerosSorteados.push(numeroSorteado);

    }

    //Preencher a mensagem de números sorteados
    let mensagemNumerosSorteados = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;
    document.getElementById("resultado").innerHTML = mensagemNumerosSorteados;

    //Habilitar o botão Reiniciar
    alterarStatusBotao();
    
}

//Obter um número aleatório com mínimo e máximo
function obterNumeroAleatorio(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Reiniciar o jogo, limpando os campos e desabilitando o botão Reiniciar
function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    alterarStatusBotao();
}

//Função para alterar o status do botão Reiniciar
function alterarStatusBotao(){
    
    let botao = document.getElementById("btn-reiniciar");

    if (botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else{
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}