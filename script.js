//Seleciona os elementos das luzes
const luzVermelha = document.getElemontById("vermelho");
const luzAmarela = document.getElemontById("amarelo");
const luzVerde = document.getElemontById("verde");
// Botões
const btnVermelho = document.getElementById("btnVermelho");
const btnAmarelo = document.getElementById("btnAmarelo");
const btnVerde = document.getElementById("btnVerde");
const btnAuto = document.getElementById("btnAuto");
const btnParar = document.getElementById("btnParar");
//variável para o modo automático
let intervalo;

function limpar(){
    luzVermelha.className = 'luz';
    luzAmarela.className = 'luz';
    luzVerde.className = 'luz';
}
function acenderVermelho(){
    limpar();
    luzVermelha.classList.add("acesa","vermelha");
}

