//Seleciona os elementos das luzes
const luzVermelha = document.getElementById("vermelho");
const luzAmarelo = document.getElementById("amarela");
const luzVerde = document.getElementById("verde");
// Botões
const btnVermelho = document.getElementById("btnVermelho");
const btnAmarela = document.getElementById("btnAmarela");
const btnVerde = document.getElementById("btnVerde");
const btnAuto = document.getElementById("btnAuto");
const btnParar = document.getElementById("btnParar");
//variável para o modo automático
let intervalo;

function limpar(){
    luzVermelha.className = 'luz';
    luzAmarelo.className = 'luz';
    luzVerde.className = 'luz';
}

function acenderVermelho(){
    limpar();
    luzVermelha.classList.add("acesa","vermelho");
}

function acenderAmarela(){
    limpar();
    luzAmarelo.classList.add("acesa","amarela");
}

function acenderVerde(){
    limpar();
    luzVerde.classList.add("acesa","verde");
}

function modoAutomativo(){
    limpar();
    let estado =0
    intervalo = setInterval(()=>{
        if(estado === 0 ) acenderVermelho();
        else if (estado === 1 ) acenderAmarela();
        else if (estado === 1 ) acenderVerde();
        estado = (estado +1) % 3;
    },1000)
}

function parar(){
    clearInterval(intervalo);
    limpar();
}
btnParar.onclick = parar;
btnAuto.onclick = modoAutomativo;
btnVerde.onclick = acenderVerde;
btnAmarelo.onclick = acenderAmarela;
btnVermelho.onclick = acenderVermelho;