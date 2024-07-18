document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let quantidadeHoras = parseFloat(document.getElementById('quantidadeHoras').value);
    let taxaHoraria = parseFloat(document.getElementById('taxaHoraria').value);
    let custosAdicionais = parseFloat(document.getElementById('custosAdicionais').value);
    let margemLucroPercentual = parseFloat(document.getElementById('margemLucroPercentual').value);
    let descontoPercentual = parseFloat(document.getElementById('descontoPercentual').value) || 0;

    let resultado = calcularPrecoDesenvolvimentoSite(quantidadeHoras, taxaHoraria, custosAdicionais, margemLucroPercentual, descontoPercentual);

    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = `
        <p>Custo Total (sem adicionais): R$ ${resultado.custoTotal.toFixed(2)}</p>
        <p>Custo Total (com adicionais): R$ ${resultado.custoTotalComAdicionais.toFixed(2)}</p>
        <p>Margem de Lucro: R$ ${resultado.margemLucro.toFixed(2)}</p>
        <p>Preço Antes do Desconto: R$ ${resultado.precoAntesDesconto.toFixed(2)}</p>
        <p>Valor do Desconto: R$ ${resultado.valorDesconto.toFixed(2)}</p>
        <p>Preço Final (com desconto): R$ ${resultado.precoFinal.toFixed(2)}</p>
    `;
});

function calcularPrecoDesenvolvimentoSite(quantidadeHoras, taxaHoraria, custosAdicionais, margemLucroPercentual, descontoPercentual) {
    let custoTotal = quantidadeHoras * taxaHoraria;
    
    let custoTotalComAdicionais = custoTotal + custosAdicionais;
    
    let margemLucro = (margemLucroPercentual / 100) * custoTotalComAdicionais;
    
    let precoAntesDesconto = custoTotalComAdicionais + margemLucro;
    
    let valorDesconto = (descontoPercentual / 100) * precoAntesDesconto;
    
    let precoFinal = precoAntesDesconto - valorDesconto;
    
    return {
        custoTotal: custoTotal,
        custoTotalComAdicionais: custoTotalComAdicionais,
        margemLucro: margemLucro,
        precoAntesDesconto: precoAntesDesconto,
        valorDesconto: valorDesconto,
        precoFinal: precoFinal
    };
}