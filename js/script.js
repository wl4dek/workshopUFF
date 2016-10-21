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

function LimparHistorico(){
    historico.innerHTML = '';
    limpar.style.display = 'none';
}

function limparValor(){
    valor.value = '';
}

function igual(){
    var resultado = historico.innerHTML.split('<br>').join('');
    resultado = resultado.split(' ').join('');

    if (valor.value !== '') {
        historico.innerHTML += valor.value + '<br>';
        resultado += valor.value;
    }else{
        resultado = resultado.slice(1, resultado.length - 1);
    }

    valor.value = eval(resultado);
    historico.innerHTML += ' = ' + valor.value;

    if (historico.innerHTML !== '') {
        limpar.style.display = 'block';
    }
}

function Soma(){
    if (valor.value !== '') {
        historico.innerHTML += valor.value + ' + </br>';
        valor.value = '';
    }
}

function Divisao(){
    if (valor.value !== '') {
        historico.innerHTML += valor.value + ' / </br>';
        valor.value = '';
    }
}

function Multiplicacao(){
    if (valor.value !== '') {
        historico.innerHTML += valor.value + ' * </br>';
        valor.value = '';
    }
}

function Subitracao(){
    if (valor.value !== '') {
        historico.innerHTML += valor.value + ' - </br>';
        valor.value = '';
    }
}
