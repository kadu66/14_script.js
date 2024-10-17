//Cria a função para mostrar a promocao
function mostrarPromocao(){
    //cria referencia aos elementos do html
    let inVeiculo = document.getElementById ("inVeiculo")
    let inPreco = document.getElementById ("inPreco")
    //ids de saida no documento html
    let outVeiculo = document.getElementById ("outVeiculo")
    let outEntrada = document.getElementById ("outEntrada")
    let outParcela = document.getElementById ("outParcela")
    //obtem conteudos dos campos de entrada
    let veiculo = inVeiculo.value
    let preco = Number (inPreco.value)
    //Calcula o valor da entrada e das parcelas
    let entrada = preco *0.50
    let parcela = preco *0.50 / 12
    //exibe a resposta nos paragrafos de saida
    outVeiculo.textContent = "Promoção: " + veiculo
    outEntrada.textContent = "Entrada de R$" + entrada.toFixed (2)
    outParcela.textContent = "+12x de R$: " + parcela.toFixed (2)
}
//cria referencia ao btVerPromocao
let btVerPromocao = document.getElementById("btVerPromoção")
//registra o click associado ao botão
btVerPromocao.addEventListener("click", mostrarpromoção)