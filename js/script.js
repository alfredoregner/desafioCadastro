function adicionar(){
    let exibir = document.querySelector("#adicionarForm");
    exibir.classList.replace("oculto", "visivel");
}

function salvar(){
    //Criando a tabela
    let tabela = document.querySelector("#eventos");
    let linha = 0;
    novaLinha = tabela.insertRow(linha+1);
    console.log(novaLinha);

    //Coletando as informações dos campos

    let evento = novaLinha.insertCell(0); //Cria a coluna
    evento.innerHTML = document.querySelector(".evento").value; //Insere o valor

    let ingresso = novaLinha.insertCell(1); //cria a coluna
    ingresso.innerHTML = parseFloat(document.querySelector(".ingresso").value);
    
    let dataInicio = novaLinha.insertCell(2);
    dataInicio.innerHTML = document.querySelector(".dataInicio").value;
    
    let dataFim = novaLinha.insertCell(3);
    dataFim.innerHTML = document.querySelector(".dataFim").value;

    // let botaoEditar = novaLinha.insertCell(4);
    // botaoEditar = document.createElement("button");
    // botaoEditar.setAttribute("id", "editar");
    // botaoEditar.setAttribute("onclick", "editar()");
    // botaoEditar.innerHTML = "Editar"

    // let botaoExcluir = novaLinha.insertCell(4);
    // botaoExcluir = document.createElement("button");
    // botaoExcluir.setAttribute("id", "excluir");
    // botaoExcluir.setAttribute("onclick", "excluir()");
    // botaoExcluir.innerHTML = "Excluir"
}

function editar(){
        
}

function excluir(){

}