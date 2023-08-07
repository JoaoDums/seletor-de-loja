
const lojasPorCidade = {
    "Joinville": "Rua A, Loja 123",
    "Jaraguá do Sul": "Avenida B, Loja 456",
    
};


function verificarLojaECidade(cidadeProcurada) {
    if (lojasPorCidade[cidadeProcurada]) {
        return `Há uma loja na cidade de ${cidadeProcurada}. Endereço: ${lojasPorCidade[cidadeProcurada]}`;
    } else {
        const cidades = Object.keys(lojasPorCidade);
        const cidadeMaisProxima = cidades.reduce((a, b) => (
            Math.abs(a.charCodeAt(0) - cidadeProcurada.charCodeAt(0)) < Math.abs(b.charCodeAt(0) - cidadeProcurada.charCodeAt(0)) ? a : b
        ));
        return `Não há lojas na cidade de ${cidadeProcurada}. A loja mais próxima está na cidade de ${cidadeMaisProxima}. Endereço: ${lojasPorCidade[cidadeMaisProxima]}`;
    }
}

const cidadeInput = document.getElementById('cidadeInput');
const verificarBtn = document.getElementById('verificarBtn');
const resultado = document.getElementById('resultado');

verificarBtn.addEventListener('click', () => {
    const cidadeProcurada = cidadeInput.value;
    const resultadoTexto = verificarLojaECidade(cidadeProcurada);
    alert(resultadoTexto);
});