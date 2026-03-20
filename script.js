//inserir valores aos botões da calculadora
function insertValor(valor) {
    document.getElementById('resultado').value += valor;
}

//apricar o resultado da conta com o =
function showresult() {
    const resultado = eval(document.getElementById('resultado').value);
    document.getElementById('resultado').value = resultado;
}

//limpar elementos da conta
function limpaValores() {
    document.getElementById('resultado').value = '';
}

