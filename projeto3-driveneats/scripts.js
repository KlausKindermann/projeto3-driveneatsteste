function selecionarPedido(classEscolha){
    const escolhaUmSelecionada = document.querySelector('.pratoSelecionado');
    if (escolhaUmSelecionada !== null){
        escolhaUmSelecionada.classList.remove ('pratoSelecionado');  
    }
    const seletor = '.'+classEscolha;
    const escolha = document.querySelector (seletor);
    escolha.classList.add('pratoSelecionado');
}
function selecionarBebida(classEscolha){
    const escolhaDoisSelecionada = document.querySelector('.bebidaSelecionada');
    if (escolhaDoisSelecionada !== null){
        escolhaDoisSelecionada.classList.remove ('bebidaSelecionada');  
    }
    const seletor = '.'+classEscolha;
    const escolha = document.querySelector (seletor);
    escolha.classList.add('bebidaSelecionada');
}
function selecionarSobremesa(classEscolha){
    const escolhaTresSelecionada = document.querySelector('.sobremesaSelecionada');
    if (escolhaTresSelecionada !== null){
        escolhaTresSelecionada.classList.remove ('sobremesaSelecionada');  
    }
    const seletor = '.'+classEscolha;
    const escolha = document.querySelector (seletor);
    escolha.classList.add('sobremesaSelecionada');
    mensagemPedido()
}

let parte1_nome ;
let parte2_nome ;
let parte3_nome ;

function mensagemPedido() {

const primeiro_elemento = document.querySelector(".pratosSelecionado");
        parte1_nome=primeiro_elemento.getElementsByTagName("h4")[0];
        alert(parte1_nome);

const segundo_elemento = document.querySelector(".bebidaSelecionada");
        parte2_nome=segundo_elemento.getElementsByTagName("h4")[0];  

const terceito_elemento = document.querySelector(".sobremesaSelecionada");
        parte3_nome=terceito_elemento.getElementsByTagName("h4")[0];
}      
