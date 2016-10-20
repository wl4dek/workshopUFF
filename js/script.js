var valor = document.getElementById('valor');
var historico = document.getElementById('historico');
var limpar = document.getElementById('limpar');

function setNumber(num) {
    valor.value += num;
}

function setVirgula(){
    if (valor.value.indexOf('.') === -1) {
        valor.value += '.';
    }
}
