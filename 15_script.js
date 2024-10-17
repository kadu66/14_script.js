function converterDuracao(){
    let inTitulo = document.getElementById("inTitulo")
    let inDuracao = document.getElementById("InDuracao")
    let outTitulo = document.getElementById("outTitulo")
    let outResposta = document.getElementById("outResposta")
    let titulo = inTitulo.value
    let duracao = Number(inDuracao.value)
    let horas = Math.floor (duracao / 60)
    let minutos = duracao % 60 
    outTitulo.innerHTML = horas + "horas(s) e" + minutos + "minutos"
}
let btConverter = document.getElementById("btCoverter")
btConverter.addEventListener("click", converterDuracao)