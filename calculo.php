<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado calculadora</title>
</head>
<body>
<?php
function calcular_preco_desenvolvimento_site($quantidade_horas, $taxa_horaria, $custos_adicionais, $margem_lucro_percentual, $desconto_percentual) {
 
    $custo_total = $quantidade_horas * $taxa_horaria;

    $custo_total_com_adicionais = $custo_total + $custos_adicionais;
    

    $margem_lucro = ($margem_lucro_percentual / 100) * $custo_total_com_adicionais;
    

    $preco_antes_desconto = $custo_total_com_adicionais + $margem_lucro;
    
    
    $valor_desconto = ($desconto_percentual / 100) * $preco_antes_desconto;
    
    
    $preco_final = $preco_antes_desconto - $valor_desconto;
    
    return [
        'custo_total' => $custo_total,
        'custo_total_com_adicionais' => $custo_total_com_adicionais,
        'margem_lucro' => $margem_lucro,
        'preco_antes_desconto' => $preco_antes_desconto,
        'valor_desconto' => $valor_desconto,
        'preco_final' => $preco_final
    ];
}


$quantidade_horas = $_GET["quantidade_horas"];
$taxa_horaria = $_GET["taxa_horaria"];
$custos_adicionais = $_GET["custos_adicionais"];  
$margem_lucro_percentual = $_GET["margem_lucro_percentual"];
$desconto_percentual = $_GET["desconto_percentual"];

$resultado = calcular_preco_desenvolvimento_site($quantidade_horas, $taxa_horaria, $custos_adicionais, $margem_lucro_percentual, $desconto_percentual);

echo "Custo Total (sem adicionais): R$ " . $resultado['custo_total'] . "\n";
echo "Custo Total (com adicionais): R$ " . $resultado['custo_total_com_adicionais'] . "\n";
echo "Margem de Lucro: R$ " . $resultado['margem_lucro'] . "\n";
echo "Preço Antes do Desconto: R$ " . $resultado['preco_antes_desconto'] . "\n";
echo "Valor do Desconto: R$ " . $resultado['valor_desconto'] . "\n";
echo "Preço Final (com desconto): R$ " . $resultado['preco_final'] . "\n";
?>
</body>
</html>