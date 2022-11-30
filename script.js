const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const endereco = document.getElementById("endereco");
const abertura = document.getElementById("abertura");

const fechamento = document.getElementById("fechamento");

function MudarCorDaBordaDoElementoEmFoco(e){
    e.target.style = 'outline-color:purple'
}

function LogarValor(e){
    console.log(e.target.value)
}

function GerarMsgDeEspera(e){
    console.log('Preparando envio do formulário...');
    event.preventDefault();
}

nome.addEventListener('focus', MudarCorDaBordaDoElementoEmFoco);
nome.addEventListener('change', LogarValor);

endereco.addEventListener('focus', MudarCorDaBordaDoElementoEmFoco);
endereco.addEventListener('change', LogarValor);

abertura.addEventListener('focus', MudarCorDaBordaDoElementoEmFoco);
abertura.addEventListener('change', LogarValor);

fechamento.addEventListener('focus', MudarCorDaBordaDoElementoEmFoco);
fechamento.addEventListener('change', LogarValor);

formulario.addEventListener('submit', GerarMsgDeEspera);